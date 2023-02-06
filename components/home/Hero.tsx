import React from "react";
import Image from "next/image";

// images
import hero_image_1 from "/public/images/hero_image_1.png";
import hero_image_2 from "/public/images/hero_image_2.png";
import hero_image_3 from "/public/images/hero_image_3.png";
import hero_image_4 from "/public/images/hero_image_4.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="m-auto max-w-[1400px] p-8 md:p-12">
      <div className="flex flex-col md:flex-row">
        {/* left section of hero */}
        <div className="md:w-1/2 flex flex-col justify-start">
          <div className="md:text-5xl text-2xl uppercase font-semibold">
            Explore the world{"'"}s largest{" "}
            <span className=" text-primary">car sharing </span>
            marketplace
          </div>
          <div className="text-lg mt-4 max-w-md text-gray-400">
            Stoke your wanderlust with some dreamy photo chronicles of road trip
            adventures.
          </div>
          <div className="mt-5 mb-1 h-16">
            <Link href="/categary/electric-car">
              <div
                className="shadow-md font-medium py-3 px-5 text-white
               cursor-pointer bg-primary hover:bg-primary rounded-full text-md w-9/12 md:w-8/12
               flex justify-between hover:scale-105 transition-all duration-500"
              >
                <span>Book a car</span>
                <span>{">"}</span>
              </div>
            </Link>
          </div>
          <Link href="/categary/electric-car">
            <div className="h-16 flex items-center gap-4">
              <div
                className="shadow-md font-medium py-3 px-5 text-white
               cursor-pointer bg-secondary rounded-full text-center text-sm md:text-md w-7/12 sm:w-6/12"
              >
                Become a partner
              </div>

              <span className="flex-col flex">
                <span className=" font-bold">20+</span>
                <span className=" text-gray-400 text-[12px]">
                  trusted partners
                </span>
              </span>
            </div>
          </Link>
        </div>

        {/* Right Section of the hero */}
        <div className="md:w-1/2 flex gap-3 mt-10 md:mt-0">
          <div className="flex flex-col gap-4">
            <Image
              src={hero_image_1}
              alt="car image"
              width={266}
              height={100}
            />
            <Image
              src={hero_image_2}
              alt="car image"
              width={266}
              height={100}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={hero_image_3}
              alt="car image"
              width={400}
              height={100}
            />
            <Image
              src={hero_image_4}
              alt="car image"
              width={400}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
