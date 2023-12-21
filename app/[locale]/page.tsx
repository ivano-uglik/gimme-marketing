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
import { useTranslations } from "next-intl";
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
  const t = useTranslations("Restaurants");
  const b = useTranslations("BrandGuestExperience");

  return (
    <>
      <HeroSection />
      <Quote />
      <SavingsCalculator />
      <OnlineDelivery />
      <Grid />
      <HospitalityBusinesses
        title={t("title")}
        subline={t("subline")}
        restaurant={t("restaurants")}
        bars={t("bars")}
        hotels={t("hotels")}
        retailStores={t("retailStores")}
        brandTitle={b("title")}
        brandSubline={b("subline")}
        brandButton={b("button")}
      />
      <Video />
      <Pricing />
      <FAQ />
    </>
  );
}
