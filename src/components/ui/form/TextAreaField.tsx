"use client";

import React from "react";

interface TextAreaFieldProps
  extends Pick<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "inputMode" | "autoComplete"
  > {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  numberOfLines?: number;
  height?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  required = false,
  error,
  inputMode = "text",
  autoComplete = "off",
  numberOfLines = 4,
  height,
}) => {
  const calculatedHeight = height ?? numberOfLines * 25;

  return (
    <div className="mb-3">
      <label className="block mb-1.5 text-sm font-medium text-gray-800">
        {required && <span className="text-red-500 mr-0.5">*</span>}
        {label}
      </label>
      <textarea
        className={`w-full border rounded-md px-3 py-2 text-sm text-gray-600 bg-white ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-1 focus:ring-gray-300`}
        style={{ height: `${calculatedHeight}px`, resize: "none" }}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        rows={numberOfLines}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default TextAreaField;
