import svgOne from "@/public/svg-assets/grid/1.svg";
import svgTwo from "@/public/svg-assets/grid/2.svg";
import svgThree from "@/public/svg-assets/grid/3.svg";
import svgFour from "@/public/svg-assets/grid/4.svg";
import svgFive from "@/public/svg-assets/grid/5.svg";
import svgSix from "@/public/svg-assets/grid/6.svg";
import gridSvg from "@/public/svg-assets/grid-svg.svg";

import { Unbounded } from "next/font/google";
import Image from "next/image";
const unbounded = Unbounded({ subsets: ["latin"] });

const gridItems = [
  {
    id: 1,
    title: "Order and Pay Directly in Restaurant",
    description:
      "Maximize ordering potential and make it easy for your customers to get exactly what they want.",
    svg: svgOne,
  },
  {
    id: 2,
    title: "Delivery",
    description:
      "By integrating with your website, you can serve your customers through your own delivery platform, saving on third-party fees and retaining control over your quality.",
    svg: svgTwo,
  },
  {
    id: 3,
    title: "Takeaway",
    description:
      "Customize your restaurant's ordering page to your preferences, allow customers to pre-order for their preferred pickup time and make payments.",
    svg: svgThree,
  },
];

const gridItemsTwo = [
  {
    id: 1,
    title: "Loyalty Programs",
    description:
      "A loyalty program that generates 3x more across its lifetime, turning guests into brand loyalists.",
    svg: svgFour,
  },
  {
    id: 2,
    title: "Custom Website and Instagram page",
    description:
      "Get your own restaurant and instagram page completely tailored for your needs.",
    svg: svgFive,
  },
  {
    id: 3,
    title: "Digital menus",
    description:
      "Make it easy for your guests to quickly scan the QR code and instantly view our diverse menu for additional ordering inspiration",
    svg: svgSix,
  },
];

export default function Grid() {
  return (
    <div className="text-white py-24 md:px-0">
      <div className="text-center pb-0 md:pb-32">
        <div className="flex justify-center relative">
          <h2
            className={`${unbounded.className} font-bold text-2xl lg:text-4xl leading-[1.55] md:leading-relaxed lg:w-2/3 xl:w-1/2`}
            id="features"
          >
            Get Gimme to Get All Solutions For Your Digital Growth
          </h2>
        </div>
        <div className="flex justify-center pt-4">
          <h3 className="lg:w-1/3 xl:w-1/4">
            Our goal is to simplify the daily life of restaurant owners and
            increase profits.
          </h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 pt-8 md:pt-0">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="border border-[#5F479B] rounded-3xl pt-8 flex flex-col justify-between basis-1/3"
          >
            <div className="px-8">
              <h2 className={`${unbounded.className} font-bold text-2xl`}>
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
            <Image
              src={item.svg}
              className="pt-16 px-2 mx-auto xl:h-[20rem]"
              alt="SVG asset"
              unoptimized
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 pt-8">
        {gridItemsTwo.map((item) => (
          <div
            key={item.id}
            className="border border-[#5F479B] rounded-3xl pt-8 flex flex-col justify-between basis-1/3"
          >
            <div className="px-8">
              <h2 className={`${unbounded.className} font-bold text-2xl`}>
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
            <Image
              src={item.svg}
              className="pt-16 px-2 mx-auto xl:h-[20rem]"
              alt="SVG asset"
              unoptimized
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-16 relative">
        <button
          className={`${unbounded.className} text-bold w-full lg:w-auto lg:px-28 py-4 bg-white  text-gimme rounded-full font-semibold`}
        >
          Get Started
        </button>
        <Image
          src={gridSvg}
          className="hidden md:block absolute right-0 left-[30rem] -bottom-16 m-auto"
          alt=""
          unoptimized
        />
      </div>
    </div>
  );
}
