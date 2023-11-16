"use client";

import Image from "next/image";
import brandGuestExperience from "@/public/brand-guest-experience.png";
import { Unbounded } from "next/font/google";
import emoji from "@/public/svg-assets/emoji.svg";
import { useState } from "react";
import restaurants from "@/public/select/restaurants.png";
import template2 from "@/public/primary-3.webp";
import template3 from "@/public/primary-2.webp";
import template4 from "@/public/primary-1.webp";
import select from "@/public/svg-assets/select.svg";
import loyaltyProgram from "@/public/loyalty-programs.png";
import confetti from "@/public/svg-assets/confetti.svg";
import inBetween from "@/public/svg-assets/select2.svg";
const unbounded = Unbounded({ subsets: ["latin"] });
export default function HospitalityBusinesses() {
  const [active, setActive] = useState(1);

  const image =
    active === 1
      ? restaurants
      : active === 2
      ? template2
      : active === 3
      ? template3
      : template4;
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row justify-center gap-24 py-32">
        <div className="relative basis-1/2">
          <Image
            src={brandGuestExperience}
            className="w-full"
            alt="Tablet screen displaying Gimme App"
            unoptimized
          />
          <div>
            <Image
              src={emoji}
              className="absolute -bottom-24 md:bottom-2 lg:-bottom-24 -right-12 w-1/5 md:w-[30%]"
              alt="money emoji svg"
              unoptimized
            />
          </div>
        </div>
        <div className="basis-1/2">
          <h2 className={`${unbounded.className} text-3xl font-bold `}>
            A Brand Guest Experience That Converts
          </h2>
          <h3 className="pt-4">
            {
              "Customization is key, and at Gimme, we understand the personal touch. Create an app that resonates with your brand's voice, colors, and imagery, making every tap, swipe, and scroll uniquely yours"
            }
          </h3>
          <button
            className={`${unbounded.className} px-4 py-2 bg-white rounded-full text-gimme font-semibold mt-4 text-xs md:text-base hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out`}
          >
            Customize Your Online Restaurant Now
          </button>
        </div>
      </div>
      <div className="md:py-8">
        <div>
          <div className="flex justify-center">
            <h2
              className={`${unbounded.className} font-bold text-3xl md:text-4xl text-center md:w-2/3 leading-relaxed px-2 md:px-0`}
            >
              Tailored for Restaurants, Bars, Hotels, retail stores and much
              more
            </h2>
          </div>
          <div className="flex justify-center">
            <h3 className="leading-relaxed px-2 md:px-0 md:w-1/2 text-center pt-4 lg:text-xl">
              Streamline operations: manage your digital menu, take-away,
              delivery, and access clear daily and monthly financial statements
              from one place
            </h3>
          </div>
          <div className="flex justify-center gap-8 py-16 flex-wrap">
            <button
              className={`${
                unbounded.className
              } font-bold px-6 py-4 bg-white bg-opacity-10 rounded-full ${
                active === 1
                  ? "active"
                  : "hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out"
              }`}
              onClick={() => setActive(1)}
            >
              Restaurants
            </button>
            <button
              className={`${
                unbounded.className
              } font-bold px-6 py-4 bg-white bg-opacity-10 rounded-full ${
                active === 2
                  ? "active"
                  : "hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out"
              }`}
              onClick={() => setActive(2)}
            >
              Bars
            </button>
            <button
              className={`${
                unbounded.className
              } font-bold px-6 py-4 bg-white bg-opacity-10 rounded-full ${
                active === 3
                  ? "active"
                  : "hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out"
              }`}
              onClick={() => setActive(3)}
            >
              Hotels
            </button>
            <button
              className={`${
                unbounded.className
              } font-bold px-6 py-4 bg-white bg-opacity-10 rounded-full ${
                active === 4
                  ? "active"
                  : "hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out"
              }`}
              onClick={() => setActive(4)}
            >
              Retail Stores
            </button>
          </div>
        </div>
      </div>
      <div className="pb-32">
        <div className="relative">
          <Image
            src={image}
            className="mx-auto object-cover rounded-3xl w-full"
            alt=""
            unoptimized
          />
          <Image
            src={select}
            className="absolute left-0 -right-[30%] -bottom-12 mx-auto"
            alt=""
            unoptimized
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={inBetween} alt="" unoptimized />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-24 md:gap-16 py-32">
        <div className="relative basis-1/2">
          <Image
            src={loyaltyProgram}
            className="w-full border-y-8 rounded-t-3xl rounded-b-3xl"
            alt="Tablet screen displaying Gimme App"
            unoptimized
          />
          <div>
            <Image
              src={confetti}
              className="absolute -top-32 md:-top-16 lg:-top-32 left-0 right-0 mx-auto w-1/3 lg:w-[40%]"
              alt="money emoji svg"
              unoptimized
            />
          </div>
        </div>
        <div className="basis-1/2">
          <h2
            className={`${unbounded.className} text-3xl font-bold leading-relaxed`}
          >
            Enhance Guest Loyalty with Our Restaurant Loyalty Software
          </h2>
          <h3 className="pt-4">
            {
              "More than 75% of your future business comes from repeat guests. Gimme helps you discover more of them through a personalized loyalty program that cultivates a devoted following. Provide your guests with incentives to make frequent purchases."
            }
          </h3>
          <button
            className={`${unbounded.className} px-4 py-2 bg-white rounded-full text-gimme font-semibold mt-4 text-xs md:text-base hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out`}
          >
            Customize Your Online Restaurant Now
          </button>
        </div>
      </div>
    </div>
  );
}
