import { theme } from "@/constants/theme";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeaderProps {
  title: string;
  onPrevious?: () => void;
  onNext?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onPrevious, onNext }) => {
  return (
    <div
      className="w-full px-4 py-2 rounded-e-lg rounded-t-lg flex flex-row justify-between items-center"
      style={{ backgroundColor: theme.colors.primary }}
    >
      <h2 className="text-[24px] text-white font-bold">
        {title || "ট্রেডিং চিহ্নস"}
      </h2>

      <div className="flex flex-row">
        <button
          onClick={onPrevious}
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2 focus:outline-none"
        >
          <ChevronLeft size={20} className="text-primary" />
        </button>

        <button
          onClick={onNext}
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center focus:outline-none"
        >
          <ChevronRight size={20} className="text-primary" />
        </button>
      </div>
    </div>
  );
};

export default Header;
