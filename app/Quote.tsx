import Image from "next/image";
import svg1 from "@/public/svg-assets/section-2-1.svg";
import svg2 from "@/public/svg-assets/section-2-2.svg";
import pizza from "@/public/pizza-background.png";
import maniaci from "@/public/maniaci-gaspare.png";
import { Unbounded } from "next/font/google";
import chezGaspi from "@/public/chez-gaspi.svg";
const unbounded = Unbounded({ subsets: ["latin"] });
export default function Quote() {
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src={pizza}
                className="w-[100%] hidden md:block"
                alt=""
                unoptimized
              />
              <Image
                src={svg1}
                alt=""
                className="absolute -top-8 -left-20 w-[15%] hidden md:block"
                unoptimized
              />
              <Image
                src={svg2}
                alt=""
                className="absolute -bottom-4 -right-4 md:-bottom-20 md:-right-20 w-[13%] hidden md:block"
                unoptimized
              />
              <div className="py-4 bg-white text-gimme mx-8 md:w-[50%] md:max-h-[80%] flex flex-col gap-4 rounded-[8%] md:absolute top-[10%] left-[25%]">
                <div className="flex justify-center">
                  <Image
                    src={maniaci}
                    alt=""
                    className="rounded-full w-[12%]"
                    unoptimized
                  />
                </div>
                <h3
                  className={`${unbounded.className} text-center font-bold md:text-[180%]`}
                >
                  Gaspare Maniaci
                </h3>
                <h4 className="text-center text-xl">CEO</h4>
                <div className="flex justify-center px-8 font-medium">
                  <p className="text-xs md:text-base">
                    Gimme allowed us to save up to 900 CHF monthly! They are
                    much cheaper and more flexible version of Eat. They have
                    been critical to the growth of our digital business and we
                    look forward expanding our partnership in the years ahead.
                  </p>
                </div>
                <div className="border-t">
                  <Image
                    src={chezGaspi}
                    alt=""
                    className="pt-4 mx-auto w-[30%]"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col md:flex-row justify-around items-center pt-16 md:pt-32 px-2 md:px-0 gap-4 md:gap-0">
        <div className="text-center md:text-left md:w-1/3">
          <h2
            className={`${unbounded.className} font-bold text-xl md:text-3xl`}
          >
            Save on fees with our restaurant solution without high app
            commissions like Eat.
          </h2>
        </div>
        <div className="md:w-1/3">
          <h3 className="md:text-xl text-center">
            Achieve top Google search rankings as we optimize your
            <span className="mx-2 px-2 rounded-lg bg-white text-gimme whitespace-nowrap">
              SEO restaurant page
            </span>{" "}
            making it easier to attract more views, guests, and profits.
          </h3>
        </div>
      </div>
    </div>
  );
}
