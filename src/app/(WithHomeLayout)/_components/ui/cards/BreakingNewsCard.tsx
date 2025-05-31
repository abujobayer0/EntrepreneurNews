"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BreakingNewsCardProps {
  imageUrl: string;
  label: string;
  source: string;
  title: string;
  reporter: string;
  description: string;
  column?: boolean;
}

export const BreakingNewsCard: React.FC<BreakingNewsCardProps> = ({
  imageUrl,
  label,
  source,
  title,
  reporter,
  description,
  column = false,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/news/${1}`)}
      className={`bg-white rounded-lg overflow-hidden cursor-pointer p-2 ${
        column ? "flex flex-row gap-3 md:gap-5" : "flex flex-col gap-3"
      }`}
    >
      <div
        className={`relative ${
          column
            ? "h-[84px] md:h-[176px] w-[124px] md:w-[240px]"
            : "w-full h-[176px]"
        }`}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className={`${column ? "flex-1 md:space-y-2" : "w-full space-y-3"}`}>
        <div className="flex flex-row justify-between items-center mb-1">
          <span className="text-xs leading-4 text-primary font-thin">
            {label}
          </span>
          <span className="text-[10px] leading-4 text-text">{source}</span>
        </div>
        <p className="text-sm text-text leading-5 mb-2 hidden md:block font-thin">
          {reporter}
        </p>
        <h3
          className={`font-medium leading-6 mb-1 ${
            column ? "text-sm md:text-base" : "text-sm md:text-lg"
          }`}
        >
          {title}
        </h3>
        <p
          className={`line-clamp-1 md:line-clamp-3 text-text leading-5 ${
            column ? "text-xs md:text-sm" : "text-xs md:text-sm"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
