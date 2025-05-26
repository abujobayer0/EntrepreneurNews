import React from "react";
import { newsItems } from "./data";
import DiplomacyCard from "./DiplomacyCard";

interface DiplomacySectionProps {
  className?: string;
}

const DiplomacySection: React.FC<DiplomacySectionProps> = ({ className }) => {
  return (
    <div className="max-w-7xl mx-auto px-3 w-full">
      <div className={`bg-[#2B3589] rounded-lg p-3 md:p-8 ${className}`}>
        <h2 className="text-white text-xl leading-[24px] font-semibold mb-5 bg-[#000B65] md:w-[549px] py-3 px-6 rounded-lg">
          কূটনীতি
        </h2>

        <div className="flex flex-col md:flex-row justify-between w-full gap-5">
          {newsItems.map((card) => (
            <DiplomacyCard
              key={card.id}
              imageUri={card.imageUrl}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiplomacySection;
