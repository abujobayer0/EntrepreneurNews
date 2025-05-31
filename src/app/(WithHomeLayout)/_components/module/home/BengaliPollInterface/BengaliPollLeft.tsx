"use client";

import React, { useState } from "react";
import Title from "@/app/(WithHomeLayout)/_components/ui/Title";
import VictoryPie from "./VictoryPie";
import { theme } from "@/constants/theme";

export default function BengaliPollLeft() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const polls = [
    {
      question:
        "গণতান্ত্রিক প্রতিষ্ঠানগুলো দুর্বল হলে কি দেশের রাজনৈতিক স্থিতিশীলতা হুমকির মুখে পড়বে?",
      data: [
        { x: "হ্যাঁ", y: 40.5, fill: theme.colors.primary },
        { x: "না", y: 36.4, fill: "#e53935" },
        { x: "কোনো মতামত নেই", y: 31.1, fill: "#283238" },
      ],
    },
    {
      question: "বাংলাদেশের অর্থনৈতিক উন্নয়নে সবচেয়ে বড় বাধা কি আপনার মতে?",
      data: [
        { x: "হ্যাঁ", y: 36.5, fill: theme.colors.primary },
        { x: "না", y: 40.4, fill: "#e53935" },
        { x: "কোনো মতামত নেই", y: 23.1, fill: "#283238" },
      ],
    },
    {
      question:
        "শিক্ষা ব্যবস্থার উন্নতির জন্য কোন বিষয়টি সর্বাধিক গুরুত্বপূর্ণ?",
      data: [
        { x: "হ্যাঁ", y: 60.5, fill: theme.colors.primary },
        { x: "না", y: 16.4, fill: "#e53935" },
        { x: "কোনো মতামত নেই", y: 23.1, fill: "#283238" },
      ],
    },
    {
      question:
        "জলবায়ু পরিবর্তন মোকাবেলায় বাংলাদেশের সবচেয়ে গুরুত্বপূর্ণ পদক্ষেপ কী হওয়া উচিত?",
      data: [
        { x: "হ্যাঁ", y: 23.5, fill: theme.colors.primary },
        { x: "না", y: 36.4, fill: "#e53935" },
        { x: "কোনো মতামত নেই", y: 40.1, fill: "#283238" },
      ],
    },
  ];

  const handleVote = (pollIndex: number, optionIndex: number): void => {
    console.log(`Voted for poll ${pollIndex}, option ${optionIndex}`);
  };

  const PaginationDots = () => {
    return (
      <div className="flex flex-row justify-center items-center gap-3 w-full">
        {polls.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="focus:outline-none"
          >
            <div
              className={`${
                currentSlide === index
                  ? "size-2.5 bg-[#2B3589]"
                  : "size-2 bg-gray-300"
              } rounded-full`}
            />
          </button>
        ))}
      </div>
    );
  };

  const Legend = ({
    data,
  }: {
    data: { x: string; y: number; fill: string }[];
  }) => {
    return (
      <div className="mt-2 gap-2 md:gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-row items-center mb-1">
            <div
              className="size-5 rounded-md mr-2"
              style={{ backgroundColor: item.fill }}
            />
            <span className="text-xs text-gray-700">
              {item.x} ({item.y.toFixed(1)}%)
            </span>
          </div>
        ))}
      </div>
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === polls.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? polls.length - 1 : prev - 1));
  };

  const currentPoll = polls[currentSlide];

  return (
    <div className="w-full bg-transparent md:bg-white md:w-[65%] relative">
      <div className="flex flex-row justify-between items-center h-[50px] mb-5">
        <Title title="অনলাইন জরিপ" />
      </div>
      <div className="flex-1 p-2 md:p-4 pb-0 md:pb-4">
        <h2
          style={{
            fontFamily: "HindSiliguri-Medium",
            lineHeight: "1.2",
            color: "#1f2937",
          }}
          className="text-[24px] font-medium md:text-[32px]"
        >
          {currentPoll.question}
        </h2>

        <div className="flex flex-col md:flex-row gap-3 justify-between w-full mt-3">
          <div className="flex flex-col items-start mt-10">
            <div className="flex flex-row gap-2 md:gap-4 items-center">
              <button
                className="bg-[#2B3589] h-[36px] md:h-[42px] rounded-lg text-sm px-3 md:px-5 py-1 flex items-center justify-center"
                onClick={() => handleVote(currentSlide, 0)}
              >
                <span className="text-white text-xs text-center">
                  {currentPoll.data[0].x}
                </span>
              </button>
              <button
                className="bg-red-600 h-[36px] md:h-[42px] rounded-lg text-sm px-3 md:px-5 py-1 flex items-center justify-center"
                onClick={() => handleVote(currentSlide, 1)}
              >
                <span className="text-white text-xs text-center">
                  {currentPoll.data[1].x}
                </span>
              </button>
              <button
                style={{
                  borderColor: theme.colors.primary,
                }}
                className="bg-transparent md:bg-white border rounded-lg px-4 md:px-6 py-1 h-[36px] md:h-[42px] flex items-center justify-center"
              >
                <span
                  style={{
                    color: theme.colors.primary,
                  }}
                  className="text-sm text-center"
                >
                  {currentPoll.data[2].x}
                </span>
              </button>
            </div>

            <span className="text-xs font-semibold text-gray-900 mt-4">
              আপনি ১ মিনিটে একবার ভোট দিতে পারবেন
            </span>
          </div>
          <div className="flex flex-row justify-between items-center gap-2 md:gap-4">
            <VictoryPie data={currentPoll.data} />
            <Legend data={currentPoll.data} />
          </div>
        </div>
      </div>
      <div className="justify-end md:hidden flex flex-row gap-3 md:gap-5 items-end mt-4">
        <button
          onClick={prevSlide}
          className="bg-red-100 rounded-lg px-4 md:px-6 py-2 md:py-3"
        >
          <span className="text-red-500">পূর্ববর্তী</span>
        </button>
        <button
          onClick={nextSlide}
          style={{ backgroundColor: `${theme.colors.primary}10` }}
          className="rounded-lg px-4 md:px-6 py-2 md:py-3"
        >
          <span style={{ color: theme.colors.primary }}>পরবর্তী</span>
        </button>
      </div>
      <div className="h-[20px] hidden md:flex">
        <PaginationDots />
      </div>
    </div>
  );
}
