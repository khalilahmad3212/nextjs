import Image from "next/image";
import React from "react";

function SliderCard({ images }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-1/2 p-4">
        <Image className=" w-full" src={images[0]} alt="Image" />
      </div>
      <div className="w-1/2 flex flex-col gap-2 py-5">
        <Image className="w-full h-56" src={images[1]} alt="Image 1" />
        <Image className="w-full h-56" src={images[2]} alt="Image 2" />
      </div>
    </div>
  );
}

export default SliderCard;
