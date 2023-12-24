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
export default function HospitalityBusinesses({
  title,
  subline,
  restaurant,
  bars,
  hotels,
  retailStores,
  brandTitle,
  brandSubline,
  brandButton,
  LoyaltyTitle,
  LoyaltySubline,
  LoyaltyButton,
}: any) {
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
    <div className="text-white overflow-x-hidden">
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
            {brandTitle}
          </h2>
          <h3 className="pt-4">{brandSubline}</h3>
          <button
            className={`${unbounded.className} px-4 py-2 bg-white rounded-full text-gimme font-semibold mt-4 text-xs md:text-base hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out`}
          >
            {brandButton}
          </button>
        </div>
      </div>
      <div className="md:py-8">
        <div>
          <div className="flex justify-center">
            <h2
              className={`${unbounded.className} font-bold text-3xl md:text-4xl text-center md:w-2/3 leading-relaxed px-2 md:px-0`}
            >
              {title}
            </h2>
          </div>
          <div className="flex justify-center">
            <h3 className="leading-relaxed px-2 md:px-0 md:w-1/2 text-center pt-4 lg:text-xl">
              {subline}
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
              {restaurant}
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
              {bars}
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
              {hotels}
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
              {retailStores}
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
            {LoyaltyTitle}
          </h2>
          <h3 className="pt-4">{LoyaltySubline}</h3>
          <button
            className={`${unbounded.className} px-4 py-2 bg-white rounded-full text-gimme font-semibold mt-4 text-xs md:text-base hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out`}
          >
            {LoyaltyButton}
          </button>
        </div>
      </div>
    </div>
  );
}
