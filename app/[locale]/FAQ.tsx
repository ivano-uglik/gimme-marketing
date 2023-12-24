"use client";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });
import { useState } from "react";
export default function FAQ({
  title,
  subline,
  FAQ1Title,
  FAQ1Subline,
  FAQ2Title,
  FAQ2Subline,
  FAQ3Title,
  FAQ3Subline,
  FAQ4Title,
  FAQ4Subline,
  FAQ5Title,
  FAQ5Subline,
  FAQ6Title,
  FAQ6Subline,
  FAQ7Title,
  FAQ7Subline,
  FAQ8Title,
  FAQ8Subline,
  FAQ9Title,
  FAQ9Subline,
  FAQ10Title,
  FAQ10Subline,
  FAQ11Title,
  FAQ11Subline,
}: any) {
  const [toggled, setToggled]: any = useState({});

  const questions = [
    {
      title: FAQ1Title,
      answer: FAQ1Subline,
    },
    {
      title: FAQ2Title,
      answer: FAQ2Subline,
    },
    {
      title: FAQ3Title,
      answer: FAQ3Subline,
    },
    {
      title: FAQ4Title,
      answer: FAQ4Subline,
    },
    {
      title: FAQ5Title,
      answer: FAQ5Subline,
    },
    {
      title: FAQ6Title,
      answer: FAQ6Subline,
    },
    {
      title: FAQ7Title,
      answer: FAQ7Subline,
    },
    {
      title: FAQ8Title,
      answer: FAQ8Subline,
    },
    {
      title: FAQ9Title,
      answer: FAQ9Subline,
    },
    {
      title: FAQ10Title,
      answer: FAQ10Subline,
    },
    {
      title: FAQ11Title,
      answer: FAQ11Subline,
    },
  ];

  return (
    <div className="text-white">
      <div className="flex flex-col gap-4 lg:py-8">
        <h2
          className={`${unbounded.className} font-bold text-center text-4xl`}
          id="faq"
        >
          {title}
        </h2>
        <div className="flex justify-center">
          <p className="text-center lg:w-1/2 ">{subline}</p>
        </div>
      </div>
      <div className="py-8 flex justify-center">
        <div className="flex justify-center flex-col md:flex-row gap-16 w-full">
          <div className="flex flex-col w-full">
            {questions.map((question, index) => (
              <div
                className="border my-4 w-full rounded-2xl cursor-pointer"
                key={index}
                onClick={() =>
                  setToggled((prevToggled: any) => ({
                    ...prevToggled,
                    [index]: !prevToggled[index],
                  }))
                }
              >
                <button
                  className={`w-full flex items-center gap-4 ${
                    toggled[index] ? "pl-4 pt-4" : "p-4"
                  }`}
                >
                  <span className="text-3xl">{toggled[index] ? "-" : "+"}</span>
                  <h2 className="md:text-xl text-left">{question.title}</h2>
                </button>
                <p
                  className={toggled[index] ? "pl-8 pb-4 pt-2 pr-4" : "hidden"}
                >
                  {question.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
