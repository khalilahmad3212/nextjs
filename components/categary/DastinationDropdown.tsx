import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

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
function DastinationDropdown() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="relative">
      <a
        className=" flex items-center bg-[#17161a0a] py-1 px-3"
        href="#"
        onClick={() => setisOpen(!isOpen)}
      >
        Destination
        <IoMdArrowDropdown className="text-xl" />
      </a>
      <div
        id="dropdown"
        className={`z-10 w-44 absolute left-0 bg-white rounded divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
          {dropdownItems.map(({ content, image }) => (
            <li key={content}>
              <a href="#" className="flex gap-4 py-2 px-4 hover:bg-gray-100">
                <Image src={image} width={30} height={10} alt="icon car" />
                <span className="text-sm">{content}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DastinationDropdown;
