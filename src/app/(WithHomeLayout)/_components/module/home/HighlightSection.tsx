import Title from "@/app/(WithHomeLayout)/_components/ui/Title";
import { NewsCard } from "@/app/(WithHomeLayout)/_components/ui/cards/NewsCard";
import React from "react";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";
import SeeMoreButton from "../../ui/button/SeeMore";
import HighLightCard from "../../ui/cards/HighlightCard";

const newsItems = [
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
  {
    id: 5,
    imageUrl: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    baseText: "নিজস্ব প্রতিনিধি",
    date: "২ ঘন্টা আগে",
    title:
      "বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন বিবিআসের জরিপ দেশের বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন ৭২% পরিবারের প্রথম স্মার্টফোন",
  },
  {
    id: 6,
    imageUrl: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    baseText: "নিজস্ব প্রতিনিধি",
    date: "২ ঘন্টা আগে",
    title:
      "বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন বিবিআসের জরিপ দেশের বিবিআসের জরিপ দেশের ৭২% পরিবারের প্রথম স্মার্টফোন ৭২% পরিবারের প্রথম স্মার্টফোন",
  },
];

export default function HighlightSection() {
  return (
    <ScreenContainer className="flex flex-col lg:flex-row gap-4 px-3 mt-8">
      <div className="flex-col flex-2 lg:flex-[2.5] lg:flex-row gap-4 lg:bg-white">
        <div className="flex-[0.85] lg:flex-1 lg:h-[347px] bg-transparent lg:bg-white rounded-lg">
          <Title title="এন্ট্রেপ্রেনিউর নিউজ" />
          <div className="pt-[10px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:pl-[10px] lg:pb-[10px] mb-5">
            <HighLightCard />
            <HighLightCard />
          </div>
          <SeeMoreButton link={""} />
        </div>
      </div>

      <div className="order-3 flex-1 rounded-lg">
        <div className="bg-white">
          <div className="lg:px-4">
            <Title title="স্টার্টআপ" />
          </div>
          <div className="p-2.5 h-[440px] overflow-y-auto">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {newsItems.map((item) => (
                <NewsCard
                  key={item.id}
                  varient="secondary"
                  imageUrl={item.imageUrl}
                  baseText={item.baseText}
                  date={item.date}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="block lg:hidden mt-5">
          <SeeMoreButton />
        </div>
      </div>
    </ScreenContainer>
  );
}
