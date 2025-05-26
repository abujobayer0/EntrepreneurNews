"use client";

import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { useScreenSize } from "@/utils/screenSize";
import BrandLogo from "@/components/ui/BrandLogo";

export default function LoginForm() {
  const { isSmallScreen, isMediumScreen } = useScreenSize();
  const isLargeScreen = !isSmallScreen && !isMediumScreen;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    } else if (password.length < 8) {
      return "Password must be at least 8 characters long";
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
      console.log("Login Details:", { email, password });
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
        Log in to your account
      </h1>
      <p className="text-[16px] leading-[24px] text-[#667085] mt-2">
        Welcome back! Please enter your details.
      </p>

      {/* Email Input */}
      <input
        className={`w-full h-12 border rounded-lg px-4 text-[16px] focus:outline-none text-[#101828] mt-6 ${
          emailError ? "border-[#dd4545]" : "border-[#D0D5DD]"
        }`}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(""); // Clear error on input change
        }}
      />
      {emailError && (
        <p className="text-[#dd4545] text-[12px] mt-1 text-left w-full">
          {emailError}
        </p>
      )}

      {/* Password Input (Visible on small/medium devices or after clicking Continue on large devices) */}
      {(isSmallScreen || isMediumScreen || showPassword) && (
        <>
          <input
            className={`w-full h-12 border rounded-lg px-4 text-[16px] focus:outline-none text-[#101828] mt-4 ${
              passwordError ? "border-[#dd4545]" : "border-[#D0D5DD]"
            }`}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(""); // Clear error on input change
            }}
          />
          {passwordError && (
            <p className="text-[#dd4545] text-[12px] mt-1 text-left w-full">
              {passwordError}
            </p>
          )}
        </>
      )}

      {/* Button: Continue with Email (large devices) or Login (small/medium devices or after password entry) */}
      {isLargeScreen && !showPassword ? (
        <button
          className="w-full h-12 bg-[#003087] rounded-lg flex items-center justify-center mt-4 text-white text-[16px] font-medium"
          onClick={handleContinueWithEmail}
        >
          Continue with email
        </button>
      ) : (
        <button
          className="w-full h-12 bg-[#003087] rounded-lg flex items-center justify-center mt-4 text-white text-[16px] font-medium cursor-pointer"
          onClick={handleLogin}
        >
          Login
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
