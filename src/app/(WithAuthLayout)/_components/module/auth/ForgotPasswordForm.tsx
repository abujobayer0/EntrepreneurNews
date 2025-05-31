/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useResetPasswordRequestWeb,
  useResetPasswordVerifyWeb,
} from "@/hooks/auth.hooks";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import {
  GenericSuccessResponse,
  ResetPasswordRequestRequest,
  ResetPasswordVerifyRequest,
} from "@/types";
import InputField from "@/components/ui/form/InputField";
import { Button } from "@/components/ui/button/Button";
import BrandLogo from "@/components/ui/BrandLogo";

// Validation schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const otpVerificationSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [resetHash, setResetHash] = useState<string>("");
  const [resetEmail, setResetEmail] = useState<string>("");

  // Reset password request mutation
  const resetPasswordRequestMutation = useResetPasswordRequestWeb();

  // OTP verification mutation
  const resetPasswordVerifyMutation = useResetPasswordVerifyWeb();

  // Email form control
  const {
    control: emailControl,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  // OTP form control
  const {
    control: otpControl,
    handleSubmit: handleOtpSubmit,
    formState: { errors: otpErrors },
  } = useForm<{ otp: string; newPassword: string }>({
    resolver: zodResolver(otpVerificationSchema),
    defaultValues: { otp: "", newPassword: "" },
  });

  // Handle email submission
  const onEmailSubmit = (data: { email: string }) => {
    const requestData: ResetPasswordRequestRequest = {
      identifier: data.email,
    };

    resetPasswordRequestMutation.mutate(requestData, {
      onSuccess: (response: GenericSuccessResponse) => {
        const message = response.message || "OTP sent successfully";
        const hash = response.data?.hash || "";

        toast.success(message);
        setResetHash(hash);
        setResetEmail(data.email);
        setStep("otp");
      },
      onError: (error: AxiosError) => {
        const errorMessage =
          (error.response?.data as any)?.message || "An error occurred";
        toast.error(errorMessage);
      },
    });
  };

  // Handle OTP verification
  const onOtpSubmit = (data: { otp: string; newPassword: string }) => {
    const requestData: ResetPasswordVerifyRequest = {
      identifier: resetEmail,
      hash: resetHash,
      otp: parseInt(data.otp),
      newPassword: data.newPassword,
    };

    resetPasswordVerifyMutation.mutate(requestData, {
      onSuccess: () => {
        toast.success("Password reset successful");
        router.push("/auth/login");
      },
      onError: (error: AxiosError) => {
        const errorMessage =
          (error.response?.data as any)?.message || "Password reset failed";
        toast.error(errorMessage);
      },
    });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto p-6">
        <div className="bg-white rounded-lg p-8">
          <div className="md:ml-10 mb-6 flex items-center justify-center w-full pr-7">
            <BrandLogo />
          </div>

          <h2 className="text-2xl font-semibold text-center mb-6">
            {step === "email" ? "Forgot Password" : "Reset Password"}
          </h2>

          {step === "email" && (
            <form
              onSubmit={handleEmailSubmit(onEmailSubmit)}
              className="space-y-4"
            >
              <div>
                <Controller
                  name="email"
                  control={emailControl}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="email"
                      className="py-3"
                      placeholder="Enter your email"
                      onChangeText={(text) => field.onChange(text)}
                      error={emailErrors.email?.message}
                    />
                  )}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                title="Send OTP"
                className="w-full"
                disabled={resetPasswordRequestMutation.isPending}
                loading={resetPasswordRequestMutation.isPending}
              />

              <div className="flex flex-row justify-center mt-6 gap-2">
                <span className="text-[14px] text-[#667085]">
                  If you know password then,
                </span>
                <Link
                  href={"/auth/login"}
                  className="text-[14px] text-[#003087] font-semibold"
                >
                  login
                </Link>
              </div>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={handleOtpSubmit(onOtpSubmit)} className="space-y-4">
              <div>
                <Controller
                  name="otp"
                  control={otpControl}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="text"
                      className="py-3"
                      placeholder="Enter 6-digit OTP"
                      onChangeText={(text) => field.onChange(text)}
                      error={otpErrors.otp?.message}
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  name="newPassword"
                  control={otpControl}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="password"
                      className="py-3"
                      placeholder="Enter new password"
                      onChangeText={(text) => field.onChange(text)}
                      error={otpErrors.newPassword?.message}
                    />
                  )}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                title="Reset Password"
                className="w-full"
                disabled={resetPasswordVerifyMutation.isPending}
                loading={resetPasswordVerifyMutation.isPending}
              />

              <div className="flex flex-row justify-center mt-6 gap-2">
                <span className="text-[14px] text-[#667085]">
                  If you know password then,
                </span>
                <Link
                  href={"/auth/login"}
                  className="text-[14px] text-[#003087] font-semibold"
                >
                  login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
