"use client";

import React, { useState } from "react";
import { useLogin } from "@/hooks/auth.hooks";
import type { LoginRequest, LoginResponse } from "@/types";
import SocialLogin from "./SocialLogin";
import { useScreenSize } from "@/utils/screenSize";
import BrandLogo from "@/components/ui/BrandLogo";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { setTokens } from "@/utils/tokenManager";
import { useRouter } from "next/navigation";
import InputField from "@/components/ui/form/InputField";

export default function LoginForm() {
  const router = useRouter();
  const { isSmallScreen, isMediumScreen } = useScreenSize();
  const isLargeScreen = !isSmallScreen && !isMediumScreen;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // redirect search params
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const redirect = searchParams?.get("redirect") ?? undefined;

  // Login mutation
  const loginMutation = useLogin();

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  // Handle email continue button (for large screens)
  const handleContinueWithEmail = () => {
    const emailValidationError = validateEmail(email);
    setEmailError(emailValidationError);

    if (!emailValidationError && isLargeScreen) {
      setShowPassword(true);
    }
  };

  // Handle login submission
  const handleLogin = () => {
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if (!emailValidationError && !passwordValidationError) {
      setIsLoading(true);

      const loginData: LoginRequest = {
        identifier: email,
        password,
        remember: rememberMe,
        rememberDays: rememberMe ? 7 : 1,
      };

      loginMutation.mutate(loginData, {
        onSuccess: (response: LoginResponse) => {
          setTokens(response.data);
          toast.success(response.message || "Login successful!");

          const userRoles = response.data.user.roles;

          if (redirect && typeof redirect === "string") {
            router.push(redirect);
          } else if (
            userRoles.includes("Super Admin") ||
            userRoles.includes("Internal")
          ) {
            router.push("/authors");
          } else {
            router.push("/");
          }
        },
        onError: (error) => {
          const errorMessage =
            (error as AxiosError<{ message?: string }>).response?.data
              ?.message || "An unexpected error occurred. Please try again.";

          toast.error(errorMessage);

          if (errorMessage.toLowerCase().includes("email")) {
            setEmailError(errorMessage);
          } else if (errorMessage.toLowerCase().includes("password")) {
            setPasswordError(errorMessage);
          }
        },
        onSettled: () => {
          setIsLoading(false);
        },
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col justify-center items-center md:h-screen">
      {/* Logo */}
      <div className="md:ml-10 mb-6">
        <BrandLogo />
      </div>

      {/* Title and Subtitle */}
      <h1 className="text-[24px] lg:text-[30px] leading-[32px] lg:leading-[38px] font-bold text-[#101828] mb-2">
        Log in to your account
      </h1>
      <p className="text-[16px] leading-[24px] text-[#667085] mb-6">
        Welcome back! Please enter your details.
      </p>

      {/* Email Input */}
      <div className="w-full">
        <InputField
          type="email"
          className="py-3"
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError("");
          }}
          error={emailError}
        />
      </div>

      {/* Password Input (Visible on small/medium devices or after clicking Continue on large devices) */}
      {(isSmallScreen || isMediumScreen || showPassword) && (
        <div className="w-full mt-4">
          <InputField
            type={showPassword ? "text" : "password"}
            className="py-3"
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError("");
            }}
            error={passwordError}
          />

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2 rounded text-[#003087] focus:ring-[#003087]"
              />
              <label
                htmlFor="rememberMe"
                className="text-[14px] text-[#667085]"
              >
                Remember me
              </label>
            </div>
            <a
              href="/auth/forgot-password"
              className="text-[14px] text-[#003087] hover:underline"
            >
              Forgot password?
            </a>
          </div>
        </div>
      )}

      {/* Button: Continue with Email (large devices) or Login (small/medium devices or after password entry) */}
      {isLargeScreen && !showPassword ? (
        <button
          className="w-full py-3 bg-[#003087] rounded-lg flex items-center justify-center mt-6 text-white text-[16px] font-medium hover:bg-[#00215E] transition-colors duration-300"
          onClick={handleContinueWithEmail}
        >
          Continue with email
        </button>
      ) : (
        <button
          className={`w-full py-3 rounded-lg flex items-center justify-center mt-6 text-white text-[16px] font-medium transition-colors duration-300 ${
            isLoading
              ? "bg-[#6CA6CD] cursor-not-allowed"
              : "bg-[#003087] hover:bg-[#00215E]"
          }`}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      )}

      {/* OR Separator */}
      <div className="flex flex-row items-center my-6 w-full">
        <div className="flex-1 h-px bg-[#D0D5DD]" />
        <span className="text-[14px] text-[#667085] mx-4">OR</span>
        <div className="flex-1 h-px bg-[#D0D5DD]" />
      </div>

      {/* Social Login */}
      <SocialLogin
        title1="Don't have an account?"
        title2="Sign up"
        href="/auth/sign-up"
      />
    </div>
  );
}
