import React, { useState } from "react";


import FooterLeft from "./components/FooterLeft";
import FooterRight from "./components/FooterRight";
import FooterBottom from "./components/FooterBottom";

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

export default function Footer({ navigations }: any) {
  return (
    <div className=" bg-black text-white pt-32">
      <footer className="max-w-[1440px] p-7 mx-auto flex flex-col md:flex-row justify-between">
        <FooterLeft />
        <FooterRight navigations={navigations} />
      </footer>

    <FooterBottom />
    </div>
  );
}
