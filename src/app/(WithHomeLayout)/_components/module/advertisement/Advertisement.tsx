"use client";

import React, { useState, useEffect } from "react";
import { theme } from "@/constants/theme";
import Title from "@/app/(WithHomeLayout)/_components/ui/Title";

const Advertisement = () => {
  const [html2pdf, setHtml2pdf] = useState<
    typeof import("html2pdf.js")["default"] | null
  >(null);

  useEffect(() => {
    const loadHtml2Pdf = async () => {
      if (typeof window !== "undefined") {
        const loadedModule = await import("html2pdf.js");
        setHtml2pdf(() => loadedModule.default);
      }
    };
    loadHtml2Pdf();
  }, []);

  const openLink = (url: string) => {
    if (typeof window !== "undefined") {
      try {
        window.open(url, "_blank");
      } catch (err) {
        console.error("Failed to open URL:", err);
      }
    }
  };

  const generateHtml = () => `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; }
          h1 { color: #2B3589; font-size: 24px; }
          .section-title { font-size: 20px; font-weight: bold; margin-top: 24px; }
          .paragraph { font-size: 16px; margin-bottom: 12px; }
          .footer { margin-top: 32px; color: #2B3589; font-weight: bold; }
          @media (max-width: 600px) {
            body { padding: 8px; }
            h1 { font-size: 18px; }
            .section-title { font-size: 16px; }
            .paragraph { font-size: 14px; }
          }
        </style>
      </head>
      <body>
        <h1>বিজনেসপ্রেস</h1>
        <div class="section-title">
          বাংলাদেশে উদ্যোক্তা জাগরণ: স্টার্টআপ বিপ্লবের নেতৃত্ব দিচ্ছে নতুন প্রজন্ম
        </div>
        <div class="paragraph">
          সর্বশেষ উদ্যোক্তা ইকোসিস্টেম জরিপ (স্টার্টআপ বাংলাদেশ রিপোর্ট ২০২৩, আইসিটি ডিভিশন) অনুযায়ী, বাংলাদেশে বর্তমানে প্রায় ২,৫০০ সক্রিয় স্টার্টআপ রয়েছে, যেগুলোর সম্মিলিত বাজার মূল্য ৫ বিলিয়ন মার্কিন ডলারের বেশি...
        </div>
        <div class="paragraph">
          এই ইকোসিস্টেমে সবচেয়ে উল্লেখযোগ্য দিক হলো— উদ্যোক্তা হয়ে ওঠার আগ্রহ এখন রাজধানী ছাড়িয়ে মফস্বল শহর ও গ্রামীণ এলাকাতেও ছড়িয়ে পড়ছে...
        </div>
        <div class="section-title">
          উদ্যোক্তাদের সঙ্গে যুক্ত হতে চাইলে কেন 'Entrepreneur Bangladesh' প্ল্যাটফর্মটি সেরা?
        </div>
        <div class="paragraph">
          প্রযুক্তি, প্রশিক্ষণ এবং পিচিংয়ের সুযোগ—সবকিছুই এক জায়গায় নিয়ে আসা হয়েছে Entrepreneur Bangladesh-এ...
        </div>
        <div class="footer">
          বিজনেসপ্রেস জানতে যোগাযোগ করুন<br/>
          +880 1717-071576<br/>
          entrepreneur@gmail.com
        </div>
      </body>
    </html>
  `;

  const downloadPdf = async () => {
    if (typeof window !== "undefined" && html2pdf) {
      try {
        const html = generateHtml(); // your HTML string content

        const element = document.createElement("div");
        element.innerHTML = html;

        const opt = {
          margin: 0.5,
          filename: "document.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        await html2pdf().from(element).set(opt).save();
      } catch (error) {
        console.error("Error generating PDF:", error);
      }
    }
  };

  return (
    <div className="max-w-7xl px-3 md:px-0 mx-auto flex-1 bg-white rounded-b-xl my-1 md:my-10 space-y-3">
      {/* Header */}
      <Title title="বিজনেসপ্রেস" className="w-full flex justify-center" />

      {/* Main Title */}
      <div className="px-3 md:p-8 space-y-5">
        <h2 className="text-xl leading-[32px] md:text-[32px] md:leading-[48px] font-medium">
          বাংলাদেশে উদ্যোক্তা জাগরণ: স্টার্টআপ বিপ্লবের নেতৃত্ব দিচ্ছে <br />
          নতুন প্রজন্ম
        </h2>

        {/* Introductory Paragraph */}
        <div>
          <p className={` text-base leading-6 text-[${theme.colors.text}]`}>
            সর্বশেষ উদ্যোক্তা ইকোসিস্টেম জরিপ (স্টার্টআপ বাংলাদেশ রিপোর্ট ২০২৩,
            আইসিটি ডিভিশন) অনুযায়ী, বাংলাদেশে বর্তমানে প্রায় ২,৫০০ সক্রিয়
            স্টার্টআপ রয়েছে, যেগুলোর সম্মিলিত বাজার মূল্য ৫ বিলিয়ন মার্কিন
            ডলারের বেশি এই স্টার্টআপগুলো গত এক দশকে ১৫ লাখেরও বেশি তরুণ-তরুণীর
            জন্য সরাসরি ও পরোক্ষভাবে কর্মসংস্থানের সুযোগ তৈরি করেছে।
          </p>
          <p className={`text-base leading-6 text-[${theme.colors.text}] mt-4`}>
            এই ইকোসিস্টেমে সবচেয়ে উল্লেখযোগ্য দিক হলো— উদ্যোক্তা হয়ে ওঠার আগ্রহ
            এখন রাজধানী ছাড়িয়ে মফস্বল শহর ও গ্রামীণ এলাকাতেও ছড়িয়ে পড়ছে। তরুণ
            প্রজন্ম প্রযুক্তি, ই-কমার্স, স্বাস্থ্যসেবা, শিক্ষা, কৃষি এবং
            পরিবেশবান্ধব পণ্যখাতে অভাবনীয় সব সমাধান নিয়ে হাজির হচ্ছে।
          </p>
          <p className={` text-base leading-6 text-[${theme.colors.text}]`}>
            বিশ্বব্যাপী স্বীকৃতি পাওয়া উদ্যোক্তাদের মধ্যে অনেকেই বাংলাদেশ থেকে
            উঠে এসেছেন। উদাহরণস্বরূপ, Pathao, Chaldal, ShopUp কিংবা bKash— এই
            প্রতিষ্ঠানগুলো শুধু দেশে নয়, আন্তর্জাতিক বিনিয়োগকারীদের মধ্যেও আস্থা
            তৈরি করতে পেরেছে
          </p>
          <p
            className={` text-base leading-6 text-[${theme.colors.text}] mt-4`}
          >
            দেশে উদ্যোক্তা সংস্কৃতি বিস্তারে গুরুত্বপূর্ণ ভূমিকা রাখছে বিভিন্ন
            ইনকিউবেটর, এক্সিলারেটর, এবং সরকারি-বেসরকারি ফান্ডিং প্ল্যাটফর্ম।
            Startup Bangladesh Ltd. সহ ইউনিসেফ, ইউএনডিপি ও বিভিন্ন ভেঞ্চার
            ক্যাপিটাল ফার্ম তরুণ উদ্যোক্তাদের পাশে দাঁড়িয়েছে।
          </p>
        </div>

        {/* Section Title */}
        <p className="text-xl leading-[32px] md:text-[32px] md:leading-[48px] font-medium">
          উদ্যোক্তাদের সঙ্গে যুক্ত হতে চাইলে কেন &apos;Entrepreneur <br />
          Bangladesh&apos; প্ল্যাটফর্মটি সেরা?
        </p>

        {/* Section Content */}
        <div>
          <p className={` text-base leading-6 text-[${theme.colors.text}]`}>
            প্রযুক্তি, প্রশিক্ষণ এবং পিচিংয়ের সুযোগ—সবকিছুই এক জায়গায় নিয়ে আসা
            হয়েছে Entrepreneur Bangladesh-এ। মাসে প্রায় ১৫ লাখ অনলাইন ভিজিটর এবং
            ফেসবুকে ৯ লক্ষাধিক ফলোয়ার নিয়ে এই প্ল্যাটফর্মটি এখন নতুন
            উদ্যোক্তাদের জন্য সবচেয়ে শক্তিশালী নেটওয়ার্কিং ও স্কেলআপ হাব।
          </p>
          <p className={` text-base leading-6 text-[${theme.colors.text}]`}>
            Entrepreneur Bangladesh শুধু ব্র্যান্ডের তথ্যই ছড়িয়ে দেয় না—এর
            মাধ্যমে সমাজে নতুন উদ্যম, নতুন ভাবনা এবং উদ্ভাবনী উদ্যোগের প্রতি
            আস্থা তৈরি হয়। যার ফলে পণ্য, সেবা অথবা উদ্যোগ সহজেই পৌঁছে যায় লক্ষ্য
            পাঠক ও ভবিষ্যৎ বিনিয়োগকারীদের দোরগোড়ায়।
          </p>
        </div>

        {/* Button */}
        <button
          onClick={downloadPdf}
          className={`hidden md:flex items-center justify-center gap-3 text-white font-medium text-[20px] leading-[20px] bg-[${theme.colors.primary}] py-6 px-6 rounded-lg w-fit mx-auto`}
          style={{ marginTop: 40, marginBottom: 20 }}
        >
          দিকনির্দেশনা ডাউনলোড করুন
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-big-down-dash-icon lucide-arrow-big-down-dash"
          >
            <path d="M15 5H9" />
            <path d="M15 9v3h4l-7 7-7-7h4V9z" />
          </svg>
        </button>

        {/* Footer */}
        <div className="flex-col justify-start items-start space-y-4 pb-4">
          <h2 className="text-black font-bold mb-4">
            বিজনেসপ্রেস জানতে যোগাযোগ করুন
          </h2>
          <p className="text-black underline flex flex-row items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-smartphone-icon lucide-smartphone"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
            +880 1717-071576
          </p>
          <button
            className="text-black underline flex flex-row items-center gap-3"
            onClick={() => openLink("mailto:entrepreneur@gmail.com")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-mail-icon lucide-mail"
            >
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            entrepreneur@gmail.com
          </button>

          {/* Button */}
          <button
            className={`bg-[${theme.colors.primary}] py-6 px-6 rounded-lg w-fit mx-auto block md:hidden`}
            onClick={downloadPdf}
            style={{ marginTop: 40, marginBottom: 20 }}
          >
            <p className="text-white font-medium text-[20px] leading-[20px] gap-3 items-center flex">
              দিকনির্দেশনা ডাউনলোড করুন{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-big-down-dash-icon lucide-arrow-big-down-dash"
              >
                <path d="M15 5H9" />
                <path d="M15 9v3h4l-7 7-7-7h4V9z" />
              </svg>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
