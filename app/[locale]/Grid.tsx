import svgOne from "@/public/svg-assets/grid/1.svg";
import svgTwo from "@/public/svg-assets/grid/2.svg";
import svgThree from "@/public/svg-assets/grid/3.svg";
import svgFour from "@/public/svg-assets/grid/4.svg";
import svgFive from "@/public/svg-assets/grid/5.svg";
import svgSix from "@/public/svg-assets/grid/6.svg";
import gridSvg from "@/public/svg-assets/grid-svg.svg";
import gradient from "@/public/gradient.svg";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import { useTranslations } from "next-intl";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Grid() {
  const t = useTranslations("Grid");

  const gridItems = [
    {
      id: 1,
      title: t("feature1Title"),
      description: t("feature1Description"),
      svg: svgOne,
    },
    {
      id: 2,
      title: t("feature5Title"),
      description: t("feature5Description"),
      svg: svgTwo,
    },
    {
      id: 3,
      title: t("feature4Title"),
      description: t("feature4Description"),
      svg: svgThree,
    },
  ];

  const gridItemsTwo = [
    {
      id: 1,
      title: t("feature6Title"),
      description: t("feature6Description"),
      svg: svgFour,
    },
    {
      id: 2,
      title: t("feature2Title"),
      description: t("feature2Description"),
      svg: svgFive,
    },
    {
      id: 3,
      title: t("feature3Title"),
      description: t("feature3Description"),
      svg: svgSix,
    },
  ];
  return (
    <div className="text-white py-24 md:px-0">
      <div className="text-center pb-0 md:pb-32">
        <div className="flex justify-center relative">
          <h2
            className={`${unbounded.className} font-bold text-2xl lg:text-4xl leading-[1.55] md:leading-relaxed lg:w-2/3 xl:w-1/2`}
            id="features"
          >
            {t("title")}
          </h2>
        </div>
        <div className="flex justify-center pt-4">
          <h3 className="lg:w-1/3 xl:w-1/4">{t("goal")}</h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 pt-8 md:pt-0">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="border border-[#5F479B] rounded-3xl pt-8 flex flex-col justify-between w-1/3"
          >
            <div className="px-8">
              <h2 className={`${unbounded.className} font-bold text-2xl `}>
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
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 pt-8 relative">
        {gridItemsTwo.map((item) => (
          <div
            key={item.id}
            className="border border-[#5F479B] rounded-3xl pt-8 flex flex-col justify-between w-1/3"
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
        <Image
          alt=""
          src={gradient}
          className="hidden md:block absolute w-full md:-bottom-20 lg:-bottom-12 xl:-bottom-8 h-[32vh]"
          unoptimized
        />
      </div>
      <div className="flex justify-center pt-16 relative">
        <button
          className={`${unbounded.className} text-bold w-full lg:w-auto lg:px-28 py-4 bg-white  text-gimme rounded-full font-semibold hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out`}
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
