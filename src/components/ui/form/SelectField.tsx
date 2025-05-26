"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface PickerItem {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  items: PickerItem[];
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onValueChange,
  items,
  placeholder = "Select",
  required = false,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const selectedItem = items.find((item) => item.value === value);
  const displayText = selectedItem ? selectedItem.label : placeholder;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      !isOpen &&
      (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")
    ) {
      e.preventDefault();
      setIsOpen(true);
      setFocusedIndex(0);
      return;
    }
    if (isOpen) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && focusedIndex >= 0) {
        e.preventDefault();
        onValueChange(items[focusedIndex].value);
        setIsOpen(false);
        setFocusedIndex(-1);
      } else if (e.key === "Escape") {
        setIsOpen(false);
        setFocusedIndex(-1);
        buttonRef.current?.focus();
      }
    }
  };

  // Scroll focused item into view
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listRef.current) {
      const focusedElement = listRef.current.children[
        focusedIndex
      ] as HTMLElement;
      focusedElement?.scrollIntoView({ block: "nearest" });
    }
  }, [focusedIndex, isOpen]);

  const handleSelect = (item: PickerItem) => {
    onValueChange(item.value);
    setIsOpen(false);
    setFocusedIndex(-1);
    buttonRef.current?.focus();
  };

  return (
    <div className="mb-4" ref={containerRef}>
      {/* Label */}
      <label
        className="block mb-1.5 text-sm font-medium text-gray-800"
        htmlFor={`select-${label}`}
      >
        {required && <span className="text-red-500 mr-0.5">*</span>}
        {label}
      </label>

      {/* Select Button */}
      <div className="relative">
        <button
          id={`select-${label}`}
          type="button"
          ref={buttonRef}
          className={`flex items-center w-full border rounded-md bg-white px-3 py-2.5 h-10 text-sm transition-all duration-200 ${
            error
              ? "border-red-500 focus:ring-red-500/30"
              : "border-gray-300 focus:ring-indigo-500/30"
          } focus:outline-none focus:ring-2 focus:border-indigo-500 hover:border-gray-400`}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={`dropdown-${label}`}
          aria-activedescendant={
            focusedIndex >= 0
              ? `option-${items[focusedIndex].value}`
              : undefined
          }
          aria-label={label}
        >
          <span
            className={`flex-1 text-left truncate ${
              selectedItem ? "text-gray-800" : "text-gray-500"
            }`}
          >
            {displayText}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div
            id={`dropdown-${label}`}
            className="absolute z-10 w-full mt-1 bg-gray-100 border border-gray-200 rounded-md max-h-60 overflow-y-auto"
            role="listbox"
          >
            {items.map((item, index) => (
              <button
                key={item.value}
                id={`option-${item.value}`}
                className={`w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-indigo-50 focus:bg-indigo-50 transition-colors ${
                  index === focusedIndex ? "bg-indigo-50" : ""
                }`}
                onClick={() => handleSelect(item)}
                role="option"
                aria-selected={value === item.value}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
    </div>
  );
};

export default SelectField;
