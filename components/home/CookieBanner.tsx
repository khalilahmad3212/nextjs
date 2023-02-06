import React, { useState } from "react";
import Image from "next/image";

// images
import cookie from "/public/images/cookie.svg";
import cross from "/public/images/cross.svg";

function CookieBanner() {
  const [show, setshow] = useState(true);

  function handleReject() {
    setshow(false);
  }

  return (
    show ? (
      <div className="hidden md:flex flex-row justify-between max-w-[1400px] py-4 px-20 mx-auto shadow-lg">
        <div className="w-1/2 flex gap-6 text-md text-gray-600">
          <Image src={cookie} alt="cookie" width={50} height={10} />
          <p>
            This site uses cookies. Some of them are essential while others are
            used to serve you a customized shopping experience.
            <a href="#">Learn more</a>
          </p>
        </div>
        <div className="w-1/2 flex flex-row justify-end gap-5">
          <button className="bg-primary text-white py-2 px-12 rounded-full">
            Accept
          </button>
          <button
            className="border-2 border-primary text-black py-1 px-12 rounded-full"
            onClick={handleReject}
          >
            Reject
          </button>

          <Image src={cross} alt="cookie" width={20} height={10} />
        </div>
      </div>
    ): (<h1 className="hidden">Car Rent</h1>)
  );

}

export default CookieBanner;