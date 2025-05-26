"use client";

import React, { useEffect, useRef } from "react";
import { CloseIcon } from "@/components/ui/icons/Icons";
import { cn } from "@/utils/cn";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: number;
  position?: "right" | "left";
  showCloseButton?: boolean;
  actions?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width = 450,
  position = "right",
  showCloseButton = true,
  actions,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999999999]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/45 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          "fixed top-0 bottom-0 bg-white shadow-lg flex flex-col transition-transform duration-300 ease-in-out",
          position === "right" ? "right-0" : "left-0"
        )}
        style={{ width }}
      >
        {/* Header */}
        <div className="flex items-center gap-2.5 px-6 py-4 border-b border-gray-100">
          {showCloseButton && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close drawer"
            >
              <CloseIcon />
            </button>
          )}
          <h2 className="text-base font-semibold text-black">{title}</h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 flex flex-col">
            {children}
            {actions && <div className="mt-5 w-full">{actions}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
