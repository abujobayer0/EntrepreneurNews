"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Make sure you have lucide-react installed

interface InputFieldProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "inputMode" | "autoComplete"
  > {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  numberOfLines?: number;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  required = false,
  error,
  type = "text",
  inputMode = "text",
  autoComplete = "off",
  numberOfLines = 1,
  className = "py-2",
}) => {
  const isMultiline = type === "textarea";
  const isPassword = type === "password";

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3">
      {label && (
        <label className="block mb-1.5 text-sm font-medium text-gray-800">
          {required && <span className="text-red-500 mr-0.5">*</span>}
          {label}
        </label>
      )}
      {isMultiline ? (
        <textarea
          className={`w-full border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 bg-white ${
            error ? "border-red-500" : ""
          } ${numberOfLines > 1 ? `h-${numberOfLines * 6}` : "py-3"}`}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          placeholder={placeholder}
          rows={numberOfLines}
          style={{ resize: "none", textAlign: "start" }}
        />
      ) : (
        <div className="relative">
          <input
            type={isPassword && showPassword ? "text" : type}
            inputMode={inputMode}
            autoComplete={autoComplete}
            className={`w-full ${className} border border-gray-300 rounded-md px-3 pr-10 text-sm text-gray-600 focus:ring-[1px] bg-white focus:outline-none focus:ring-gray-400 ${
              error ? "border-red-500" : ""
            }`}
            value={value}
            onChange={(e) => onChangeText(e.target.value)}
            placeholder={placeholder}
          />
          {isPassword && (
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
