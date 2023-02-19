import React from "react";
import GoalsListItem from "./GoalsListItem";

function GoalsList({ goals }: any) {
  return (
    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 group gap-8 md:gap-5 mt-8 md:mt-0">
      {goals.map((goal: any) => (
        <GoalsListItem key={goal._key} goal={goal} />
      ))}
    </div>
  );
}

export default GoalsList;
