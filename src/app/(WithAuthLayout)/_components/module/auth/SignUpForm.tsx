/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import BrandLogo from "@/components/ui/BrandLogo";
import SocialLogin from "./SocialLogin";
import { useScreenSize } from "@/utils/screenSize";
import { useRegister } from "@/hooks/auth.hooks";
import { toast } from "sonner";
import OtpModal from "./OtpModal";
import { AxiosError } from "axios";
import { RegisterRequest } from "@/types";
import InputField from "@/components/ui/form/InputField";

export default function SignUpForm() {
  const { isSmallScreen, isMediumScreen } = useScreenSize();
  const isLargeScreen = !isSmallScreen && !isMediumScreen;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [otpModalData, setOtpModalData] = useState<{
    identifier: string;
    hash: string;
  } | null>(null);

  const { mutate: register, isPending: isRegistering } = useRegister();

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

  const validateFullName = (name: string) => {
    if (!name) {
      return "Full name is required";
    } else if (name.length < 2) {
      return "Full name must be at least 2 characters long";
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

  // Handle sign-up submission
  const handleSignUp = () => {
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);
    const fullNameValidationError = validateFullName(fullName);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if (
      !emailValidationError &&
      !passwordValidationError &&
      !fullNameValidationError
    ) {
      const registerData: RegisterRequest = {
        identifier: email,
        password,
        fullName,
      };

      register(registerData, {
        onSuccess: (response: any) => {
          // Use the OTP data from the registration response
          const otpData = response.data;

          // Open OTP modal with received hash
          setOtpModalData({
            identifier: otpData.identifier,
            hash: otpData.hash,
          });

          // Show success toast with OTP message
          toast.success(otpData.message || "User Registered Successfully");
        },
        onError: (error) => {
          toast.error(
            (error as AxiosError<{ message?: string }>).response?.data
              ?.message || "Registration failed"
          );
        },
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col justify-center items-center md:h-screen">
      {/* Logo */}
      <div className="md:ml-10">
        <BrandLogo />
      </div>

      {/* Title and Subtitle */}
      <h1 className="text-[24px] lg:text-[30px] leading-[32px] lg:leading-[38px] font-bold text-[#101828] mt-6">
        Sign up for an account
      </h1>
      <p className="text-[16px] leading-[24px] text-[#667085] mt-2">
        Create your account to get started.
      </p>

      {/* Full Name Input */}
      <div className="w-full mt-6">
        <InputField
          type="text"
          className="py-3"
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={(text) => {
            setFullName(text);
            // Clear any previous errors
          }}
          error={emailError}
        />
      </div>

      {/* Email Input */}
      <div className="w-full mt-4">
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
            type="password"
            className="py-3"
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError("");
            }}
            error={passwordError}
          />
        </div>
      )}

      {/* Button: Continue with Email (large devices) or Sign Up (small/medium devices or after password entry) */}
      {isLargeScreen && !showPassword ? (
        <button
          className="w-full py-3 bg-[#003087] rounded-lg flex items-center justify-center mt-4 text-white text-[16px] font-medium cursor-pointer"
          onClick={handleContinueWithEmail}
        >
          Continue with email
        </button>
      ) : (
        <button
          className="w-full py-3 bg-[#003087] rounded-lg flex items-center justify-center mt-4 text-white text-[16px] font-medium cursor-pointer"
          onClick={handleSignUp}
          disabled={isRegistering}
        >
          {isRegistering ? "Registering..." : "Sign up"}
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
        title1="Already have an account?"
        title2="Log in"
        href="/auth/login"
      />

      {/* OTP Modal */}
      {otpModalData && (
        <OtpModal
          identifier={otpModalData.identifier}
          hash={otpModalData.hash}
          onClose={() => setOtpModalData(null)}
        />
      )}
    </div>
  );
}
