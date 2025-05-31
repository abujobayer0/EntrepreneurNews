import React from "react";
import { BreakingNewsCard } from "@/app/(WithHomeLayout)/_components/ui/cards/BreakingNewsCard";
import Title from "@/app/(WithHomeLayout)/_components/ui/Title";
import { highlights } from "./data";
import { THighlights } from "@/types";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";
import SeeMoreButton from "../../../ui/button/SeeMore";

// Group highlights by category
const groupByCategory = (data: THighlights[]) => {
  return data.reduce((acc, curr) => {
    const category = curr.category || "Others";
    if (!acc[category]) acc[category] = [];
    acc[category].push(curr);
    return acc;
  }, {} as Record<string, THighlights[]>);
};

export default function Highlights() {
  const groupedData = groupByCategory(highlights);
  const cricketData = groupedData["দেশ ও রাজনীতি"] || [];
  const eventData = groupedData["অনুষ্ঠান"] || [];

  return (
    <ScreenContainer className="flex flex-col md:flex-row gap-8 md:gap-3 px-3 w-full">
      <div className="bg-white rounded-lg md:w-[65%]">
        <Title title="দেশ ও রাজনীতি" />
        <div className="md:h-[961px] flex flex-col gap-3 md:mt-3 p-1 md:p-4 overflow-y-auto">
          {cricketData.map((highlight, index) => (
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

      {/* Right Column - অনুষ্ঠান */}
      <div className="bg-white rounded-lg md:w-[34%]">
        <Title title="অনুষ্ঠান" />
        <div className="md:h-[961px] flex flex-col gap-3 md:mt-3 p-1 md:p-4 overflow-hidden">
          {eventData.slice(0, 2).map((highlight, index) => (
            <BreakingNewsCard
              key={index}
              imageUrl={highlight.imageUrl}
              label={highlight.category}
              reporter={highlight.reporter ?? "N/A"}
              source={highlight.time}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
          <SeeMoreButton className="w-full mx-2" />
        </div>
      </div>
    </ScreenContainer>
  );
}
