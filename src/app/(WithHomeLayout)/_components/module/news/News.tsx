"use client";

import React, { useState } from "react";
import NewsDetailsRight from "./newsDetail/NewsDetailsRight";
import NewsLeft from "./NewsLeft";
import Pagination from "@/components/ui/pagination/Pagination";
import { highlights } from "../home/highlights/data";

const ITEMS_PER_PAGE = 7; // Only 7 items per page

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(highlights.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentHighlights = highlights.slice(startIndex, endIndex);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex md:flex-row flex-col gap-5 mt-[26px] md:mt-[35px]">
        <NewsLeft highlights={currentHighlights} />
        <NewsDetailsRight className="w-full md:w-[30%] hidden md:flex" />
      </div>

      <Pagination
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        totalPages={totalPages}
      />
    </div>
  );
}
