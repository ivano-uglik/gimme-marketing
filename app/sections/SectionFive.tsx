"use client";

import { useState } from "react";
import Image from "next/image";
import screenshotPayroll from "@/public/primary-2.webp";
import screenshotExpenses from "@/public/primary-3.webp";
import screenshotVatReturns from "@/public/primary-1.webp";
import screenshotReporting from "@/public/primary-3.webp";

export default function SectionFive() {
  const [active, setActive] = useState(1);

  let imgSrc =
    active == 1
      ? screenshotPayroll
      : active == 2
      ? screenshotExpenses
      : active == 3
      ? screenshotVatReturns
      : active == 4
      ? screenshotReporting
      : screenshotVatReturns;
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col gap-4">
        <div className="text-center flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold w-1/2">
            Tailored for Restaurants, Bars, Hotels, retail stores and much more
          </h2>
          <p className="text-xl w-1/2">
            Streamline operations: manage your digital menu, take-away,
            delivery, and access clear daily and monthly financial statements
            from one place
          </p>
        </div>
        <div className="flex justify-center">
          <div className="border border-indigo-800 rounded-full p-1">
            <ul className="flex justify-center items-center">
              <li>
                <button
                  className={
                    active == 1
                      ? "rounded-full px-4 py-2 bg-indigo-800 text-white"
                      : "rounded-full px-4 py-2"
                  }
                  onClick={(e) => {
                    setActive(1);
                  }}
                >
                  Button
                </button>
              </li>
              <li>
                <button
                  className={
                    active == 2
                      ? "rounded-full px-4 py-2 bg-indigo-800 text-white"
                      : "rounded-full px-4 py-2"
                  }
                  onClick={(e) => {
                    setActive(2);
                  }}
                >
                  Button
                </button>
              </li>
              <li>
                <button
                  className={
                    active == 3
                      ? "rounded-full px-4 py-2 bg-indigo-800 text-white"
                      : "rounded-full px-4 py-2"
                  }
                  onClick={(e) => {
                    setActive(3);
                  }}
                >
                  Button
                </button>
              </li>
              <li>
                <button
                  className={
                    active == 4
                      ? "rounded-full px-4 py-2 bg-indigo-800 text-white"
                      : "rounded-full px-4 py-2"
                  }
                  onClick={(e) => {
                    setActive(4);
                  }}
                >
                  Button
                </button>
              </li>
              <li>
                <button
                  className={
                    active == 5
                      ? "rounded-full px-4 py-2 bg-indigo-800 text-white"
                      : "rounded-full px-4 py-2"
                  }
                  onClick={(e) => {
                    setActive(5);
                  }}
                >
                  Button
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={imgSrc} alt="" className="w-[33vw]" unoptimized />
        </div>
      </div>
    </div>
  );
}
