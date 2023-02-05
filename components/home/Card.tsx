import Image from "next/image";
import React from "react";

function Card({ image, title, description, button, margin, index }: any) {
  return (
    <div
      className={`${
        !button && "pb-14"
      } py-5 rounded-xl group  relative px-6 flex flex-col shadow-2xl cursor-pointer bg-white hover:bg-primary`}
      style={{ top: margin }}
    >
      <span className="text-6xl absolute left-36 -z-10 -top-10 text-gray-500 group-hover:text-black font-bold">
        {"0" + (index + 1)}
      </span>
      <Image src={image} alt="icon" width={50} height={10} className="group-hover:text-white" />
      <p className="text-xl font-medium text-slate-700 mt-3">{title}</p>
      <p className="mt-2 text-sm text-slate-500 max-w-[200px]">{description}</p>
      {button && (
        <button className="bg-primary group-hover:bg-white text-white group-hover:text-gray-500 py-2 w-40 mt-4 text-sm flex items-center justify-center rounded-full">
        {button}
        </button>
      )}
    </div>
  );
}

export default Card;