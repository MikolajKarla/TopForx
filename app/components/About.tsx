"use client";
import React, { use, useEffect, useState } from "react";

import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/solid";
import { Zoom } from "react-slideshow-image";
import { text } from "stream/consumers";

const About = () => {
  const sliderTexts = [
    {
      title: "Cutting-Edge Chart Analysis:",
      value: `Our platform provides in-depth chart analysis using the latest technical indicators, patterns, and algorithms. Whether you're interested in day trading, swing trading, or long-term investments, our charts offer invaluable insights to help you make informed choices.`,
    },
    {
      title: "Real-Time Forex Information:",
      value: `Stay ahead of the curve with up-to-the-minute Forex news, market updates, and economic events. Our team of experts scours the financial landscape to deliver timely and relevant information directly to you.`,
    },
    {
      title: "Educational Resources:",
      value: `We believe that knowledge is power. That's why we offer a wealth of educational resources, including tutorials, articles, and webinars, to help you sharpen your trading skills and deepen your understanding of Forex.`,
    },
    {
      title: "User-Friendly Interface:",
      value: `TopForX boasts an intuitive and user-friendly interface, making it easy for traders of all backgrounds to access critical data and conduct detailed analyses with ease.`,
    },
    {
      title: "Community and Support:",
      value: `Join our thriving community of Forex enthusiasts. Share insights, discuss strategies, and seek advice from fellow traders. Additionally, our dedicated support team is always ready to assist you with any questions or issues you may encounter.`,
    },
    {
      title: "Customization:",
      value: `Tailor your TopForX experience to your unique needs and preferences. Customize your dashboard, set alerts, and personalize your charts to suit your trading style.`,
    },
  ];
  const [texts, setTexts] = useState(sliderTexts[0]);
  const changeSlide = (side) => {
    let arrSize = sliderTexts.length - 1;
    let arrIndex = sliderTexts.findIndex((item) => item.title === texts.title);
    if (side === "prev") {
      if (arrIndex != 0) {
        setTexts(sliderTexts[arrIndex - 1]);
      } else {
        setTexts(sliderTexts[arrSize]);
      }
    } else {
      if (arrIndex != arrSize) {
        setTexts(sliderTexts[arrIndex + 1]);
      } else {
        setTexts(sliderTexts[0]);
      }
    }
  };
  setTimeout(changeSlide,10000)

  return (
    <div id="about" className="py-10 h-max w-full grid grid-cols-6 bg-stone-100 border-y-4 border-stone-600">
      <div className="col-span-1 self-center justify-self-end ml-10">
        <ArrowSmallLeftIcon
          id="prev"
          className="h-8 w-8 text-black cursor-pointer"
          onClick={(e) => changeSlide("prev")}
        />
      </div>
      <div className="col-span-4 text-center">
        <h2 className="text-2xl">{texts?.title}</h2>
        <p>{texts?.value}</p>
      </div>
      <div className="col-span-1 self-center mr-10">
        <ArrowSmallRightIcon
          className="h-8 w-8 text-black cursor-pointer"
          onClick={(e) => changeSlide("next")}
        />
      </div>
    </div>
  );
};
export default About;
