import { theme } from "@/constants/theme";
import React from "react";
import { toBanglaNumber } from "@/utils/toBanglaNumber";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      pages.push(renderPageButton(1));
      pages.push(renderPageButton(2));
      pages.push(
        <p key="ellipsis" className="mx-2" style={{ color: theme.colors.text }}>
          ...
        </p>
      );
      pages.push(renderPageButton(totalPages - 1));
      pages.push(renderPageButton(totalPages));
    }

    return pages;
  };

  const renderPageButton = (page: number) => (
    <button
      key={page}
      onClick={() => onPageChange(page)}
      className={`size-[40px] rounded-md justify-center items-center mx-1 text-[16px] ${
        currentPage === page
          ? `bg-[${theme.colors.primary}]`
          : `bg-[${theme.colors.text}]`
      }`}
    >
      <p
        className={`text-sm ${
          currentPage === page ? "text-white" : "text-gray-700"
        }`}
      >
        {page < 10 ? `0${page}` : page}
      </p>
    </button>
  );

  return (
    <div className="mt-4 bg-white py-2 md:py-4 flex md:px-6 flex-row justify-end md:justify-between items-center">
      {/* Pagination Text */}
      <div className="flex-row bg-[#FAFAFE] px-3 py-2 rounded-sm items-center justify-between  hidden md:flex">
        <p className="text-[16px]" style={{ color: theme.colors.primary }}>
          পাতা {toBanglaNumber(totalPages)} এর মধ্যে{" "}
          {toBanglaNumber(currentPage)}
        </p>
      </div>

      {/* Desktop Pagination (md and up) */}
      <div className="flex-row items-center bg-[#FAFAFE] px-3 py-2 rounded-sm justify-end gap-5 hidden md:flex">
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`mx-2 p-1.5 rounded-md ${
            currentPage === 1 ? "bg-primary" : "bg-transparent"
          }`}
          style={{
            backgroundColor:
              currentPage === 1 ? theme.colors.primary : "transparent",
          }}
        >
          <ChevronLeft
            size={20}
            color={currentPage === 1 ? "white" : theme.colors.text}
          />
        </button>

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`mx-2 p-1.5 rounded-md ${
            currentPage === totalPages ? "bg-primary" : "bg-transparent"
          }`}
          style={{
            backgroundColor:
              currentPage === totalPages ? theme.colors.primary : "transparent",
          }}
        >
          <ChevronRight
            name="chevron-right"
            size={20}
            color={currentPage === totalPages ? "white" : theme.colors.text}
          />
        </button>
      </div>

      {/* Mobile Pagination (below md) */}
      <div className="flex-row justify-end gap-5 items-end md:hidden mt-4">
        <button
          onClick={handlePrevious}
          className="bg-red-100 rounded-lg px-6 py-3"
        >
          <p className="text-red-500">পূর্ববর্তী</p>
        </button>
        <button
          onClick={handleNext}
          className="rounded-lg px-6 py-3"
          style={{
            backgroundColor: `${theme.colors.primary}10`,
          }}
        >
          <p style={{ color: theme.colors.primary }}>পরবর্তী</p>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
