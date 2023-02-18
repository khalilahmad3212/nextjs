import React from "react";

import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";

function Hero({ content }: any) {
  return (
    <div className="m-auto max-w-[1400px] p-8 md:p-12">
      <div className="flex flex-col md:flex-row">
        <HeroLeft
          heading={content.heading}
          subHeading={content.subHeading}
          callToAction={content.callToAction}
          secondCallToAction={content.secondCallToAction}
        />
        <HeroRight heroGalleryImages={content.heroGalleryImages} />
      </div>
    </div>
  );
}

export default Hero;
