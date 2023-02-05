import Image from "next/image";
import Link from "next/link";
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
function Dropdown() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <a
        className=" flex items-center"
        href="#"
        onClick={() => {
          setisOpen(!isOpen);
          setTimeout(() => (
            setisOpen(false)
          ), 2000)
        }}
      >
        Products
        <IoMdArrowDropdown className="text-xl" />
      </a>
      <div
        id="dropdown"
        className={`z-10 w-44 absolute right-0 bg-white rounded divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
          {dropdownItems.map(({ content, image }) => (
            <li key={content} className="hover:bg-secondary">
              <Link href="#" className="flex gap-4 py-2 px-4 hover:bg-gray-100">
                <Image src={image} width={30} height={10} alt="icon car" />
                <span className="text-sm">{content}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
