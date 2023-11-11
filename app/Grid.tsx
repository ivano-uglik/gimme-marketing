import { Unbounded } from "next/font/google";
import Image from "next/image";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Grid() {
  return (
    <div className="text-white py-24 px-4 md:px-0">
      <div className="text-center">
        <div className="flex justify-center relative">
          <h2
            className={`${unbounded.className} font-bold text-4xl leading-[1.55] md:leading-relaxed md:w-1/2`}
          >
            Get Gimme to Get All Solutions For Your Digital Growth
          </h2>
        </div>
        <div className="flex justify-center pt-4">
          <h3 className="md:w-1/2">
            Our goal is to simplify the daily life of restaurant owners and
            increase profits.
          </h3>
        </div>
      </div>
    </div>
  );
}
