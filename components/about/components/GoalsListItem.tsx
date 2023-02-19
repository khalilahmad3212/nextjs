import Image from "next/image";
import React from "react";
import getImageUrl from "../../../utils/getImageUrl";

function GoalsListItem({ goal }: any) {
  return (
    <div className="py-10 px-6 flex flex-col group cursor-pointer bg-white">
      <p className=" text-gray-500 text-[14px]">{goal.goalTag}</p>
      <div className=" flex flex-col-reverse md:flex-row justify-between md:items-center">
        <p className="text-xl font-medium text-slate-700 mt-3">
          {goal.heading}
        </p>
        <Image src={getImageUrl(goal.goalIcon)} alt='icon' width={40} height={40} />
      </div>
      <p className="mt-2 text-sm text-slate-500">{goal.body}</p>
    </div>
  );
}

export default GoalsListItem;
