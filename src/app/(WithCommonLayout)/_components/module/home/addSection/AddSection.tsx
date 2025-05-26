import React from "react";
import Image from "next/image";
import addImage from "@/assets/images/add-1.jpg";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";

const AddSection: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative md:h-[411px]">
        <Image
          src={addImage}
          alt="Advertisement banner"
          width={1000}
          height={1000}
          className="object-cover h-full w-full"
        />
        <ScreenContainer>
          <div className="flex items-start h-full w-full justify-start absolute z-20 top-1/3">
            <h2 className="text-white font-bold text-[20px] md:text-[50px] md:leading-[60px] px-3">
              যেকোনো ধরনের এড রান <br /> করতে আমাদের সাথে <br />
              যোগাযোগ করুন
            </h2>
          </div>
        </ScreenContainer>
      </div>
    </div>
  );
};

export default AddSection;
