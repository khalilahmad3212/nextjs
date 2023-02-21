import Image from "next/image";
import React, { useState } from "react";
import getImageUrl from "../../../utils/getImageUrl";

import { GoStar } from "react-icons/go";
function TestimonialCard({
  image,
  _id,
  padding,
  index,
  name,
  _createdAt,
  rating,
  heading,
  description,
}: any) {
  const [ratingstar, setratingstar] = useState(new Array(rating).fill(0));

  return (
    <div
      key={_id}
      className={`px-4 pt-6 rounded-lg shadow-lg bg-white ${
        index == 0 ? "pb-[" + padding + "px]" : "pb-6"
      }`}
      style={
        index == 0 && padding != 0
          ? { paddingBottom: padding }
          : { paddingBottom: "1.2rem" }
      }
    >
      <div className="flex flex-row gap-2">
        <Image
          className=" w-12 h-12"
          width={100}
          height={100}
          src={getImageUrl(image)}
          alt="Image"
        />
        <div>
          <h3 className="text-md font-medium">{name}</h3>
          <p className="text-sm text-gray-400">{_createdAt}</p>
        </div>
      </div>
      <div className="flex my-4">
        {ratingstar.map(() => (
          <GoStar key={new Date().toString()} className="text-primary" />
        ))}
      </div>
      <div>
        <h3 className="text-sm font-[500] mb-3">{heading}</h3>
        <p className="text-[12px] text-justify pr-4 text-gray-500">
          {index == 0 ? description : description.slice(0, 200) + "..."}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
