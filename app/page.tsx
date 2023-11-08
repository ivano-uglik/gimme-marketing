import { Hero } from "./Hero";
import Navbar from "./Navbar";
import { PrimaryFeatures } from "./PrimaryFeatures";
import SavingsCalculator from "./SavingsCalculator";
import SectionSix from "./SectionSix";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SectionFive from "./SectionFive";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import FAQ from "./FAQ";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionTwo />
      <SavingsCalculator />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <FAQ />
    </div>
  );
}
