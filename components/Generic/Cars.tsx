import React, { useEffect } from "react";

import Image from "next/image";

function Cars({ cars_data }: any) {


  return (
    <div className="max-w-[1440px] mx-auto pt-24 md:px-5">
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 mt-16 gap-8 md:px-12">
        {cars_data.map(({ imageUrl, title }: any) => {
            
          return(
          <div
            key={title}
            className="flex flex-col group cursor-pointer bg-white rounded-xl group"
          >
            <div className="flex items-center justify-center">
            <Image
              className=" bg-gray-300"
              src={imageUrl}
              alt="icon"
              width={500}
              height={100}
            />
            </div>
            <div className="px-8 group-hover:bg-primary/70 rounded-xl">
              <p className="text-lg text-slate-500 mt-3">SUVS</p>
              <p className="pb-2  text-xl font-medium text-slate-900 border-b-2">
                {title}
              </p>
              <p className="text-end my-3">
                <span className="font-medium">Xd0JD</span> / <span className=" text-gray-400">day</span>
              </p>
            </div>
          </div>
        )
        })}
      </div>
    </div>
  );
}

export default Cars;
