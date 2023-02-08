import React, { useEffect } from "react";

import Image from "next/image";
import Car from "./Car";

function Cars({ cars_data }: any) {
  return (
    <div className="max-w-[1440px] mx-auto pt-24 md:px-5">
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 mt-16 gap-8 md:px-12">
        {cars_data.map(({ imageUrl, title }: any) => {
          return <Car key={title} imageUrl={imageUrl} title={title} />;
        })}
      </div>
    </div>
  );
}

export default Cars;