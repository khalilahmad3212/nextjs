import React from "react";
import InstrctionsListItem from "./InstrctionsListItem";

let margins = ['40px', '60px', '50px'];
let i = 0;
function InstructionsList({ instructionsList }: any) {
  
  return (
    <>
      {instructionsList.map(
        ({ _key, instructionHeading, body, instructionIcon }: any, index: number) => (
          <InstrctionsListItem
            key={_key}
            instructionHeading={instructionHeading}
            body={body}
            instructionIcon={instructionIcon}
            button={(index == 0)? 'Click Here': false}
            margin={margins[i++]}
            index={index}
          />
        )
      )}
    </>
  );
}

export default InstructionsList;
