import Link from "next/link";
import React from "react";

function HeroLeft({
  heading,
  subHeading,
  callToAction,
  secondCallToAction,
}: any) {
  return (
    <div className="md:w-1/2 flex flex-col justify-start">
      <div className="md:text-5xl text-2xl uppercase font-semibold">
        {/* Explore the world{"'"}s largest{" "}
      <span className=" text-primary">car sharing </span>
      marketplace */}
        {heading}
      </div>
      <div className="text-lg mt-4 max-w-md text-gray-400">
        {/* Stoke your wanderlust with some dreamy photo chronicles of road trip
      adventures. */}
        {subHeading}
      </div>
      <div className="mt-5 mb-1 h-16">
        <Link href={callToAction.url}>
          <div
            className="shadow-md font-medium py-3 px-5 text-white
         cursor-pointer bg-primary hover:bg-primary rounded-full text-md w-9/12 md:w-8/12
         flex justify-between hover:scale-105 transition-all duration-500"
          >
            <span>{callToAction.linkText}</span>
            <span>{">"}</span>
          </div>
        </Link>
      </div>
      <Link href={secondCallToAction.url}>
        <div className="h-16 flex items-center gap-4">
          <div
            className="shadow-md font-medium py-3 px-5 text-white
         cursor-pointer bg-secondary rounded-full text-center text-sm md:text-md w-7/12 sm:w-6/12"
          >
            {secondCallToAction.linkText}
          </div>

          <span className="flex-col flex">
            <span className=" font-bold">20+</span>
            <span className=" text-gray-400 text-[12px]">trusted partners</span>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default HeroLeft;
