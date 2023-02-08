import Link from "next/link";
import React from "react";

import { BsSunFill } from "react-icons/bs";
import BookingForm from "./BookingForm";

function CarData({ title, description, tags }: any) {
  return (
    <div className=" max-w-[1440px] mx-auto px-24 pt-12 flex gap-12 mb-24">
      {/* left Portion */}
      <div className="w-1/2 flex flex-col">
        <p className="text-xl uppercase text-gray-400">STANDARD PLUS</p>
        <h4 className=" text-3xl font-bold mt-5 mb-10">{title}</h4>

        <p className="text-xl uppercase text-gray-600 mb-5">STANDARD PLUS</p>

        <p className="text-lg text-gray-400 mb-12">
          {description}
        </p>

        <div className="flex flex-wrap gap-5">
        {tags ? tags.map((item:string) => (
            <div
              key={item + "as"}
              className="flex relative flex-row items-center"
            >
              <BsSunFill className="text-white p-1 absolute bg-blue-600 rounded-full w-7 h-7" />
              <span className="pl-8 tracking-wider pr-4 rounded-full py-[1px] bg-gray-300">
                {item}
              </span>
            </div>
          )) : null}
        </div>
      </div>

      {/* Right Portion */}
      <div className="w-1/2 px-10 text-gray-800">
            <BookingForm />
      </div>
    </div>
  );
}

export default CarData;