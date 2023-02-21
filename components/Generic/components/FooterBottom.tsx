import React from "react";

import { MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const icons = [
    {
      icon: <MdFacebook />,
    },
    {
      icon: <BsTwitter />,
    },
    {
      icon: <AiFillInstagram />,
    },
    {
      icon: <AiFillLinkedin />,
    },
  ];

function FooterBottom() {
  return (
    <div className="max-w-[1440px] border-t-[1px] border-t-white mx-auto flex flex-col md:flex-row justify-between items-center pt-3  md:px-6">
      <p className="text-[0.8em]">
        © 2022 HORUS Mobility, Inc. All rights reserved
      </p>
      <div className="flex justify-end gap-4 p-5">
        {icons.map(({ icon }, index) => (
          <button
            key={index}
            className="md:p-3 font-bold text-white text-xl bg-white/10 rounded-full"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FooterBottom;
