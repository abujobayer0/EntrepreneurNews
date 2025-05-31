"use client";

import { useState } from "react";
import { columnistsData } from "./data";
import ColumnistCard from "../../ui/cards/ColumnistCard";
import Pagination from "@/components/ui/pagination/Pagination";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";

const ITEMS_PER_PAGE = 16;

export default function Columnist() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(columnistsData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = columnistsData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ScreenContainer className="px-3">
      <h1
        className="text-[36px] leading-[56px] tracking-normal font-medium text-black py-5 md:py-10"
        style={{ fontFamily: "HindSiliguri-Regular" }}
      >
        সকল কলামিস্টদের লিস্ট
      </h1>

      {/* Full width grid */}
      <div className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-between">
          {currentData.map((item) => (
            <div key={item.id} className="w-full">
              <ColumnistCard columnist={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Reusable Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </ScreenContainer>
  );
}
