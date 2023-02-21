import Image from "next/image";
import Link from "next/link";
import React from "react";

function Car({ featuredImage, title, _id }: any) {
  return (
    <Link href={`/product/${_id}`}>
      <div className="flex flex-col group cursor-pointer bg-white rounded-xl group shadow-md">
        <div className="flex items-center justify-center max-h-[230px] overflow-hidden rounded-tr-lg rounded-tl-lg">
          <img
            className=" bg-gray-300 object-cover object-center h-full w-full"
            src={featuredImage}
            alt="icon"
          />
        </div>
        <div className="px-8 group-hover:bg-primary/70 rounded-br-xl rounded-bl-xl">
          <p className="text-lg text-slate-500 mt-3">SUVS</p>
          <p className="pb-2  text-xl font-medium text-slate-900 border-b-2">
            {title}
          </p>
          <p className="text-end my-3">
            <span className="font-medium">Xd0JD</span> /{" "}
            <span className=" text-gray-400">day</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Car;