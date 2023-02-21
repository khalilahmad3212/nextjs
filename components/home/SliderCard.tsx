import Image from "next/image";
import React from "react";

import TestimonialCard from "./components/TestimonialCard";

function SliderCard({ person_1, person_2, padding }: any) {
  return (
    <div className="flex flex-col gap-2 mb-10 px-6 lg:px-3">
      {[person_1, person_2].map(
        (
          { image, name, _createdAt, heading, description, rating, _id },
          index
        ) => {
          return (
            <TestimonialCard
              key={_id}
              image={image}
              name={name}
              _createdAt={_createdAt}
              heading={heading}
              description={description}
              rating={rating}
              _id={_id}
              padding={padding}
              index={index}
            />
          );
        }
      )}
    </div>
  );
}

export default SliderCard;
