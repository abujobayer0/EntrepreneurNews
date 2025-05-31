"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button/Button";
import { theme } from "@/constants/theme";
import LnTranslateButton from "../../../../../components/ui/button/LnTranslateButton";
import { useTranslation } from "react-i18next";
import { getFormattedDate } from "@/utils/getFormattedDate";
import MobileDrawer from "./MobileDrawer";
import BrandLogo from "@/components/ui/BrandLogo";
import { Menu, Search } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LogoutIcon,
  SignInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/icons/Icons";
import { getTokens, removeTokens } from "@/utils/tokenManager";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const currentDate = getFormattedDate(i18n.language);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const { accessToken, refreshToken, permissionToken } = getTokens();
      setIsAuthenticated(!!(accessToken && refreshToken && permissionToken));
    };

    checkAuthStatus();
    const interval = setInterval(checkAuthStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMenuPress = () => {
    setIsDrawerOpen(true);
  };
  const handleLogout = () => {
    removeTokens();
    setIsAuthenticated(false);
  };
  return (
    <>
      <nav className="flex w-full mx-auto max-w-7xl flex-row items-center justify-between py-4 px-4">
        {/* Entrepreneur Logo */}
        <div className="flex flex-row gap-3 items-center">
          <button
            className="h-10 w-10 items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            onClick={handleMenuPress}
          >
            <Menu className="w-5 h-5 md:hidden" />
          </button>

          <BrandLogo />
        </div>

        {/* Logo and Navigation */}
        <div className="flex flex-col justify-end items-end gap-4">
          {/* Header with date and social icons */}
          <div className="py-2 px-4 flex-col gap-2 justify-end items-end hidden md:flex">
            <p className="text-xs font-thin text-gray-600">{currentDate}</p>
            <div className="flex flex-row space-x-2">
              <FacebookIcon />
              <YoutubeIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>

          {/* Search and Language Selection */}
          <div className="flex flex-row items-center gap-2 md:gap-4">
            <div className="md:flex flex-row items-center bg-white ring-1 ring-gray-200/60 rounded-lg overflow-hidden hidden">
              <input
                style={{ color: theme.colors.text }}
                className="h-10 w-32 md:w-80 px-4 py-2.5 bg-white text-sm text-start focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200"
                placeholder={t("home.navbar.searchPlaceholder")}
              />
              <button
                style={{ backgroundColor: theme.colors.primary }}
                className="h-10 w-12 flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
              >
                <Search className="w-5 h-5 text-white " />
              </button>
            </div>

            <LnTranslateButton />

            {isAuthenticated ? (
              <Button
                className="text-xs md:text-sm text-white px-1.5 pr-2.5 md:px-4"
                title={"Logout"}
                variant="primary"
                onClick={handleLogout}
                icon={<LogoutIcon />}
                iconPosition="right"
                hideTitleOnSmallScreen={true}
              />
            ) : (
              <Link href="/auth/login">
                <Button
                  className="text-xs md:text-sm text-white px-1.5 pr-2.5 md:px-4"
                  title={t("home.navbar.login")}
                  variant="primary"
                  icon={<SignInIcon />}
                  iconPosition="right"
                  hideTitleOnSmallScreen={true}
                />
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
