"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";

// Sample marquee items
const marqueeItems = [
  {
    id: 1,
    text: "বিশেষ মহড়ার আওতায় ৩০ দিনে অন্তর্ভুক্ত, রাজধানী জেলা কার্যক্রম",
  },
  {
    id: 2,
    text: "ব্যবহারকারীর নাম প্রকাশ করবেন না, মুজিববর্ষ নাম-ইতিহাস ভেবে জানি, দাবি উদ্যোক্তা",
  },
  { id: 3, text: "বিশেষ মহড়ার আওতায় ৩০ দিনে..." },
  { id: 4, text: "জেলা পর্যায়ে আরও তথ্য সংগ্রহ কার্যক্রম চলছে" },
  { id: 5, text: "ডিজিটাল সেবার বিস্তারে নতুন পদক্ষেপ" },
];

const TitleBarMarquee = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [t] = useTranslation();

  return (
    <div className="hidden md:flex bg-transparent">
      <ScreenContainer>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="px-2"
        >
          <div className="flex items-center w-full">
            <span className="text-white font-semibold text-sm py-4 whitespace-nowrap">
              {t("home.marquee.title")}
            </span>
            <div className="h-6 w-px bg-white mx-4" />
            <div className="flex-1 overflow-hidden">
              <motion.div
                className="flex gap-10 items-center"
                animate={{
                  x: isHovered ? 0 : [-1000, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {marqueeItems.map((item) => (
                  <span
                    key={item.id}
                    className="text-white text-sm font-medium whitespace-nowrap mx-5"
                  >
                    {item.text}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default TitleBarMarquee;
