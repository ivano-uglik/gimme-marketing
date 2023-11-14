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
// import FAQ from "./sections/FAQ";
import FAQ from "./FAQ";
import OnlineDelivery from "./OnlineDelivery";
import HeroSection from "./Hero";
import Quote from "./Quote";
import Grid from "./Grid";
import HospitalityBusinesses from "./HospitalityBusinesses";
import Video from "./Video";
import Pricing from "./Pricing";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="container mx-auto px-4 lg:px-0">
        <HeroSection />
        <Quote />
        <SavingsCalculator />
        <OnlineDelivery />
        <Grid />
        <HospitalityBusinesses />
        <Video />
        <Pricing />
        <FAQ />
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
      </section>
    </div>
  );
}
