import { Hero } from "./Hero";
import Navbar from "./Navbar";
import { PrimaryFeatures } from "./PrimaryFeatures";
import SavingsCalculator from "./SavingsCalculator";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionTwo />
      <SavingsCalculator />
      <SectionThree />
    </div>
  );
}
