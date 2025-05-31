import HeroSection from "./_components/module/home/heroSection/HeroSection";
import TrendingReporters from "./_components/module/home/heroSection/TrendingReporters";
import TodaysNews from "./_components/module/home/TodaysNews";
import HighlightSection from "./_components/module/home/HighlightSection";
import AddSection from "./_components/module/home/addSection/AddSection";
import BengaliPollInterface from "./_components/module/home/BengaliPollInterface/BengaliPollInterface ";
import SportsNewsSection from "./_components/module/home/sportsNewsSection/SportsNewsSection";
import Highlights from "./_components/module/home/highlights/Highlights";
import InternationalNews from "./_components/module/home/InternationalNews";
import NationalBusinessFinance from "./_components/module/home/NationalBusinessFinance";
import SpecialNews from "./_components/module/home/SpecialNews";
import DiplomacySection from "./_components/module/home/diplomacySection/DiplomacySection";

export default function Home() {
  return (
    <section className="flex flex-col gap-8 lg:gap-14">
      <HeroSection />
      <TrendingReporters />
      <TodaysNews />
      <HighlightSection />
      <AddSection />
      <BengaliPollInterface />
      <SportsNewsSection />
      <Highlights />
      <InternationalNews />
      <NationalBusinessFinance />
      <SpecialNews />
      <DiplomacySection />
    </section>
  );
}
