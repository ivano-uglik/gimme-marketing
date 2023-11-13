import { Unbounded } from "next/font/google";
import Image from "next/image";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Pricing() {
  return (
    <div className="text-white">
      <div>
        <h2
          className={`${unbounded.className} text-bold text-4xl text-center font-bold`}
        >
          Pricing
        </h2>
        <div className="flex justify-center py-4">
          <p className="md:w-1/3 text-center text-lg">
            Learn In 60 seconds you can set up your digital presence for
            restaurant online. For FREE!
          </p>
        </div>
      </div>
      <div className="bg-white w-[55vw] h-[55vh] rounded-3xl my-16 mx-auto"></div>
    </div>
  );
}
