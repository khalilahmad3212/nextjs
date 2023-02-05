import Image from "next/image";
import React from "react";

import { GoStar } from "react-icons/go";


function SliderCard({ person_1, person_2, padding }: any) {
  return (
    <div className="flex flex-col gap-2 px-6 lg:px-3">
      {[person_1, person_2].map(
        ({ image, name, date, heading, desc }, index) => {
          return (
            <div
              key={new Date().toString()}
              className={`px-4 pt-6 rounded-lg shadow bg-white ${
                index == 0 ? "pb-[" + padding + "px]" : "pb-6"
              }`}
              style={(index == 0 && padding != 0)? {paddingBottom: padding}:{paddingBottom: '1.2rem'} }
            >
              <div className="flex flex-row gap-2">
                <Image className=" w-12 h-12" src={image} alt="Image" />
                <div>
                  <h3 className="text-md font-medium">{name}</h3>
                  <p className="text-sm text-gray-400">{date}</p>
                </div>
              </div>
              <div className="flex my-4">
                {[1, 2, 3, 4, 5].map(() => (
                  <GoStar
                    key={new Date().toString()}
                    className="text-primary"
                  />
                ))}
              </div>
              <div>
                <h3 className="text-sm font-[500] mb-3">{heading}</h3>
                <p className="text-[12px] text-justify pr-4 text-gray-500">
                  {desc}
                </p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default SliderCard;
