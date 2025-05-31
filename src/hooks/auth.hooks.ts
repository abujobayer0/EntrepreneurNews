import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axiosInstance from "../services/axiosInstance";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ChangePasswordRequest,
  OtpSendRequest,
  OtpSendResponse,
  OtpVerifyRequest,
  OtpVerifyResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ResetPasswordRequestRequest,
  ResetPasswordVerifyRequest,
  ResetPasswordVerifyResponse,
} from "@/types";

// Define a generic success response type for endpoints that don't return specific data
interface GenericSuccessResponse {
  message?: string;
  success?: boolean;
}

// Login
export const useLogin = (): UseMutationResult<
  LoginResponse,
  AxiosError,
  LoginRequest
> =>
  useMutation<LoginResponse, AxiosError, LoginRequest>({
    mutationFn: (data: LoginRequest) =>
      axiosInstance.post("/web/auth/login", data).then((res) => res.data),
  });

// Register
export const useRegister = (): UseMutationResult<
  RegisterResponse,
  AxiosError,
  RegisterRequest
> =>
  useMutation<RegisterResponse, AxiosError, RegisterRequest>({
    mutationFn: (data: RegisterRequest) =>
      axiosInstance.post("/web/auth/register", data).then((res) => res.data),
  });

// Change Password (Web)
export const useChangePassword = (): UseMutationResult<
  GenericSuccessResponse,
  AxiosError,
  ChangePasswordRequest
> =>
  useMutation<GenericSuccessResponse, AxiosError, ChangePasswordRequest>({
    mutationFn: (data: ChangePasswordRequest) =>
      axiosInstance
        .patch("/web/auth/change-password", data)
        .then((res) => res.data),
  });

// Change Password (Internal)
export const useChangePasswordInternal = (): UseMutationResult<
  GenericSuccessResponse,
  AxiosError,
  ChangePasswordRequest
> =>
  useMutation<GenericSuccessResponse, AxiosError, ChangePasswordRequest>({
    mutationFn: (data: ChangePasswordRequest) =>
      axiosInstance
        .patch("/internal/auth/change-password", data)
        .then((res) => res.data),
  });

// OTP Send (Web)
export const useOtpSendWeb = (): UseMutationResult<
  OtpSendResponse,
  AxiosError,
  OtpSendRequest
> =>
  useMutation<OtpSendResponse, AxiosError, OtpSendRequest>({
    mutationFn: (data: OtpSendRequest) =>
      axiosInstance.post("/web/auth/otp-send", data).then((res) => res.data),
  });

// OTP Send (Internal)
export const useOtpSendInternal = (): UseMutationResult<
  OtpSendResponse,
  AxiosError,
  OtpSendRequest
> =>
  useMutation<OtpSendResponse, AxiosError, OtpSendRequest>({
    mutationFn: (data: OtpSendRequest) =>
      axiosInstance
        .post("/internal/auth/otp-send", data)
        .then((res) => res.data),
  });

// OTP Verify (Web)
export const useOtpVerifyWeb = (): UseMutationResult<
  OtpVerifyResponse,
  AxiosError,
  OtpVerifyRequest
> =>
  useMutation<OtpVerifyResponse, AxiosError, OtpVerifyRequest>({
    mutationFn: (data: OtpVerifyRequest) =>
      axiosInstance.post("/web/auth/otp-verify", data).then((res) => res.data),
  });

// OTP Verify (Internal)
export const useOtpVerifyInternal = (): UseMutationResult<
  OtpVerifyResponse,
  AxiosError,
  OtpVerifyRequest
> =>
  useMutation<OtpVerifyResponse, AxiosError, OtpVerifyRequest>({
    mutationFn: (data: OtpVerifyRequest) =>
      axiosInstance
        .post("/internal/auth/otp-verify", data)
        .then((res) => res.data),
  });

// Refresh Token
export const useRefreshToken = (): UseMutationResult<
  RefreshTokenResponse,
  AxiosError,
  RefreshTokenRequest
> =>
  useMutation<RefreshTokenResponse, AxiosError, RefreshTokenRequest>({
    mutationFn: (data: RefreshTokenRequest) =>
      axiosInstance
        .post("/internal/auth/refresh-token", data)
        .then((res) => res.data),
  });

// Reset Password Request (Web)
export const useResetPasswordRequestWeb = (): UseMutationResult<
  GenericSuccessResponse,
  AxiosError,
  ResetPasswordRequestRequest
> =>
  useMutation<GenericSuccessResponse, AxiosError, ResetPasswordRequestRequest>({
    mutationFn: (data: ResetPasswordRequestRequest) =>
      axiosInstance
        .post("/web/auth/reset-password-request", data)
        .then((res) => res.data),
  });

// Reset Password Request (Internal)
export const useResetPasswordRequestInternal = (): UseMutationResult<
  GenericSuccessResponse,
  AxiosError,
  ResetPasswordRequestRequest
> =>
  useMutation<GenericSuccessResponse, AxiosError, ResetPasswordRequestRequest>({
    mutationFn: (data: ResetPasswordRequestRequest) =>
      axiosInstance
        .post("/internal/auth/reset-password-request", data)
        .then((res) => res.data),
  });

// Reset Password Verify (Web)
export const useResetPasswordVerifyWeb = (): UseMutationResult<
  ResetPasswordVerifyResponse,
  AxiosError,
  ResetPasswordVerifyRequest
> =>
  useMutation<
    ResetPasswordVerifyResponse,
    AxiosError,
    ResetPasswordVerifyRequest
  >({
    mutationFn: (data: ResetPasswordVerifyRequest) =>
      axiosInstance
        .post("/web/auth/reset-password-verify", data)
        .then((res) => res.data),
  });

// Reset Password Verify (Internal)
export const useResetPasswordVerifyInternal = (): UseMutationResult<
  ResetPasswordVerifyResponse,
  AxiosError,
  ResetPasswordVerifyRequest
> =>
  useMutation<
    ResetPasswordVerifyResponse,
    AxiosError,
    ResetPasswordVerifyRequest
  >({
    mutationFn: (data: ResetPasswordVerifyRequest) =>
      axiosInstance
        .post("/internal/auth/reset-password-verify", data)
        .then((res) => res.data),
  });
