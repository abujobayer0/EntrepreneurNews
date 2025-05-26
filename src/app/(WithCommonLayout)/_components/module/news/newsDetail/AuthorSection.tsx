import { theme } from "@/constants/theme";
import { AuthorType } from "@/types";
import Image from "next/image";
import SocialShareButtons from "./SocialShareButtons";

const AuthorSection = ({ author }: { author: AuthorType }) => {
  return (
    <div className="flex flex-row items-center">
      <Image
        src={author.avatar}
        alt={author.name}
        width={80}
        height={80}
        className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] mr-3 rounded-full object-cover"
      />
      <div className="flex-1 gap-2">
        <h3
          style={{
            fontFamily: "Hind Siliguri",
            fontWeight: "500",
            color: theme.colors.black,
          }}
          className="text-[16px] md:text-[20px] leading-[24px]"
        >
          {author.name}
        </h3>
        <p
          style={{
            fontFamily: "Hind Siliguri",
            fontWeight: "400",
            color: theme.colors.text,
            opacity: 0.7,
          }}
          className="text-[14px] md:text-[16px] leading-[24px]"
        >
          {author.designation}, {author.organization}
        </p>
      </div>
      <div className="flex flex-col items-end justify-end gap-5">
        <p
          style={{
            fontFamily: "Hind Siliguri",
            fontWeight: "400",
            color: theme.colors.text,
            opacity: 0.7,
          }}
          className="text-[10px] leading-[20px]"
        >
          {author.date}
        </p>
        <SocialShareButtons />
      </div>
    </div>
  );
};

export default AuthorSection;
