import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <>
      <section className="relative mx-auto max-w-[1400px]">
        <nav className="flex justify-between bg-gray-white text-black pr-3">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link className="text-3xl font-bold font-heading" href="/">
              {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
              Logo Here.
            </Link>

            {/* <!-- Nav Links --> */}
            <ul className="hidden md:flex px-4 mx-auto font-heading space-x-12">
              <li className="relative">
                <Dropdown />
              </li>
              <li>
                <Link href="/about">Our Mission</Link>
              </li>
            </ul>

            {/* <!-- Header Icons --> */}
          </div>

          <div className="flex items-center space-x-5">
            <Link href="/about">
              <button className="bg-primary text-sm font-bold tracking-wider hover:bg-white hover:border-primary border-2 border-primary text-white hover:text-black  py-2 px-7 rounded-full">
                Contact
              </button>
            </Link>
          </div>
          {/* <!-- Responsive navbar --> */}
          {/* <a className="xl:hidden flex mr-6 items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a> */}
          {/* <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a> */}
        </nav>
      </section>
    </>
  );
}

export default Navbar;
