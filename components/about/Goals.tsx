import React from "react";

import GoalsList from "./components/GoalsList";

function Goals({ goals }: any) {
  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] py-12 px-4 md:px-14 mx-auto">
      <div className=" md:w-1/2 flex flex-col justify-start md:p-8">
        <h4 className="uppercase text-gray-600 text-lg">Capabalities</h4>

        <h3 className=" max-w-md mt-4 text-lg  md:text-3xl md:font-[400]">
          Facilisi accumsan in ut eleifend. Nam lorem nisi risus odio velit in
          bibendum.
        </h3>
      </div>

      <GoalsList goals={goals} />
    </div>
  );
}

export default Goals;