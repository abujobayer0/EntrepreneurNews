"use client";

import React from "react";

interface ToggleProps {
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-3 my-4">
      {label && <span className="text-sm font-medium text-black">{label}</span>}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#2B3589]"></div>
      </label>
    </div>
  );
};
