import React from "react";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/constants/theme";
import { Phone, Mail, ChevronRight } from "lucide-react";
import footerImage from "@/assets/images/entrepreur-white-logo.png";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";

const Footer = () => {
  const links = {
    news: [
      "উদ্যোক্তা",
      "স্টার্টআপ",
      "পডকাস্ট",
      "খেলাধুলা",
      "মতামত",
      "অনলাইন জরিপ",
    ],
    categories: [
      "এডস  এর জন্য যোগাযোগ করুন",
      "ক্যারিয়ার",
      "ভেরিফাইড রিপোর্টার",
      "জীবনের গল্প শেয়ার করুন",
    ],
    about: [
      "এডস  এর জন্য যোগাযোগ করুন",
      "ক্যারিয়ার",
      "ভেরিফাইড রিপোর্টার",
      "জীবনের গল্প শেয়ার করুন",
    ],
  };

  return (
    <footer style={{ backgroundColor: theme.colors.primary }}>
      <ScreenContainer className="px-3 py-8">
        <div className="flex flex-col md:flex-row flex-wrap justify-between">
          {/* First Column - Logo and Info */}
          <div className="w-full md:w-[30%] p-4">
            <div className="space-y-4">
              <Link href="/" className="block overflow-hidden">
                <Image
                  src={footerImage}
                  alt="Entrepreneur News Logo"
                  width={305}
                  height={50}
                  className="object-contain"
                />
              </Link>

              <p className="text-sm text-white">
                এন্ট্রেপ্রেনিউর নিউজ শুধুমাত্র একটি অনলাইন নিউজ পোর্টাল নয় আমরা
                একটি পরিবার এবং বিশ্বজুড়ে আরও ভালো খবর দেওয়ার জন্য একসাথে কাজ
                করি
              </p>
              <p className="text-white text-sm">ঢাকা, বাংলাদেশ</p>
              <div className="space-y-2">
                <div className="flex flex-row items-center space-x-2">
                  <Phone size={16} className="text-white" />
                  <span className="text-white text-sm">+880 1234 567890</span>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <Mail size={16} className="text-white" />
                  <span className="text-white text-sm">info@example.com</span>
                </div>
              </div>
            </div>
          </div>

          {Object.entries(links).map(([key, items]) => (
            <div key={key} className="w-full md:w-[20%] p-4">
              <div className="space-y-2">
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-lg font-thin text-white">
                    {key === "news" && "আমাদের লিঙ্ক"}
                    {key === "categories" && "গুরুত্বপূর্ণ  লিঙ্ক"}
                    {key === "about" && "অন্যান্য লিঙ্ক"}
                  </h3>
                </div>
                <div className="space-y-2">
                  {items.map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="flex flex-row items-center justify-start gap-2 hover:opacity-80 transition-opacity"
                    >
                      <ChevronRight size={16} className="text-white" />
                      <span className="text-white text-sm opacity-80">
                        {item}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScreenContainer>
      <div className="w-full py-4 bg-black flex items-center justify-center">
        <p className="text-center text-white text-sm">
          স্বত্ব © {new Date().getFullYear()}
          এন্ট্রেপ্রেনিউর নিউজ | সম্পাদক ও প্রকাশক: জাহিদুর রহমান
        </p>
      </div>
    </footer>
  );
};

export default Footer;
