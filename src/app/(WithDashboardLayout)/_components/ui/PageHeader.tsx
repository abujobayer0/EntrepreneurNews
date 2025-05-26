"use client";

import React from "react";
import { theme } from "@/constants/theme";
import { ArrowLeftIcon } from "@/components/ui/icons/Icons";
import { useRouter } from "next/navigation";

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, onBack }) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <div className="flex flex-row items-center mb-6 gap-4">
      <button
        onClick={handleBack}
        className="size-7 flex items-center justify-center rounded-md bg-black"
        aria-label="Go back"
      >
        <ArrowLeftIcon color={theme.colors.white} />
      </button>
      <p
        className="text-xl font-semibold"
        style={{ color: theme.colors.black }}
      >
        {title}
      </p>
    </div>
  );
};
