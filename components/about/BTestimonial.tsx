import Image from "next/image";
import React from "react";

const MediaBlock = ({ imageSrc, heading, description }: any) => {
  return (
    <>
      <div className=" max-w-[1440px] mx-auto px-16 mb-20">
      <h2 className="text-xl text-gray-400 font-normal mt-4">Donec</h2>
        <h1 className="text-2xl font-[500] max-w-[230px] mt-2">Massa luctus dui suspendisse mi. Id id</h1>

      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center">
          <Image
            src={imageSrc}
            alt="Image"
            className="w-full h-5/6 relative md:-right-10"
          />
        </div>

        <div className="md:w-1/2 px-5 py-8 md:px-28 bg-gray-200 flex flex-col justify-center">
          <div className="text-3xl">
            <span className="bg-primary border-[7px] border-gray-500/60 text-gray-800 rounded-full pl-2 w-14 h-14 flex items-center justify-center">
              <i className="fas fa-play text-white"></i>
            </span>
          </div>
          <h2 className="text-xl font-bold mt-4">{heading}</h2>
          <p className="text-gray-500 mt-2 text-justify">{description}</p>
        </div>
      </div>
    </>
  );
};

export default MediaBlock;