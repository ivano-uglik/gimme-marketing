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
  const l = useTranslations("RestaurantLoyaltySoftware");
  const faq = useTranslations("FAQ");
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
        LoyaltyTitle={l("title")}
        LoyaltySubline={l("subline")}
        LoyaltyButton={l("button")}
      />
      <Video />
      <Pricing />
      <FAQ
        title={faq("title")}
        subline={faq("subline")}
        FAQ1Title={faq("FAQ1Title")}
        FAQ1Subline={faq("FAQ1Subline")}
        FAQ2Title={faq("FAQ2Title")}
        FAQ2Subline={faq("FAQ2Subline")}
        FAQ3Title={faq("FAQ3Title")}
        FAQ3Subline={faq("FAQ3Subline")}
        FAQ4Title={faq("FAQ4Title")}
        FAQ4Subline={faq("FAQ4Subline")}
        FAQ5Title={faq("FAQ5Title")}
        FAQ5Subline={faq("FAQ5Subline")}
        FAQ6Title={faq("FAQ6Title")}
        FAQ6Subline={faq("FAQ6Subline")}
        FAQ7Title={faq("FAQ7Title")}
        FAQ7Subline={faq("FAQ7Subline")}
        FAQ8Title={faq("FAQ8Title")}
        FAQ8Subline={faq("FAQ8Subline")}
        FAQ9Title={faq("FAQ9Title")}
        FAQ9Subline={faq("FAQ9Subline")}
        FAQ10Title={faq("FAQ10Title")}
        FAQ10Subline={faq("FAQ10Subline")}
        FAQ11Title={faq("FAQ11Title")}
        FAQ11Subline={faq("FAQ11Subline")}
      />
    </>
  );
}
