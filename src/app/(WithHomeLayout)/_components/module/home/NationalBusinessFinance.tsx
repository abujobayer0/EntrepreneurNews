import React from "react";
import Title from "@/app/(WithHomeLayout)/_components/ui/Title";
import { BreakingNewsCard } from "@/app/(WithHomeLayout)/_components/ui/cards/BreakingNewsCard";

const NationalBuisnessFinance = () => {
  return (
    <div className="max-w-7xl px-3 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {[0, 1, 2].map((_, i) => (
          <div key={i} className="space-y-4 pb-3 rounded-md bg-white">
            <Title title="জাতীয়/ব্যবসা/অর্থ" />
            <div className="flex flex-col px-1 md:px-0">
              <BreakingNewsCard
                imageUrl="https://c.ndtvimg.com/2024-09/puk4rj1o_india-bangladesh-afp_625x300_19_September_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"
                label="জাতীয়"
                source="নিজস্ব প্রতিনিধি"
                title="বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন"
                reporter="রিপোর্টার"
                description="বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন বিবিআসের জরিপ দেশের বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন"
              />
              <BreakingNewsCard
                imageUrl="https://c.ndtvimg.com/2024-09/puk4rj1o_india-bangladesh-afp_625x300_19_September_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"
                label="ব্যবসা"
                source="নিজস্ব প্রতিনিধি"
                title="বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন"
                reporter="রিপোর্টার"
                description="বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন বিবিআসের জরিপ দেশের বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন"
              />
            </div>
            <button className="py-2 md:py-4 border md:mx-3 mt-4 rounded-lg items-center md:mt-0 w-full border-primary">
              <span className="text-primary text-base leading-6">
                আরো দেখুন
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NationalBuisnessFinance;
