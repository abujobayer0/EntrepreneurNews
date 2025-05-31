"use client";

import React from "react";
import Image from "next/image";
import Header from "@/app/(WithHomeLayout)/_components/ui/Header";
import { BreakingNewsCard } from "@/app/(WithHomeLayout)/_components/ui/cards/BreakingNewsCard";
import { newsItems } from "../../home/TodaysNews";
import { NewsCard } from "@/app/(WithHomeLayout)/_components/ui/cards/NewsCard";
import { useRouter } from "next/navigation";

interface TNewsDetailsRightProps {
  className?: string;
}

const NewsDetailsRight: React.FC<TNewsDetailsRightProps> = ({ className }) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col w-full ${className} w-full md:w-[30%] overflow-y-auto`}
    >
      <div className="bg-white rounded-b-2xl">
        <Header title="ট্রেন্ডিং নিউজ" />
        <div className="md:p-1 mt-2">
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
      <div className="bg-white rounded-2xl mt-6 flex flex-col px-2 py-3">
        {newsItems.slice(0, 4).map((item) => (
          <NewsCard
            key={item.id}
            imageUrl={item.imageUrl}
            baseText={item.baseText}
            date={item.date}
            title={item.title}
            varient="primary"
            onPress={() => router.push(`/news/${1}`)}
          />
        ))}
      </div>

      <div className="order-3 rounded-lg overflow-hidden bg-gray-100 w-full h-full md:w-[371px] md:h-[663px] mx-auto">
        <Image
          src="https://i.ibb.co.com/W4Lmcjqq/image.png"
          alt="International news"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default NewsDetailsRight;
