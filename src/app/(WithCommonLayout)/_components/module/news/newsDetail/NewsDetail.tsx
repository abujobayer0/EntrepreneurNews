import React from "react";
import NewsDetailsLeft from "./NewsDetailsLeft";
import NewsDetailsRight from "./NewsDetailsRight";
import { newsItems } from "../../home/TodaysNews";
import DiplomacyCard from "../../home/diplomacySection/DiplomacyCard";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";
import SeeMoreButton from "../../../ui/button/SeeMore";

interface NewsDetailScreenProps {
  newsId: string;
}

const NewsDetailScreen: React.FC<NewsDetailScreenProps> = ({ newsId }) => {
  return (
    <ScreenContainer className="px-3 mt-[26px] lg:mt-[35px] mb-5">
      <div className="flex lg:flex-row flex-col gap-5 mt-2 w-full">
        <NewsDetailsLeft newsId={newsId} />
        <NewsDetailsRight />
      </div>

      <div className="bg-[#2B3589] lg:bg-white rounded-2xl px-4 py-5 lg:p-8 mt-24">
        <div className="flex flex-row items-center justify-between gap-3 mb-5">
          <h2 className="text-white text-xl leading-[24px] font-semibold bg-[#000B65] w-full lg:w-[549px] py-3 pl-6 rounded-lg">
            নির্বাচন কমিশন নিয়ে আরো
          </h2>
          <SeeMoreButton />
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full gap-5">
          {newsItems.map((card) => (
            <DiplomacyCard
              key={card.id}
              imageUri={card.imageUrl}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </ScreenContainer>
  );
};

export default NewsDetailScreen;
