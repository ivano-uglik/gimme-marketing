"use client";

import { Unbounded } from "next/font/google";
import { useState } from "react";
import money from "@/public/svg-assets/money.svg";
import svg from "@/public/svg-assets/savings-1.svg";
import Image from "next/image";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function SavingsCalculator() {
  const [value, setValue] = useState("3000");

  return (
    <div className="text-white py-16">
      <div className="text-center flex flex-col items-center gap-1 pb-16">
        <div className="flex justify-center">
          <h2
            className={`${unbounded.className} text-4xl font-bold md:w-2/3 leading-relaxed`}
          >
            Calculate how much money you could save
          </h2>
        </div>
        <h3 className="text-lg">
          {"Don't take our word on it, let the numbers speak for themselves."}
        </h3>
        <h4 className="text-sm opacity-75 font-light">
          Note: Using Gimme you save at least 30% of the commission fee you
          currently pay to Eat and similar big apps.
        </h4>
      </div>
      <div className="flex justify-center mx-8 md:mx-0">
        <div className="calculator-gradient rounded-3xl w-full md:w-3/5 py-8 relative border border-blue-500">
          <div className="w-28 md:w-64 absolute -top-10 -left-10 md:-top-16 md:-left-16 ">
            <Image src={svg} alt="" unoptimized />
          </div>
          <div className="px-8 md:px-16 pb-8">
            <div>
              <h3
                className={`${unbounded.className} font-bold text-lg md:text-3xl`}
              >
                Delivery service Savings Calculator
              </h3>
              <h4 className="text-base md:text-lg">
                How much money are you currently making by having a delivery
                service with a commission fee?
              </h4>
            </div>
            <div
              className={`${unbounded.className} w-full py-4 px-4 md:py-8 md:px-8 rounded-3xl font-bold md:text-3xl mt-8 mb-2 text-gimme flex items-center justify-between bg-white`}
            >
              <div>
                <input
                  type="number"
                  className="w-full outline-none"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </div>
              <span>CHF</span>
            </div>
            <span className="text-xs opacity-50">
              NOTE: Data is not saved anywhere and only you can see it!
            </span>
          </div>
          <div className="pt-8 px-8 md:px-16 border-t border-t-blue-500 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            <div className="flex flex-col gap-2">
              <h3 className="text-center md:text-start md:text-xl">
                Then we would save you at least
              </h3>
              <h2
                className={`${unbounded.className} text-4xl font-bold text-center md:text-start`}
              >
                {Number(value) * 0.3} CHF a month
              </h2>
            </div>
            <div className="w-1/2 md:w-1/4">
              <Image src={money} alt="" unoptimized />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}