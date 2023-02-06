import Link from "next/link";
import React from "react";

import { BsSunFill } from "react-icons/bs";

function CarData() {
  return (
    <div className=" max-w-[1440px] mx-auto px-24 pt-12 flex gap-12 mb-24">
      {/* left Portion */}
      <div className="w-1/2 flex flex-col">
        <p className="text-xl uppercase text-gray-400">STANDARD PLUS</p>
        <h4 className=" text-3xl font-bold mt-5 mb-10">Tesla Model 3 2022</h4>

        <p className="text-xl uppercase text-gray-600 mb-5">STANDARD PLUS</p>

        <p className="text-lg text-gray-400 mb-12">
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
              <BsSunFill className="text-white p-1 absolute bg-blue-600 rounded-full w-7 h-7" />
              <span className="pl-8 tracking-wider pr-4 rounded-full py-[1px] bg-gray-300">
                Electric
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Portion */}
      <div className="w-1/2 px-10 text-gray-800">
        <form className="border-[1px] border-gray-300 px-6 py-6 rounded-lg">
          <div className="flex flex-row gap-4 justify-around">
            <input
              type="text"
              placeholder="First name (optional)"
              className="border-[1px] border-gray-300 focus:outline-1 focus:outline-gray-300 pl-5 py-3 rounded-md w-1/2"
            />
            <input
              type="text"
              placeholder="First name (optional)"
              className="border-[1px] border-gray-300 pl-5 py-3 rounded-md w-1/2 focus:outline-1 focus:outline-gray-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="border-[1px] focus:outline-1 focus:outline-gray-300 w-full mt-6 border-gray-300 pl-5 py-3 rounded-md"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone"
              className="border-[1px] focus:outline-1 focus:outline-gray-300 w-full mt-6 border-gray-300 pl-5 py-3 rounded-md"
            />
          </div>

          <div className="flex flex-row gap-2 mt-4 w-full">
            <div className="relative w-3/4">
              <label
                htmlFor="trip_start_date"
                className=" absolute left-3 text-gray-300 top-1 text-sm"
              >
                Trip end
              </label>
              <input
                id="trip_start_date"
                type="date"
                value={new Date().toISOString().substring(0, 10)}
                className="border-[1px] border-gray-300 w-full px-5 pb-3 pt-5 rounded-md focus:outline-1 focus:outline-gray-300"
              />
            </div>
            <div className="relative w-2/4">
              <label
                htmlFor="trip_start_time"
                className="absolute left-3 text-gray-300 top-1 text-sm"
              >
                Time
              </label>
              <input
                id="trip_start_time"
                type="time"
                value={"18:00"}
                className="border-[1px] border-gray-300 w-full px-5 pb-3 pt-5 rounded-md focus:outline-1 focus:outline-gray-300"
              />
            </div>
          </div>

          <div className="flex flex-row gap-2 mt-4 w-full">
            <div className="relative w-3/4">
              <label
                htmlFor="trip_end_date"
                className=" absolute left-3 text-gray-300 top-1 text-sm"
              >
                Trip start
              </label>
              <input
                id="trip_end_date"
                type="date"
                value={new Date().toISOString().substring(0, 10)}
                className="border-[1px] border-gray-300 w-full px-5 pb-3 pt-5 rounded-md focus:outline-1 focus:outline-gray-300"
              />
            </div>
            <div className="relative w-2/4">
              <label
                htmlFor="trip_end_time"
                className="absolute left-3 text-gray-300 top-1 text-sm"
              >
                Time
              </label>
              <input
                id="trip_end_time"
                type="time"
                value={"18:00"}
                className="border-[1px] border-gray-300 w-full px-5 pb-3 pt-5 rounded-md focus:outline-1 focus:outline-gray-300"
              />
            </div>
          </div>

          <div className="relative mt-6">
            <label
              htmlFor="pick_return_location"
              className="absolute left-4 text-gray-300 top-1 text-sm"
            >
              Pickup & return location
            </label>
            <select id="pick_return_location" className=" w-full pb-4 pt-6 px-5 bg-white border-[1px] focus:outline-1 focus:outline-gray-300 rounded-md">
            <option value="" selected disabled hidden>Choose Your Location</option>
              {
                ['One', 'Two', 'Three'].map((item) => (
                  <option key={new Date().toString()} value={item} >{item}</option>
                ))
              }
            </select>
          </div>
          <Link href="/categary/electric-car">
              <div
                className="shadow-md font-medium py-5 px-5 text-white
               cursor-pointer bg-primary hover:bg-primary text-md
               flex justify-between items-center mt-4 rounded-md"
              >
                <span>Book This Car</span>
                <span> <span className="text-xl">XOF85</span> / day</span>
              </div>
            </Link>
        </form>
      </div>
    </div>
  );
}

export default CarData;