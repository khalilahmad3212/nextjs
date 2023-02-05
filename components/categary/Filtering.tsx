import React from "react";
import BrandDropdown from "./BrandDropdown";
import PricingDropdown from "./PricingDropdown";
import TransmissionDropdown from "./TransmissionDropdown";

function Filtering() {
  return (
    <div className="flex items-center">
      <p className=" min-w-max mr-6">Showing 1-24 of 50 cars</p>
      <div className="flex gap-4">
        <PricingDropdown />
        <BrandDropdown />
        <TransmissionDropdown />
        <button className=" flex items-center bg-[#17161a0a] py-1 px-3">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Filtering;
