'use client';

import React from 'react';
import { TTrendingReport } from '@/types';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const TrendingReportCard = ({
  name,
  title,
  designation,
  date,
  imageUrl,
}: TTrendingReport) => {
  const [t] = useTranslation();
  return (
    <div className="w-full group cursor-pointer">
      <div className="absolute -mt-8 ml-4 w-16 h-16 hidden md:block rounded-full ring-2 ring-white/80 z-10 shadow-lg">
        <Image
          src={imageUrl}
          alt={name}
          width={1000}
          height={1000}
          className="rounded-full object-cover size-16"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="relative pt-8 bg-gradient-to-br from-[#2C2D99] via-[#3B3CA8] to-[#4A4BB7] p-4 rounded-xl md:rounded-none md:rounded-t-2xl md:h-[144px] shadow-[0.65rem_0.65rem_0_rgba(44,45,153,0.8)] border-2 border-[#2C2D99] md:border-none transition-all duration-300 hover:shadow-[0.5rem_0.5rem_0_rgba(44,45,153,0.9)] md:shadow-none md:hover:shadow-none hover:scale-[1.02] md:hover:scale-100 overflow-hidden">
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/3 rounded-full translate-y-8 -translate-x-8"></div>

        <div className="relative z-10">
          <div className="flex flex-row items-start md:items-center justify-between mb-3 md:mt-3.5">
            <div>
              <p className="text-white/90 text-sm font-medium tracking-wide">
                {name}
              </p>
              <p className="text-white/70 text-xs font-light">{designation}</p>
            </div>
            <p className="text-white/70 text-xs text-right md:-mt-[70px] font-light">
              {date}
            </p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p className="text-white text-sm line-clamp-2 font-light md:font-thin leading-[22px] mb-2 tracking-wide">
              {title}
            </p>
            <span className="text-[#2C2D99] px-3 py-2 rounded-lg text-[10px] whitespace-nowrap flex md:hidden md:text-white h-fit bg-white/95 md:bg-[#313B97] text-sm font-medium shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md">
              {t('home.heroSection.readMore')}
            </span>
          </div>
        </div>
      </div>
      <div className="text-[#313B97] md:text-white/90 text-xs hidden md:flex bg-white md:bg-gradient-to-r md:from-[#313B97] md:to-[#2C2D99] py-3 pl-4 rounded-b-2xl font-medium tracking-wide shadow-sm md:shadow-none transition-all duration-200 hover:bg-gray-50 md:hover:from-[#2C2D99] md:hover:to-[#313B97]">
        {t('home.heroSection.readMore')}
      </div>
    </div>
  );
};

export default TrendingReportCard;
