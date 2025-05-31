import React from "react";
import Image from "next/image";

interface MainNewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const MainNewsCard: React.FC<MainNewsCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden h-auto">
      <div className="relative w-full h-[197px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-t-md mb-2.5"
        />
      </div>
      <h3 className="text-xl leading-8 font-medium text-black mb-1.5 pl-[10px] md:pl-0 line-clamp-2 mt-2">
        {title}
      </h3>
      <p className="text-base text-text leading-6 pl-[10px] md:pl-0 line-clamp-3">
        {description}
      </p>
    </div>
  );
};
