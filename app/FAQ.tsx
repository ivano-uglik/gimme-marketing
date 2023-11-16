"use client";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });
import { useState } from "react";
export default function FAQ() {
  const [toggled, setToggled]: any = useState({});

  const questions = [
    {
      title:
        "How can Gimme help with staff shortage due to seasonality in the mountains?",
      answer: `If peak times are overwhelming your staff, Yoordi, our integrated tool, can assist you in simplifying your daily operations. Yoordi efficiently serves and settles all tables for you simultaneously, providing relief during busy seasons.`,
    },
    {
      title: "Can you provide some insights into revenue growth with Gimme?",
      answer: `Yes, Gimme customers have seen an average of 42% monthly revenue growth, demonstrating the positive impact of our services on businesses.`,
    },
    {
      title: "What is order throttling, and how does it benefit businesses?",
      answer: `Order throttling is a crucial feature that prevents locations from experiencing a backlog of orders, ensuring a smooth customer service experience. It helps avoid issues like orders not being ready, long lines, and parking problems, providing a better overall experience for both the restaurant and its customers.`,
    },
    {
      title: "Is my business concept unique?",
      answer: `We would love to be a part of your vision and collaborate with you to create a custom solution for your unique business idea.`,
    },
    {
      title:
        "What is an online ordering system for restaurants, and why is it essential?",
      answer: `An online ordering system allows customers to place orders without being physically present at the restaurant. It's a vital tool as customers increasingly expect the convenience of ordering online, and not offering this option can result in losing potential customers to competitors.`,
    },
    {
      title: "What software do restaurants use to take orders?",
      answer: `Restaurants use Gimme to design beautiful ordering apps and websites, which seamlessly transmit online orders directly to their Point of Sale (POS) system.`,
    },
    {
      title: "What types of online ordering systems are available?",
      answer: `Gimme caters to small to medium-sized restaurants looking to initiate online orders. We aggregate orders from various touchpoints, including websites, apps, kiosks, and third-party marketplace apps.`,
    },
    {
      title: "Does Gimme offer delivery management?",
      answer: `Yes, Gimme provides comprehensive delivery management that allows you to set delivery rules, making it suitable for businesses that offer delivery services to their customers.`,
    },
    {
      title: "How can Loyalty Base Programs benefit my restaurant?",
      answer:
        "Loyalty Base Programs, such as 'Spend X to get Y,' enable you to create a custom loyalty program that encourages repeat business and grows your customer following. These programs can include bonuses like double points days or wallet drops to keep your guests engaged.",
    },
    {
      title: "Can I customize my ordering app with Gimme?",
      answer:
        "Absolutely. Ordering is personal, and so are our customizations. You can build an app that aligns with your brand's voice, colors, and imagery, ensuring a unique and consistent customer experience.",
    },
    {
      title:
        "What can I expect from the online ordering experience with Gimme?",
      answer:
        "Gimme offers a seamless online ordering experience designed to keep guests checking out with zero issues, ensuring a smooth and efficient process for both the business and the customer.",
    },
  ];

  return (
    <div className="text-white">
      <div className="flex flex-col gap-4 lg:py-8">
        <h2
          className={`${unbounded.className} font-bold text-center text-4xl`}
          id="faq"
        >
          Frequently Asked Questions
        </h2>
        <div className="flex justify-center">
          <p className="text-center lg:w-1/2 ">
            Learn how to set up your digital presence for your restaurant online
            for FREE in 60 seconds!
          </p>
        </div>
      </div>
      <div className="py-8 flex justify-center">
        <div className="flex justify-center flex-col md:flex-row gap-16 w-full">
          <div className="flex flex-col w-full">
            {questions.map((question, index) => (
              <div className="border my-4 w-full" key={index}>
                <button
                  className={`w-full flex items-center gap-4 ${
                    toggled[index] ? "pl-4 pt-4" : "p-4"
                  }`}
                  onClick={() =>
                    setToggled((prevToggled: any) => ({
                      ...prevToggled,
                      [index]: !prevToggled[index],
                    }))
                  }
                >
                  <span className="text-3xl">{toggled[index] ? "-" : "+"}</span>
                  <h2 className="md:text-xl text-left">{question.title}</h2>
                </button>
                <p className={toggled[index] ? "pl-8 pb-4 pt-2" : "hidden"}>
                  {question.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white flex justify-between pb-8">
        <h2>&copy; Copyright 2023</h2>
        <a href="https://github.com/ivano-uglik">
          <h2>By Ivano!</h2>
        </a>
      </div>
    </div>
  );
}
