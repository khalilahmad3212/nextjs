import Image from "next/image";
import React from "react";

import ancasta from "/public/images/about/brands/ancasta.png";
import abu from "/public/images/about/brands/abu.png";
import aquire from "/public/images/about/brands/aquire.png";
import sauter from "/public/images/about/brands/sauter.png";
import fostens from "/public/images/about/brands/fostens.png";
import smat from "/public/images/about/brands/smat.png";
import bayern from "/public/images/about/brands/bayern.png";
import evolved from "/public/images/about/brands/evolved.png";
import { randomInt } from "crypto";

const brands = [ancasta, abu, aquire, sauter, fostens, smat, bayern, evolved];

function Brands() {
  return (
    <div className="max-w-[1440px] mx-auto md:mt-24 md:px-5 mb-20">
      <div className="grid grid-cols-2 md:lg:xl:grid-cols-4 mt-16 gap-16 md:gap-8 md:px-12">
        {brands.map(( image ) => (
          <div key={new Date().toString()} className="flex items-center justify-center">
            <Image
              src={image}
              alt="icon"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
