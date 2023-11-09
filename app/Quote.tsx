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
        <div className="relative">
          <div className="flex justify-center">
            <Image src={pizza} alt="" unoptimized />
          </div>
          <Image
            src={svg1}
            alt=""
            className="absolute -top-16 left-[20rem]"
            unoptimized
          />
          <Image
            src={svg2}
            alt=""
            className="absolute -bottom-20 right-[20rem]"
            unoptimized
          />
        </div>
        <div className="py-4 bg-white text-gimme w-1/4   flex flex-col gap-4 mt-16 rounded-[2rem]">
          <div className="flex justify-center">
            <Image
              src={maniaci}
              alt=""
              className="rounded-full w-16"
              unoptimized
            />
          </div>
          <h3
            className={`${unbounded.className} text-center font-bold text-3xl`}
          >
            Gaspare Maniaci
          </h3>
          <h4 className="text-center text-xl">CEO</h4>
          <div className="flex justify-center px-8 font-medium">
            <p>
              Gimme allowed us to save up to 900 CHF monthly! They are much
              cheaper and more flexible version of Eat. They have been critical
              to the growth of our digital business and we look forward
              expanding our partnership in the years ahead.
            </p>
          </div>
          <div className="border-t">
            <Image
              src={chezGaspi}
              alt=""
              className="pt-4 mx-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="text-white flex justify-around items-center py-8">
        <div className="w-1/3">
          <h2 className={`${unbounded.className} font-bold text-3xl`}>
            Save on fees with our restaurant solution without high app
            commissions like Eat.
          </h2>
        </div>
        <div className="w-1/3">
          <h3 className="text-xl">
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
