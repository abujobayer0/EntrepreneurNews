"use client";

import React from "react";
import { TTrendingReport } from "@/types";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const TrendingReportCard = ({
  name,
  title,
  designation,
  date,
  imageUrl,
}: TTrendingReport) => {
  const [t] = useTranslation();
  return (
    <div className="w-full">
      <div className="bg-[#2C2D99] p-4 rounded-lg md:rounded-none md:rounded-t-2xl md:h-[144px]">
        <div className="relative w-16 h-16 hidden md:block rounded-full ring-2 ring-white -mt-12 z-10">
          <Image
            src={imageUrl}
            alt={name}
            width={1000}
            height={1000}
            className="rounded-full object-cover size-16"
          />
        </div>
        <div className="flex flex-row items-start md:items-center justify-between mb-3 md:mt-3.5">
          <div>
            <p className="text-[#CFCFCF] text-sm font-thin">{name}</p>
            <p className="text-[#CFCFCF] text-xs">{designation}</p>
          </div>
          <p className="text-[#CFCFCF] text-xs text-right md:-mt-[70px]">
            {date}
          </p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <p className="text-white text-sm line-clamp-2 font-light md:font-thin leading-[22px] mb-2">
            {title}
          </p>
          <span className="text-[#313B97] px-2 py-2 rounded-md text-[10px] whitespace-nowrap flex md:hidden md:text-white h-fit bg-white md:bg-[#313B97] text-sm">
            {t("home.heroSection.readMore")}
          </span>
        </div>
      </div>
      <p className="text-[#313B97] md:text-[#CFCFCF] text-xs hidden md:flex bg-white md:bg-[#313B97] py-2 pl-4 rounded-b-2xl">
        {t("home.heroSection.readMore")}
      </p>
    </div>
  );
};

export default TrendingReportCard;
