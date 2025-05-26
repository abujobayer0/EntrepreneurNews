import React from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  hideTitleOnSmallScreen?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  hideTitleOnSmallScreen = false,
  ...rest
}) => {
  const spacing = size === "sm" ? "mr-1.5" : size === "lg" ? "mr-3" : "mr-2";

  const baseStyles = cn(
    "rounded-md flex items-center justify-center transition-all duration-200 ease-in-out cursor-pointer",
    size === "sm" && "px-4 py-2 text-xs",
    size === "md" && "px-4 py-2.5 text-sm",
    size === "lg" && "px-6 py-3 text-base",
    variant === "primary" && "bg-[#1a237e] text-white",
    variant === "outline" && "border border-[#1a237e] text-[#1a237e]",
    (disabled || loading) && "opacity-50 cursor-not-allowed",
    className
  );

  const titleClass = cn(hideTitleOnSmallScreen && "hidden md:inline");

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={baseStyles}
      {...rest}
    >
      {loading ? (
        <span className="loader border-t-transparent border-white/70 border-2 w-4 h-4 rounded-full animate-spin" />
      ) : (
        <div className="flex items-center">
          {icon && iconPosition === "left" && (
            <span className={`${spacing}`}>{icon}</span>
          )}
          <span className={titleClass}>{title}</span>
          {icon && iconPosition === "right" && (
            <span className={`ml-2`}>{icon}</span>
          )}
        </div>
      )}
    </button>
  );
};
