"use client";

import React, { useCallback } from "react";
import { SearchIcon } from "@/components/ui/icons/Icons";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onSearch?: () => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  value,
  onChangeText,
  onSearch,
  className = "",
}) => {
  const handleSubmit = useCallback(() => {
    if (onSearch) {
      onSearch();
    }
  }, [onSearch]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div
      className={`flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
      />
      <button
        onClick={handleSubmit}
        className={`p-2 hover:bg-gray-100 transition-colors`}
        aria-label="Search"
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
