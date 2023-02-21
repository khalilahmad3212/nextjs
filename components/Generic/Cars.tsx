import React, { useEffect } from "react";

import Image from "next/image";
import Car from "./Car";
import getImageUrl from "../../utils/getImageUrl";
import printData from "../../print";

function Cars({ featuredCars }: any) {

  return (
    <div className="max-w-[1440px] mx-auto pt-24 md:px-5">
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 mt-16 gap-8 md:px-12">
        {featuredCars.map(({ featuredImage, name, _id }: any) => {
          return (
            <Car
              key={_id}
              featuredImage={getImageUrl(featuredImage)}
              title={name}
              _id={_id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cars;
