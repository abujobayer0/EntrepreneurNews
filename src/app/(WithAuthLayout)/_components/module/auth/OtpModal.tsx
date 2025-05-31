/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useOtpVerifyWeb, useOtpSendWeb } from "@/hooks/auth.hooks";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { OtpSendRequest, OtpVerifyRequest } from "@/types";

interface OtpModalProps {
  identifier: string;
  onClose: () => void;
  hash: string;
}

export default function OtpModal({ identifier, onClose, hash }: OtpModalProps) {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const router = useRouter();

  const { mutate: verifyOtp, isPending: isVerifying } = useOtpVerifyWeb();
  const { mutate: resendOtp, isPending: isResending } = useOtpSendWeb();

  const validateOtp = (otpValue: string) => {
    if (!otpValue) {
      return "OTP is required";
    } else if (otpValue.length !== 6) {
      return "OTP must be 6 digits long";
    }
    return "";
  };

  const handleVerifyOtp = () => {
    const otpValidationError = validateOtp(otp);
    setOtpError(otpValidationError);

    if (!otpValidationError) {
      const otpVerifyData: OtpVerifyRequest = {
        identifier,
        hash,
        otp: parseInt(otp, 10),
      };

      verifyOtp(otpVerifyData, {
        onSuccess: () => {
          toast.success("OTP Verified Successfully");
          router.push("/");
          onClose();
        },
        onError: (error: any) => {
          setOtpError(
            error.response?.data?.message || "OTP Verification Failed"
          );
        },
      });
    }
  };

  const handleResendOtp = () => {
    const otpSendData: OtpSendRequest = {
      identifier,
      verificationType: "SIGN_UP",
    };

    resendOtp(otpSendData, {
      onSuccess: () => {
        toast.success("New OTP sent successfully");
      },
      onError: (error: any) => {
        toast.error(error.response?.data?.message || "Failed to resend OTP");
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-white rounded-lg p-6 pb-7 pt-0 mx-4 relative">
        <div className="flex items-center justify-end w-full mt-4">
          <button
            className="text-gray-500 hover:bg-gray-100 p-2 rounded-full w-8 h-8 flex items-center justify-center"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>
        <h2 className="text-[24px] leading-[32px] font-bold text-[#101828] mb-2">
          Verify OTP
        </h2>
        <p className="text-[16px] leading-[24px] text-[#667085] mb-6">
          Enter the 6-digit OTP sent to {identifier}
        </p>

        <div className="w-full">
          <input
            className={`w-full h-12 border rounded-lg px-4 text-[16px] focus:outline-none text-[#101828] ${
              otpError ? "border-[#FF0000]" : "border-[#D0D5DD]"
            }`}
            type="text"
            placeholder="Enter 6-digit OTP"
            maxLength={6}
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              setOtpError(""); // Clear error on input change
            }}
          />
          {otpError && (
            <p className="text-[#FF0000] text-[12px] mt-1 text-left w-full">
              {otpError}
            </p>
          )}
        </div>

        <div className="flex space-x-4 mt-4 gap-3">
          <button
            className="w-full h-12 bg-[#003087] rounded-lg text-white text-[16px] font-medium cursor-pointer"
            onClick={handleVerifyOtp}
            disabled={isVerifying}
          >
            {isVerifying ? "Verifying..." : "Verify OTP"}
          </button>
          <button
            className="w-full h-12 border border-[#003087] rounded-lg text-[#003087] text-[16px] font-medium cursor-pointer"
            onClick={handleResendOtp}
            disabled={isResending}
          >
            {isResending ? "Resending..." : "Resend OTP"}
          </button>
        </div>
      </div>
    </div>
  );
}
