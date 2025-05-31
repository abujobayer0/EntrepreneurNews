import React from "react";
import Image from "next/image";
import { theme } from "@/constants/theme";
import heroImage from "@/assets/images/hero.png";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[154px] mx-auto md:h-[400px] lg:h-[540px]">
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={heroImage}
          alt="Hero section background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <ScreenContainer className="relative z-10 h-full px-4 flex flex-col justify-center items-start">
        <div className="flex flex-row flex-wrap pb-1 md:mb-5">
          <button
            style={{ backgroundColor: `${theme.colors.primary}41` }}
            className="px-4 py-2 rounded-lg mr-2.5 mb-2 focus:outline-none"
          >
            <span className="text-white font-medium text-xs md:text-sm">
              সম্পাদকীয়
            </span>
          </button>

          <button
            style={{ backgroundColor: `${theme.colors.primary}41` }}
            className="bg-primary/25 px-4 py-2 rounded-lg mr-2.5 mb-2 focus:outline-none"
          >
            <span className="text-white font-medium text-xs md:text-sm">
              সম্পাদকীয় ডেস্ক
            </span>
          </button>

          <button
            style={{ backgroundColor: `${theme.colors.primary}41` }}
            className="bg-primary/25 px-4 py-2 rounded-lg mr-2.5 mb-2 focus:outline-none"
          >
            <span className="text-white font-medium text-xs md:text-sm">
              ২ ঘন্টা আগে
            </span>
          </button>
        </div>

        <div className="pt-0 px-0 items-start">
          <h1 className="text-white font-bold mb-2.5 text-[20px] leading-8 w-[95%] md:text-3xl md:leading-10 md:w-[85%] lg:text-5xl lg:leading-[66px] lg:w-[55%]">
            বিনিয়োগ উৎসাহিত করতে দেশে সুষ্ঠু গণতান্ত্রিক পরিবেশ সৃষ্টি করুন
          </h1>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default HeroSection;
