import Image from "next/image";
import React from "react";
import getImageUrl from "../../../utils/getImageUrl";

function FeatureListItem({ featureIcon, featureTitle, featureBody }: any) {
  return (
    <div className=" shadow-lg py-10 px-6 flex flex-col group cursor-pointer bg-white">
      <Image src={getImageUrl(featureIcon)} alt="icon" width={50} height={10} />
      <p className="text-xl font-medium text-slate-700 mt-3">{featureTitle}</p>
      <p className="mt-2 text-sm text-slate-500 md:max-w-[250px]">
        {featureBody}
      </p>
    </div>
  );
}

export default FeatureListItem;
