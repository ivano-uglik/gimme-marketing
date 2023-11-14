import Image from "next/image";
import svg1 from "@/public/svg-assets/section-2-1.svg";
import svg2 from "@/public/svg-assets/section-2-2.svg";
import maniaci from "@/public/maniaci-gaspare.png";
import { Unbounded } from "next/font/google";
import chezGaspi from "@/public/chez-gaspi.svg";
const unbounded = Unbounded({ subsets: ["latin"] });
export default function Quote() {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <div className="w-full lg:h-[81vh] lg:pizza">
          <Image
            src={svg1}
            alt="svg"
            className="absolute -top-8 -left-20 w-[15%] hidden lg:block"
            unoptimized
          />
          <Image
            src={svg2}
            alt="svg"
            className="absolute -bottom-4 -right-4 md:-bottom-20 md:-right-20 w-[13%] hidden lg:block"
            unoptimized
          />
          <div className="lg:grid place-items-center lg:h-full py-8 px-8 lg:px-0">
            <div className="bg-white text-gimme flex flex-col py-8 lg:w-1/3 gap-2 rounded-[8%]">
              <div className="flex justify-center">
                <Image
                  src={maniaci}
                  alt=""
                  className="rounded-full w-16"
                  unoptimized
                />
              </div>
              <h3
                className={`${unbounded.className} text-center font-bold md:text-3xl`}
                id="reviews"
              >
                Gaspare Maniaci
              </h3>
              <h4 className="text-center text-xl">CEO</h4>
              <div className="flex justify-center px-8 font-medium">
                <p className="md:text-base">
                  Gimme allowed us to save up to 900 CHF monthly! They are much
                  cheaper and more flexible version of Eat. They have been
                  critical to the growth of our digital business and we look
                  forward expanding our partnership in the years ahead.
                </p>
              </div>
              <div className="border-t">
                <Image
                  src={chezGaspi}
                  alt=""
                  className="mx-auto pt-8 w-[30%]"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col md:flex-row justify-between items-center lg:pt-20 md:px-0 gap-4 md:gap-0">
        <div className="text-left md:w-[45%]">
          <h2
            className={`${unbounded.className} font-bold text-xl md:text-3xl`}
          >
            Save on fees with our restaurant solution without high app
            commissions like Eat.
          </h2>
        </div>
        <div className="md:w-[40%]">
          <h3 className="md:text-2xl">
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
