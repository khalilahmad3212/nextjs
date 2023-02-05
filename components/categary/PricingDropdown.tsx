import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import MultiRangeSlider from "./multirangeslider";

function PricingDropdown() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className=" flex items-center bg-[#17161a0a] py-1 px-3"
        onClick={() => setisOpen(!isOpen)}
      >
        Pricing
        <IoMdArrowDropdown className="text-xl" />
      </button>
      <div
        id="dropdown"
        className={`z-10 w-52 absolute left-0 top-10 rounded ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="z-10 w-64 bg-[#17161a0a] rounded pb-5 shadow ">
          <div className="flex justify-end pr-3 pt-2">
            <RxCross2
              className=" cursor-pointer"
              onClick={() => setisOpen(!isOpen)}
            />
          </div>
          <div>
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }: any) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>
          <div className="flex justify-evenly mt-4 pt-2 mb-8">
            {[
              { title: "Min", price: 300 },
              { title: "Max", price: 300 },
            ].map(({ title, price }) => (
              <div
                key={title + price}
                className="bg-white pl-4 pr-16 py-2 rounded-lg"
              >
                <p className=" text-gray-400">{title}</p>
                <p>{price}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-primary text-sm font-bold tracking-wider hover:bg-transparent hover:border-primary border-2 border-primary text-white hover:text-black  py-2 px-16 rounded-full">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingDropdown;
