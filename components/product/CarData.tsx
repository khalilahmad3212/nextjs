import React from "react";

import { BsSunFill } from "react-icons/bs";

function CarData() {
  return (
    <div className=" max-w-[1440px] mx-auto px-24 pt-12 flex">
      <div className="w-1/2 flex flex-col">
        <p className="text-xl uppercase text-gray-400">STANDARD PLUS</p>
        <h4 className=" text-3xl font-bold mt-5 mb-10">Tesla Model 3 2022</h4>

        <p className="text-xl uppercase text-gray-600 mb-5">STANDARD PLUS</p>

        <p className="text-xl uppercase text-gray-400 mb-5">
          Tesla All-Wheel Drive has two independent motors for improved
          redundancy, each with only one moving part for minimal maintenance and
          maximum durability. Unlike traditional all-wheel drive systems, they
          digitally control torque to the front and rear wheels for far better
          handling and traction control. Model 3 is fully electric, so you never
          need to visit a gas station again. If you charge overnight at home,
          you can wake up to a full battery every morning. And when you’re on
          the road, it’s easy to plug in along the way—at any public station or
          with the Tesla charging network.
        </p>

        <div className="flex flex-wrap gap-5">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item + "as"}
              className="flex relative flex-row items-center"
            >
              <BsSunFill className="text-white p-1 absolute bg-blue-600 rounded-full w-8 h-8" />
              <span className="pl-12 pr-5 rounded-full py-[6px] bg-gray-300">
                Electric
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2">
        <form className="border-[1px] border-gray-300 px-3 py-6">
          <div className="flex flex-row gap-4 justify-around">
            <input
              type="text"
              placeholder="First name (optional)"
              className="border-[1px] border-gray-300 pl-5 py-3 rounded-md"
            />
            <input
              type="text"
              placeholder="First name (optional)"
              className="border-[1px] border-gray-300 pl-5 py-3 rounded-md"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="border-[1px] w-full mt-6 border-gray-300 pl-5 py-3 rounded-md"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone"
              className="border-[1px] w-full mt-6 border-gray-300 pl-5 py-3 rounded-md"
            />
          </div>

          <div className="flex flex-row gap-4 justify-around mt-4">
            <input
              type="date"
               value={new Date().toISOString().substring(0, 10)}
              className="border-[1px] w-1/2 border-gray-300 pl-5 py-3 rounded-md"
            />
            <input
              type="time"
              value={'18:00'}
              className="border-[1px] w-1/2 border-gray-300 pl-5 py-3 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarData;
