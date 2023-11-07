import { Hero } from "./Hero";
import Navbar from "./Navbar";
import { PrimaryFeatures } from "./PrimaryFeatures";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="p-32 text-center">{" < section 2 > "}</div>
      <PrimaryFeatures />
    </>
  );
}
