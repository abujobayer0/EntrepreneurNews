import Title from "@/app/(WithCommonLayout)/_components/ui/Title";
import React from "react";
import Image from "next/image";
import { Card } from "../../ui/cards/SecondaryNewsCard";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";
import SeeMoreButton from "../../ui/button/SeeMore";

export default function InternationalNews() {
  return (
    <ScreenContainer className="flex flex-col h-full md:h-[663px] md:flex-row gap-4">
      <div className="flex flex-col flex-[0.85] md:flex-1 md:h-[347px] bg-transparent md:bg-white rounded-lg w-full">
        <div className="flex flex-col w-full">
          <Title title="আন্তর্জাতিক" />
          <div className="pt-[10px] grid grid-cols-1 md:grid-cols-2 gap-6 md:pl-[10px] md:pb-[10px] p-3">
            <Card />
            <Card />
          </div>{" "}
          <SeeMoreButton className="w-full mt-2" />
        </div>
        <div className="hidden md:flex w-full mt-7">
          <Image
            src="https://i.ibb.co/vvfc5QMG/blackfridayimage.png"
            alt="International news"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="order-3 rounded-lg overflow-hidden bg-gray-100 w-full h-full md:w-[371px] md:h-[663px]">
        <Image
          src="https://i.ibb.co/zHBZ7cPC/image.png"
          alt="International news"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
    </ScreenContainer>
  );
}
