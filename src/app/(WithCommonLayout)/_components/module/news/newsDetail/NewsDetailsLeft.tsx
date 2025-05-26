import React from "react";
import Image from "next/image";
import { theme } from "@/constants/theme";
import { NewsArticleType } from "@/types";
import AuthorSection from "./AuthorSection";
import authorAvatar from "@/assets/images/logo.png";
import addImage from "@/assets/images/news-details-ads-2.png";

const mockNewsArticle: NewsArticleType = {
  id: "1",
  category: "অর্থিক কর্মকাণ্ড",
  title: "বিশ্বব্যাংক জানিয়ে দেশের ৭২% পরিবারে প্রথম স্মার্টফোন",
  imageUrl:
    "https://media.prothomalo.com/prothomalo-bangla/2023-12/c08ad8d7-dfc8-4fd6-9d77-76afea29654c/prothomalo_smartphone__reuters.webp",
  content: [
    "এটা এক জনাব আজিজ আল আমিনের সংগ্রহে প্রথম স্মার্টফোন রিপোর্ট মজবুত লোকে দেশ সরকারের নারীরা অর্থনৈতিক সেবার প্রধান চ্যালেঞ্জ সমাধানের এই উপায়ে দেশে পিছিয়ে গেলে তারা। এ গবেষণাগত উন্নতিতে কারণ অন্য কোথায় সমান বিষয়ে। এরমধ্য হয়েই রায়ের মতাদর্শ আলোচিত রাজার অনুপ্রেরণা প্রতিবেদন সেবা ব্যবস্থার সেবা কেন্দ্রবিন্দু হিসাবে দেখা যায়। আর্থিক বিশ্লেষণে, ও ব্রাণ্ডিং বিশেষজ্ঞ, এ কারণে উন্নয়নের যা জানান দিয়েছেন।",
    "যে এর মতো থাকার কথা, গাড়িতে ব্যবসায় এই কারণে যুক্ত হয়ে থাকায় কারণ পর্যাপ্ত বিশ্লেষণ। ২০২১ সালের কর্মসূচী পরামর্শ গড়ে তোলা হয়েছিল অবস্থায় সম্ভাবনা।",
    "তিনি কার্যকরী প্রভাবক প্রতিষ্ঠানসমূহ, প্রযুক্তির বিশেষায়িতদের দ্বারা সামাজিক বিষয়ে নিম্নকণ্ঠ কণ্ঠস্বর, আনন্দের তিনি বিভিন্ন যাত্রা গড়ার করেন নিবেদন করেছেন।",
    "তাকে দেখলে ও সামাজিক উন্নতিসহ কারণ এই বিষয়ে ধারণ করতে ডিজিটাল বিশ্বের কণ্ঠস্বর।সাম্প্রতিককালে তা দেখা আসছে নাগরিক কথা এক গুরুত্বপূর্ণ বিষয় বলে সার শর্মাজিতসহ তাকে এই প্রসঙ্গে অভিজ্ঞতাসমূহ বারবার মূল্যবান দর্শকদের সাথে এবং প্রশাসনিক সম্পর্কে।",
  ],
  author: {
    name: "শাহমুখ মজলিশ",
    avatar: authorAvatar,
    designation: "মুখপাত্র",
    organization: "এ.বি.সি",
    date: "২ অক্টোবর ২০২৪",
  },
};

interface NewsDetailsLeftProps {
  newsId: string;
}

const NewsDetailsLeft: React.FC<NewsDetailsLeftProps> = ({ newsId }) => {
  const article = mockNewsArticle;

  console.log("newsId=>", newsId);

  return (
    <div className="w-full lg:w-[70%] overflow-y-auto">
      {/* Category Badge */}
      <div className="space-y-3">
        <p
          style={{
            color: theme.colors.primary,
          }}
        >
          {article.category}
        </p>
        <h1
          style={{
            fontFamily: "Hind Siliguri",
            fontWeight: "500",
            color: theme.colors.black,
          }}
          className="text-[20px] lg:text-[36px] leading-[24px] lg:leading-[56px]"
        >
          {article.title}
        </h1>
      </div>
      {/* Hero Image with Title */}
      <div className="relative my-4">
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={800}
          height={389}
          className="h-[185px] lg:h-[389px] rounded-2xl object-cover"
        />
      </div>
      {/* Author Info and Social Share */}
      <div className="px-4 mt-2">
        <AuthorSection author={article.author} />

        {/* Content Paragraphs */}
        <div className="py-4">
          {article.content.map((paragraph, index) => (
            <p
              key={index}
              style={{
                fontFamily: "Hind Siliguri",
                fontWeight: 400,
                color: theme.colors.text,
                marginBottom: 16,
              }}
              className="text-[16px] leading-[26px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      {/* Ads Section */}
      <div className="flex flex-col lg:flex-row mt-6 gap-5 lg:gap-7 w-full justify-between">
        {/* First Ad - Hidden on small screens if needed */}
        <div className="w-full flex-1">
          <Image
            src={addImage}
            alt="Advertisement"
            width={800}
            height={213}
            className="hidden lg:block w-full h-[213px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsLeft;
