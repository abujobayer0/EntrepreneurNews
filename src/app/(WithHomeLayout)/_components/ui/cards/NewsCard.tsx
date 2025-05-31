import React from "react";
import Image from "next/image";

interface NewsCardProps {
  imageUrl: string;
  baseText: string;
  date: string;
  title: string;
  onPress?: () => void;
  varient: "primary" | "secondary";
}

export const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  baseText,
  date,
  title,
  onPress,
  varient = "primary",
}) => {
  return (
    <div
      onClick={onPress}
      className={`flex flex-row mb-3 bg-white p-2 rounded-none hover:bg-gray-50 focus:outline-none cursor-pointer ${
        varient === "secondary"
          ? "md:flex-row flex-col w-full max-w-[200px] md:max-w-full"
          : "border-b border-[#F6F6F6]"
      }`}
    >
      <div
        className={` h-[80px] mr-3 ${
          varient === "secondary" ? "w-full md:w-[114px]" : "w-[114px]"
        }`}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-row justify-between items-center mb-1">
          <span
            className={`text-xs text-text font-medium ${
              varient === "secondary" ? "hidden md:flex" : ""
            }`}
          >
            {baseText}
          </span>
          <span
            className={`text-[10px] text-text ${
              varient === "secondary" ? "hidden md:flex" : ""
            }`}
          >
            {date}
          </span>
        </div>
        <h3
          className={`text-sm font-medium text-black leading-5 ${
            varient === "secondary" ? "text-sm w-[149px]" : ""
          } line-clamp-2`}
        >
          {title}
        </h3>
        {varient === "secondary" && (
          <span className="text-[10px] text-text mt-4 md:hidden">{date}</span>
        )}
      </div>
    </div>
  );
};
