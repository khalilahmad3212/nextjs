import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import MultiRangeSlider from "./multirangeslider";

import { CarContext } from "../../context/carContext";

function PricingDropdown({ fetchCarsData }: any) {
  const { minValue, maxValue, setminValue, setmaxValue } =
    useContext(CarContext);

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
              max={100}
              onChange={({ min, max }: any) => {
                setminValue(min * 1000);
                setmaxValue(max * 1000);
              }}
            />
          </div>
          <div className="flex justify-evenly mt-4 pt-2 mb-8">
            {[
              { title: "Min", price: minValue },
              { title: "Max", price: maxValue },
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
            <button
              onClick={() => {
                fetchCarsData();
                setisOpen(false)
              }}
              className="bg-primary text-sm font-bold tracking-wider hover:bg-transparent hover:border-primary border-2 border-primary text-white hover:text-black  py-2 px-16 rounded-full"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingDropdown;