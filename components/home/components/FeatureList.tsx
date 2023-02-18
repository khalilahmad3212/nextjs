import React from "react";
import FeatureListItem from "./FeatureListItem";

function FeatureList({ featureList }: any) {
  return (
    <>
      {featureList.map(
        ({ _key, featureIcon, featureTitle, featureBody }: any) => (
          <FeatureListItem
            key={_key}
            featureIcon={featureIcon}
            featureTitle={featureTitle}
            featureBody={featureBody}
          />
        )
      )}
    </>
  );
}

export default FeatureList;
