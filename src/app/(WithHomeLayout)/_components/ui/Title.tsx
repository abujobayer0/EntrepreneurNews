import { theme } from "@/constants/theme";
import React from "react";

interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <div
      className={`w-full px-4 py-2 rounded-e-lg rounded-t-lg ${className}`}
      style={{ backgroundColor: theme.colors.primary }}
    >
      <h2 className="text-[24px] text-white font-bold">{title || "Title"}</h2>
    </div>
  );
};

export default Title;
