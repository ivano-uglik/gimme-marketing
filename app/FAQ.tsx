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
  ];
  const questionsTwo = [
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
      <div className="flex flex-col gap-4 py-24">
        <h2 className={`${unbounded.className} font-bold text-center text-4xl`}>
          Frequently Asked Questions
        </h2>
        <div className="flex justify-center">
          <p className="text-center w-1/4 ">
            Learn how to set up your digital presence for your restaurant online
            for FREE in 60 seconds!
          </p>
        </div>
      </div>
      <div className="py-16 flex justify-center">
        <div className="px-8 md:px-0 flex justify-center flex-col md:flex-row container gap-16">
          <div className="md:w-2/3 flex flex-col">
            {questions.map((question, index) => (
              <div
                className="p-2 bg-white my-4 rounded-xl text-gimme"
                key={index}
              >
                <button
                  className="flex items-center gap-4"
                  onClick={() =>
                    setToggled((prevToggled: any) => ({
                      ...prevToggled,
                      [index]: !prevToggled[index],
                    }))
                  }
                >
                  <span
                    className={`font-bold text-3xl ${
                      toggled[index] ? "-" : "+"
                    }`}
                  >
                    {toggled[index] ? "-" : "+"}
                  </span>
                  <h2 className="md:text-xl text-left">{question.title}</h2>
                </button>
                <p className={toggled[index] ? "" : "hidden"}>
                  {question.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="md:w-2/3 flex flex-col">
            {questionsTwo.map((question, index) => (
              <div
                className="p-2 bg-white my-4 rounded-xl text-gimme"
                key={index}
              >
                <button
                  className="flex items-center gap-4"
                  onClick={() =>
                    setToggled((prevToggled: any) => ({
                      ...prevToggled,
                      [index]: !prevToggled[index],
                    }))
                  }
                >
                  <span
                    className={`font-bold text-3xl ${
                      toggled[index] ? "-" : "+"
                    }`}
                  >
                    {toggled[index] ? "-" : "+"}
                  </span>
                  <h2 className="md:text-xl text-left">{question.title}</h2>
                </button>
                <p className={toggled[index] ? "" : "hidden"}>
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
