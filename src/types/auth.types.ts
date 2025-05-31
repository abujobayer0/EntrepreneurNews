/* eslint-disable @typescript-eslint/no-explicit-any */
// Auth API Types

export interface GenericSuccessResponse {
  message?: string;
  success?: boolean;
  data?: any;
}
export interface LoginRequest {
  identifier: string;
  password: string;
  remember: boolean;
  rememberDays: number;
}

export interface LoginResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    permissionToken: string;
    user: {
      id: string;
      email: string;
      fullName: string;
      phoneNumber: string | null;
      roles: string[];
    };
  };
}

export interface RegisterRequest {
  identifier: string;
  fullName: string;
  password: string;
}

export interface RegisterResponse {
  // Define fields as per API response
  user: unknown; // Replace with actual user type if available
  message?: string;
}

export interface ChangePasswordRequest {
  newPassword: string;
  oldPassword: string;
}

export interface OtpSendRequest {
  identifier: string;
  verificationType: string; // e.g., 'SIGN_UP', etc.
}

export interface OtpSendResponse {
  hash: string;
  message?: string;
}

export interface OtpVerifyRequest {
  identifier: string;
  hash: string;
  otp: number;
}

export interface OtpVerifyResponse {
  message?: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ResetPasswordRequestRequest {
  identifier: string;
}

export interface ResetPasswordVerifyRequest {
  identifier: string;
  hash: string;
  otp: number;
  newPassword: string;
}

export interface ResetPasswordVerifyResponse {
  message?: string;
}
