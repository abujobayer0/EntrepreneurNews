"use client";

import React from "react";

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
}) => {
  const isMultiline = type === "textarea";

  return (
    <div className="mb-3">
      <label className="block mb-1.5 text-sm font-medium text-gray-800">
        {required && <span className="text-red-500 mr-0.5">*</span>}
        {label}
      </label>
      {isMultiline ? (
        <textarea
          className={`w-full border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 bg-white ${
            error ? "border-red-500" : ""
          } ${numberOfLines > 1 ? `h-${numberOfLines * 6}` : "h-10"}`}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          placeholder={placeholder}
          rows={numberOfLines}
          style={{ resize: "none", textAlign: "start" }}
        />
      ) : (
        <input
          type={type === "password" ? "password" : type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          className={`w-full h-10 border border-gray-300 rounded-md px-3 text-sm text-gray-600 bg-white ${
            error ? "border-red-500" : ""
          }`}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          placeholder={placeholder}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
