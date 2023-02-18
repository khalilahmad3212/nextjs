import React from "react";
import FeatureList from "./components/FeatureList";

function Features({ features }: any) {
  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] bg-[#F5F7FF] py-12 px-4 md:px-14 mx-auto">
      <div className=" md:w-1/2 flex flex-col justify-center">
        <h4 className="uppercase text-primary text-lg">{features.heading}</h4>
        <h3 className=" max-w-md mt-4 text-lg  md:text-3xl text-justify md:font-[600]">
          {features.body}
        </h3>
      </div>
      <div className="md:w-1/2 grid grid-cols-1 md:lg:xl:grid-cols-2 group gap-8 md:gap-5 mt-8 md:mt-0">
        <FeatureList featureList={features.featureList}/>
      </div>
    </div>
  );
}

export default Features;
