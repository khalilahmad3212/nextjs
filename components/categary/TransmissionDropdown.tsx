import Image from "next/image";
import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CarContext } from "../../context/carContext";

import car_icon from "/public/images/car_icon.svg";

const dropdownItems = [
  {
    content: "SUV",
    image: car_icon,
  },
  {
    content: "Citadine",
    image: car_icon,
  }
];
function TransmissionDropdown({ fetchCarsData }: any) {
  const [isOpen, setisOpen] = useState(false);


  const { settransmission } = useContext(CarContext);


  return (
    <div className="relative">
      <button
        className=" flex items-center bg-[#17161a0a] py-1 px-3"
        onClick={() => setisOpen(!isOpen)}
      >
        Transmissions
        <IoMdArrowDropdown className="text-xl" />
      </button>
      <div
        id="dropdown"
        className={`z-10 w-44 absolute left-0 bg-white rounded divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
          {dropdownItems.map(({ content, image }) => (
            <li key={content} onClick={() => {
              settransmission(content);
              fetchCarsData();
              setisOpen(false);
            }}>
              <div className="flex gap-4 py-2 px-4 hover:bg-gray-100">
                <Image src={image} width={30} height={10} alt="icon car" />
                <span className="text-sm">{content}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransmissionDropdown;