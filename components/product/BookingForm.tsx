import Link from "next/link";
import React from "react";

function BookingForm() {
  return (
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
        <select
          id="pick_return_location"
          className=" w-full pb-4 pt-6 px-5 bg-white border-[1px] focus:outline-1 focus:outline-gray-300 rounded-md"
        >
          <option value="" selected disabled hidden>
            Choose Your Location
          </option>
          {["One", "Two", "Three"].map((item) => (
            <option key={new Date().toString()} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <Link href="/categary/electric-car">
        <div
          className="shadow-md font-medium py-5 px-5 text-white
         cursor-pointer bg-primary hover:bg-primary text-md
         flex justify-between items-center mt-4 rounded-md"
        >
          <span>Book This Car</span>
          <span>
            {" "}
            <span className="text-xl">XOF85</span> / day
          </span>
        </div>
      </Link>
    </form>
  );
}

export default BookingForm;