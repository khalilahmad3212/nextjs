import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import getImageUrl from "../../utils/getImageUrl";

import car_icon from "/public/images/car_icon.svg";

const dropdownItems = [
  {
    content: "SUV",
    image: car_icon,
  },
  {
    content: "Citadine",
    image: car_icon,
  },
  {
    content: "4 x 4",
    image: car_icon,
  },
  {
    content: "Minibus",
    image: car_icon,
  },
  {
    content: "Convertibles",
    image: car_icon,
  },
];
function Dropdown({ dropdownItems }: any) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <p
        className=" flex items-center cursor-pointer"
        onClick={() => {
          setisOpen(!isOpen);
          setTimeout(() => (
            setisOpen(false)
          ), 2000)
        }}
      >
        Products
        <IoMdArrowDropdown className="text-xl" />
      </p>
      <div
        id="dropdown"
        className={`z-10 w-44 absolute right-0 bg-white rounded divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
          {dropdownItems.map((dropdownItem: any) => (
            <li key={dropdownItem._key} className="hover:bg-secondary">
              <Link href={dropdownItem.url} className="flex gap-4 py-2 px-4 hover:bg-gray-100">
                <Image src={getImageUrl(dropdownItem.icon)} width={30} height={10} alt="icon car" className=" text-blue-500" />
                <span className="text-sm">{dropdownItem.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
