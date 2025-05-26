import { theme } from "@/constants/theme";
import React from "react";
import Image from "next/image";
import sportsImage from "@/assets/images/sports-article.png";

const newsList = [
  "আড়াই বছর পর কোথায় থাকবে বাংলাদেশের ক্রিকেট, সিমন্স কী বলেন?",
  "টানা ২৪ ম্যাচে হারেনি বার্সেলোনা, রেকর্ড কত ম্যাচের",
  "ফুটবলারদের বিশ্রামেও থেমে নেই রাজনীতি, খেলা বন্ধ হচ্ছে না",
  "হুইলচেয়ার ক্রিকেটের বিশ্বকাপে খেলবে বাংলাদেশ",
];

const SportsNewsSection: React.FC = () => {
  return (
    <div className={`bg-[${theme.colors.primary}] w-full md:h-[668px]`}>
      <div className="max-w-7xl mx-auto px-3 w-full py-5 md:py-[51px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
          <div className="flex-1 space-y-6">
            <h2 className="font-hind-siliguri text-white text-2xl md:text-[36px] font-bold leading-[48px]">
              খেলার মাঠে
            </h2>

            {newsList.map((title, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-hind-siliguri text-white text-[20px] md:text-lg font-semibold leading-[24px]">
                  {title}
                </h3>
                <p className="font-hind-siliguri text-[#F7F7F7] text-[14px] opacity-70 leading-[24px]">
                  গত বছরের অক্টোবরে দায়িত্ব নিয়ে চ্যাম্পিয়নস ট্রফি পর্যন্ত
                  বাংলাদেশ দলের অন্তর্বর্তী কোচ ছিলেন ফিল সিমন্স। এরপর বিসিবি
                  আবার নতুন কর...
                </p>
                <div className="border-t border-white/20 mt-2" />
              </div>
            ))}
          </div>

          <div className="flex-1 w-full hidden md:block">
            <div className="relative">
              <div className="relative w-full h-[346px] rounded-2xl overflow-hidden">
                <Image
                  src={sportsImage}
                  alt="Sports news"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-12 right-12 bottom-[-70px] bg-white p-5 rounded-2xl shadow-md">
                <h3 className="font-hind-siliguri text-black text-base md:text-lg font-bold leading-[24px]">
                  আবারও বড় রানে জোহানের ব্যাটে বাংলাদেশের বিপক্ষে, চিন্তার ভাঁজ
                  অনেকে
                </h3>
                <p className="font-hind-siliguri text-[#6B6C76] text-sm leading-6 mt-2">
                  এক নজরে জানুন গুরুত্বপূর্ণ ম্যাচের সারসংক্ষেপ, খেলার ময়দানে
                  কে কী করলেন এবং আগামী চ্যালেঞ্জ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsNewsSection;
