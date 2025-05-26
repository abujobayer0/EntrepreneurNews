"use client";

import React from "react";

interface SubmitButtonProps {
  onPress: () => void;
  isLoading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress, isLoading }) => {
  return (
    <button
      type="button"
      className="bg-indigo-900 px-0 py-5 rounded-[16px] flex items-center justify-center mt-4 disabled:opacity-50 disabled:cursor-not-allowed w-full"
      onClick={onPress}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="w-6 h-6 border-2 border-t-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <span className="text-white text-lg font-bold">জমা দিন</span>
      )}
    </button>
  );
};

export default SubmitButton;
