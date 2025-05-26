import React from "react";
import Title from "@/app/(WithCommonLayout)/_components/ui/Title";
import { theme } from "@/constants/theme";

export default function BengaliPollRight() {
  return (
    <div className="w-full md:w-[34%] md:mt-0 bg-transparent md:bg-white relative">
      <Title className="mb-5" title="মতামত" />

      <div className="md:mt-2 rounded p-2 md:p-4">
        <h2
          style={{
            fontFamily: "HindSiliguri-Medium",
            lineHeight: "1.2",
            color: "#1f2937",
          }}
          className="font-medium text-[24px] md:text-[32px]"
        >
          ট্রাম্প বিলুপ্ত অঙ্গ আরোপের পরও কেন চিন্তা হচ্ছে না বেইজিং
        </h2>
        <p className="text-xs text-gray-600 mt-2 md:mt-3">
          ৫০ ঘণ্টা আগের সর্বশেষ আপডেট তথ্যানুসারে
        </p>
        <div className="flex flex-row gap-3 md:gap-5 mt-4 md:mt-16">
          <button className="bg-[#2B3589] rounded-lg px-5 md:px-6 py-1 h-[40px] md:h-[42px] flex items-center justify-center">
            <span className="text-white text-sm text-center">আরোও পড়ুন</span>
          </button>
          <button
            style={{
              borderColor: theme.colors.primary,
            }}
            className="bg-transparent md:bg-white border rounded-lg px-5 md:px-6 py-1 h-[40px] md:h-[42px] flex items-center justify-center"
          >
            <span
              style={{
                color: theme.colors.primary,
              }}
              className="text-sm text-center"
            >
              আমাদের কন্টাক্ট করুন
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
