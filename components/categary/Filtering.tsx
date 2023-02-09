import React, { useContext } from "react";
import { CarContext } from "../../context/carContext";
import BrandDropdown from "./BrandDropdown";
import PricingDropdown from "./PricingDropdown";
import TransmissionDropdown from "./TransmissionDropdown";

function Filtering({ fetchCarsData }: any) {
  const { firstIndex, lastIndex, totalLength } = useContext(CarContext);

  return (
    <div className="flex flex-col-reverse gap-2 md:gap-0 mt-3 md:mt-0 md:flex-row md:items-center">
      <p className=" min-w-max mr-6">
        Showing {firstIndex + 1 + " "}-
        {"   " + (lastIndex > totalLength) ? totalLength : lastIndex} of{" "}
        {totalLength} cars
      </p>
      <div className="flex gap-2 flex-wrap md:flex-nowrap md:gap-4">
        <PricingDropdown fetchCarsData={fetchCarsData} />
        <BrandDropdown fetchCarsData={fetchCarsData} />
        <TransmissionDropdown fetchCarsData={fetchCarsData} />
        <button className=" flex items-center bg-[#17161a0a] py-1 px-3">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Filtering;