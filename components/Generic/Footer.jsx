import React, { useState } from "react";

// icons
import { MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";


const icons = [
    {
       icon: <MdFacebook />
    },
    {
        icon: <BsTwitter />
     },
     {
        icon: <AiFillInstagram />
     },
     {
        icon: <AiFillLinkedin />
     }
]
const menu_one = [
  {
    url: "#",
    menu_item: "Contact",
  },
  {
    url: "#",
    menu_item: "About",
  },
  {
    url: "#",
    menu_item: "Terms & Conditions",
  },
  {
    url: "#",
    menu_item: "Become a partner",
  },
  {
    url: "#",
    menu_item: "Resources",
  },
  {
    url: "#",
    menu_item: "Blog",
  },
  {
    url: "#",
    menu_item: "FAQs",
  },
];
const menu_two = [
  {
    url: "#",
    menu_item: "Contact",
  },
  {
    url: "#",
    menu_item: "Trucks",
  },
  {
    url: "#",
    menu_item: "Vans",
  },
  {
    url: "#",
    menu_item: "Exotic & Luxury",
  },
];

const menus = [menu_one, menu_two];

export default function Footer() {
  return (
    <div className=" bg-black text-white pt-32">
      <footer className="max-w-[1440px] p-7 mx-auto flex flex-col md:flex-row justify-between">

        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-3">Stay in touch</h3>
          <div className="relative max-w-[330px]">
            <input
              type="email"
              placeholder="Email address"
              className="pl-3 py-2 bg-[#222222] border-[#222222] focus:outline-none focus:border-[#222222] w-full"
            />
            <span className="bg-[#222222] p-[8px] absolute right-0 rounded-rt rounded-tb cursor-pointer">
              Signup
            </span>
          </div>
          <p className="max-w-md mt-3 text-sm">
            By submitting this form, you confirm that you agree to the storing
            and processing of your personal data as described in our Privacy
            Notice.
          </p>
        </div>


        <div className="md:w-1/2 flex justify-between md:justify-evenly py-7 md:px-7">
          {menus.map((menu, index) => (

            <div key={menu}>
              
              <h4 className=" text-gray-600 text-xl mb-4">
                {index === 0 ? "Horus" : "Verhical type"}
              </h4>
              
              <ul>
                {menu.map(({ url, menu_item }) => (
                  <li key={url + menu_item} className=" text-sm mb-2">
                    <a href="#">{menu_item}</a>
                  </li>
                ))}
              </ul>
            
            </div>
          ))}
        </div>

      </footer>

      <div className="max-w-[1440px] border-t-[1px] border-t-white mx-auto flex flex-col md:flex-row justify-between items-center pt-3  md:px-6">
        <p className="text-[0.8em]">© 2022 HORUS Mobility, Inc. All rights reserved</p>
        <div className="flex justify-end gap-4 p-5">
            {
                icons.map(({ icon }) => (
                    <button key={icon} className="md:p-3 font-bold text-white text-xl bg-white/10 rounded-full">
                    {icon}
                  </button>
                ))
            }
        </div>
      </div>
    </div>
  );
}
