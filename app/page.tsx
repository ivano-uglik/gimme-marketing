import { Hero } from "./sections/Hero";
import Navbar from "./Navbar";
import SavingsCalculator from "./SavingsCalculator";
import SectionSix from "./sections/SectionSix";
import SectionFour from "./sections/SectionFour";
import SectionThree from "./sections/SectionThree";
import SectionTwo from "./sections/SectionTwo";
import SectionFive from "./sections/SectionFive";
import SectionSeven from "./sections/SectionSeven";
import SectionEight from "./sections/SectionEight";
import FAQ from "./sections/FAQ";
import OnlineDelivery from "./OnlineDelivery";
import HeroSection from "./Hero";
import Quote from "./Quote";
import Grid from "./Grid";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Quote />
      <SavingsCalculator />
      <OnlineDelivery />
      <Grid />
      {/* <Hero /> */}
      {/* <SectionTwo /> */}

      {/* <Hero />
      <SectionTwo />
      <SavingsCalculator />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <FAQ /> */}
    </>
  );
}
