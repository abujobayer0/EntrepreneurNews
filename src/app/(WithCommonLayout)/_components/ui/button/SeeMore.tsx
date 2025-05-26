"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SeeMoreButton({
  link,
  className = "md:w-fit",
}: {
  link?: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(link as string)}
      className={`px-4 py-2 w-full justify-center items-center rounded-lg ring ring-[#2B3589] bg-transparent cursor-pointer ${className}`}
    >
      <span className={`text-[#2B3589] font-semibold text-sm`}>আরও দেখুন</span>
    </button>
  );
}
