import React from "react";
import Image from "next/image";

import bg from "./holiday_pattern.png";
import InstructionsList from "./components/InstructionsList";

function Instructions({ instructions }: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mb-7 py-14 pb-32"
    >
      <h4 className="text-center uppercase">{instructions.subHeading}</h4>
      <h3 className="text-center text-3xl">{instructions.heading}</h3>

      <div className=" mt-16 grid grid-cols-1 md:lg:xl:grid-cols-3 gap-5 px-4 md:px-24">
        <InstructionsList instructionsList={instructions.instructionsList} />
      </div>
    </div>
  );
}

export default Instructions;