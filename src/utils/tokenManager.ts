import Cookies from "js-cookie";

interface TokenData {
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
}

export const setTokens = (tokenData: TokenData) => {
  // Set tokens in cookies with appropriate configurations
  Cookies.set("accessToken", tokenData.accessToken, {
    expires: 1, // 1 day
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  Cookies.set("refreshToken", tokenData.refreshToken, {
    expires: 30, // 30 days
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  Cookies.set("permissionToken", tokenData.permissionToken, {
    expires: 30, // 30 days
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  // Store user info in localStorage for client-side access
  localStorage.setItem("user", JSON.stringify(tokenData.user));
};

export const getTokens = () => {
  return {
    accessToken: Cookies.get("accessToken"),
    refreshToken: Cookies.get("refreshToken"),
    permissionToken: Cookies.get("permissionToken"),
  };
};

export const removeTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  Cookies.remove("permissionToken");
  localStorage.removeItem("user");
};

export const getUserInfo = () => {
  const userString = localStorage.getItem("user");
  return userString ? JSON.parse(userString) : null;
};
