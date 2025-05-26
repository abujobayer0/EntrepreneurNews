import React from "react";
import { BreakingNewsCard } from "@/app/(WithCommonLayout)/_components/ui/cards/BreakingNewsCard";
import Title from "@/app/(WithCommonLayout)/_components/ui/Title";

interface NewsLeftProps {
  highlights: typeof import("../home/highlights/data").highlights;
}

export default function NewsLeft({ highlights }: NewsLeftProps) {
  return (
    <div className="w-full md:w-[65%] bg-white rounded-b-xl">
      <Title title="নিউজ টাইটেল" />
      <div className="flex flex-col gap-4 md:gap-6">
        {highlights.map((highlight, index) => (
          <BreakingNewsCard
            key={index}
            imageUrl={highlight.imageUrl}
            label={highlight.category}
            reporter={highlight.reporter ?? "N/A"}
            source={highlight.time}
            title={highlight.title}
            description={highlight.description}
            column={true}
          />
        ))}
      </div>
    </div>
  );
}
