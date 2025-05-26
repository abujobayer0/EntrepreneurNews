import { ReactNode } from "react";
import TitleBarMarquee from "./_components/module/home/TitleBarMarquee";
import Navbar from "./_components/ui/navbar/Navbar";
import NavbarLinks from "./_components/ui/navbar/NavBarLinks";
import Footer from "./_components/ui/footer/Footer";
import { theme } from "@/constants/theme";

interface WithCommonLayoutProps {
  children: ReactNode;
}

export default function WithCommonLayout({ children }: WithCommonLayoutProps) {
  return (
    <section className="flex flex-col min-h-screen bg-gray-50">
      {/* Title Bar */}
      <div className="z-40" style={{ backgroundColor: theme.colors.primary }}>
        <TitleBarMarquee />
      </div>

      {/* Top Navbar */}
      <div className="z-40">
        <Navbar />
      </div>

      {/* Secondary Navbar (sticky for md+) */}
      <div className="sticky top-0 z-50 hidden bg-white md:block">
        <NavbarLinks />
      </div>

      {/* Main Content Area */}
      <main className="w-full flex-1 pt-[16px] md:pt-0 pb-[16px]">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </section>
  );
}
