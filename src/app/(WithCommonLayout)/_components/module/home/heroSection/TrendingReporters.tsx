import React from "react";
import TrendingReportCard from "../../../ui/cards/TrendingReportCard";
import { trendingReportData } from "./data";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";

const TrendingReporters = () => {
  return (
    <ScreenContainer className="relative px-3 md:-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {trendingReportData.map((report) => (
          <div key={report.id} className="w-full">
            <TrendingReportCard {...report} />
          </div>
        ))}
      </div>
    </ScreenContainer>
  );
};

export default TrendingReporters;
