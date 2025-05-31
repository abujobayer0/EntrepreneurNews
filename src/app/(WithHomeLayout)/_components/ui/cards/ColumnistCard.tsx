// components/ColumnistCard.tsx
import React from "react";
import { TColumnist } from "@/types";
import Image from "next/image";

type Props = {
  columnist: TColumnist;
};

export default function ColumnistCard({ columnist }: Props) {
  return (
    <div className="w-full h-full">
      <div className="bg-transparent h-full md:h-[379px]">
        <div className="relative w-full h-[296px] md:h-[296px]">
          <Image
            src={columnist.image}
            alt={columnist.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-xl leading-6 mb-2 font-hind-siliguri text-black">
            {columnist.name}
          </h3>
          <p className="font-normal text-sm leading-[23px] font-hind-siliguri text-text">
            {columnist.title}
          </p>
        </div>
      </div>
    </div>
  );
}
