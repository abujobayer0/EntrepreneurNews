import React from "react";
import Image from "next/image";

interface DiplomacyCardProps {
  imageUri: string;
  title: string;
}

const DiplomacyCard: React.FC<DiplomacyCardProps> = ({ imageUri, title }) => {
  return (
    <button className="rounded-lg overflow-hidden bg-white w-full md:w-[267px] h-[201px] focus:outline-none">
      <div className="relative w-full h-full">
        <Image src={imageUri} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-gradient-to-t from-black/80 to-transparent" />
          <p className="text-white text-[16px] line-clamp-2 leading-[24px] font-medium relative z-10">
            {title}
            {title}
          </p>
        </div>
      </div>
    </button>
  );
};

export default DiplomacyCard;
