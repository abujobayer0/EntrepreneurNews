import React from "react";
import BengaliPollLeft from "./BengaliPollLeft";
import BengaliPollRight from "./BengaliPollRight";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";

const BengaliPollInterface = () => {
  return (
    <ScreenContainer className="px-2 md:px-3 w-full">
      <div className="flex flex-col md:flex-row gap-5">
        <BengaliPollLeft />
        <BengaliPollRight />
      </div>
    </ScreenContainer>
  );
};

export default BengaliPollInterface;
