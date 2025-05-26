"use client";

import React, { useState, useRef, useEffect } from "react";
import { theme } from "@/constants/theme";
import ZIndexWrapper from "@/components/ui/wrapper/ZIndexWrapper";
import { DotsVerticalIcon } from "@/components/ui/icons/Icons";

export interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <ZIndexWrapper zIndex={1000000000}>
      <div ref={dropdownRef} className={`relative ${className}`}>
        <button
          onClick={toggleDropdown}
          className="p-2 rounded-md"
          aria-label="Toggle dropdown"
        >
          <DotsVerticalIcon />
        </button>

        {isOpen && (
          <div
            className="absolute bg-white rounded-md border border-gray-200 w-32 shadow-md"
            style={{ top: -15, right: 20 }}
          >
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-50"
              >
                {item.icon && <div className="mr-2">{item.icon}</div>}
                <span className="text-sm" style={{ color: theme.colors.text }}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </ZIndexWrapper>
  );
};

export default DropdownMenu;
