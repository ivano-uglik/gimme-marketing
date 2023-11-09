import { Inter } from "next/font/google";

import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function HeroSection() {
  return (
    <div className="py-24 text-white flex flex-col items-center gap-8 w-full">
      <div className="flex justify-center">
        <h1
          className={`${unbounded.className} uppercase font-black text-center text-5xl p-4 md:p-0 md:w-2/3`}
        >
          Gimme is a Commission-Free Order & Pay Solution
        </h1>
      </div>
      <div className="flex justify-center">
        <h2 className="text-center leading-relaxed font-[400]">
          Use Gimme to better serve, connect with and reward your guests.{" "}
          <div className="flex justify-center">
            <h2 className="w-2/3">
              Get your unique mobile app and web ordering app for the
              hospitality industry.
            </h2>
          </div>
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <button
          className={` ${unbounded.className} text-gimme bg-white rounded-full px-8 py-4 font-[600]`}
        >
          Sign Up For Free
        </button>
        <span className="text-sm">*No credit card required</span>
      </div>
    </div>
  );
}
