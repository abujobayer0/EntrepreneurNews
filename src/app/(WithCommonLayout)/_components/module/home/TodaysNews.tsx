import Title from "@/app/(WithCommonLayout)/_components/ui/Title";
import { NewsCard } from "@/app/(WithCommonLayout)/_components/ui/cards/NewsCard";
import { MainNewsCard } from "@/app/(WithCommonLayout)/_components/ui/cards/MainNewsCard";
import { BreakingNewsCard } from "@/app/(WithCommonLayout)/_components/ui/cards/BreakingNewsCard";
import React from "react";
import SeeMoreButton from "../../ui/button/SeeMore";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";

export const newsItems = [
  {
    id: 1,
    imageUrl: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    baseText: "নিজস্ব প্রতিনিধি",
    date: "২ ঘন্টা আগে",
    title:
      "বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন বিবিআসের জরিপ দেশের বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন ৭২% পরিবারের প্রথম স্মার্টফোন",
  },
  {
    id: 2,
    imageUrl: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    baseText: "নিজস্ব প্রতিনিধি",
    date: "২ ঘন্টা আগে",
    title:
      "বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন বিবিআসের জরিপ দেশের বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন ৭২% পরিবারের প্রথম স্মার্টফোন",
  },
  {
    id: 3,
    imageUrl: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    baseText: "নিজস্ব প্রতিনিধি",
    date: "২ ঘন্টা আগে",
    title:
      "বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন বিবিআসের জরিপ দেশের বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন ৭২% পরিবারের প্রথম স্মার্টফোন",
  },
  {
    id: 4,
    imageUrl: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    baseText: "নিজস্ব প্রতিনিধি",
    date: "২ ঘন্টা আগে",
    title:
      "বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন বিবিআসের জরিপ দেশের বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন ৭২% পরিবারের প্রথম স্মার্টফোন",
  },
];

export default function TodaysNews() {
  return (
    <ScreenContainer className="flex flex-col lg:flex-row gap-4 px-3">
      <div className="flex flex-col lg:flex-row gap-4 lg:bg-white flex-[2.5] rounded-lg lg:h-[520px] overflow-y-hidden">
        <div className="flex-[0.85] lg:flex-1 lg:h-[347px] rounded-lg">
          <Title title="আজকের খবর" />
          <div className="pt-[10px] lg:pl-[10px] lg:pb-[10px]">
            <MainNewsCard
              imageUrl="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
              title="বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন"
              description="বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন বিবিআসের জরিপ দেশের বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন ৭২% পরিবারের প্রথম স্মার্টফোন"
            />
          </div>
        </div>
        <div className="flex-1 h-[446px] mr-0 lg:mr-2 ">
          <div className="flex w-full bg-transparent justify-end mb-5 px-1 mt-4 lg:mt-1">
            <SeeMoreButton />
          </div>
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col gap-4 pb-5 pr-2">
              {newsItems.map((item) => (
                <NewsCard
                  key={item.id}
                  imageUrl={item.imageUrl}
                  baseText={item.baseText}
                  date={item.date}
                  title={item.title}
                  varient="primary"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex order-3 flex-1 flex-col rounded-lg">
          <div className="px-4">
            <Title title="ব্রেকিং নিউজ" />
          </div>
          <div className="px-2.5 pt-1">
            <BreakingNewsCard
              imageUrl="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
              label="নিজস্ব প্রতিনিধি"
              reporter="মামুনুর রশিহীদ"
              source="৫ ঘন্টা আগে"
              title="ট্রফি বিজয়ী উঠল আর্জেন্টিনা প্রথম কোন ফুটবল থেকে না বেরিয়ে"
              description="চিলে ভাগ্যে পড়ার চেষ্টা ও উঠার ২ উইকেট হারিয়ে ও রান তুলেছে, কলকাতা সঠিক প্রথম ও উঠার ৩ উইকেট হারিয়ে তুলেছে..."
            />
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}
