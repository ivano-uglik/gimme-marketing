import SavingsCalculator from "./SavingsCalculator";
import FAQ from "./FAQ";
import OnlineDelivery from "./OnlineDelivery";
import HeroSection from "./Hero";
import Quote from "./Quote";
import Grid from "./Grid";
import HospitalityBusinesses from "./HospitalityBusinesses";
import Video from "./Video";
import Pricing from "./Pricing";
import Lenis from "@studio-freight/lenis";
// import { useEffect } from "react";
export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // });

  return (
    <>
      <HeroSection />
      <Quote />
      <SavingsCalculator />
      <OnlineDelivery />
      <Grid />
      <HospitalityBusinesses />
      <Video />
      <Pricing />
      <FAQ />
    </>
  );
}
