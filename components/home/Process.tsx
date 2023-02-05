import React from "react";
import Image from "next/image";

// svgs
import why_us_icon_1 from "/public/images/why_us_icon1.svg";
import why_us_icon_2 from "/public/images/why_us_icon2.svg";
import why_us_icon_3 from "/public/images/why_us_icon3.svg";

const cards_data = [
  {
    image: why_us_icon_1,
    title: "Verified vehicles",
    description:
      "Maecenas posuere lectus etiam dictumst tempus justo ultrices a. Ullamcorper non.",
    button: "Give us a message",
    margin: "0px",
  },
  {
    image: why_us_icon_2,
    title: "Big network",
    description:
      "Neque velit urna nisl enim sed sed ornare accumsan elementum. Quis vitae tellus.",
    margin: "40px",
  },
  {
    image: why_us_icon_3,
    title: "Available 24/7",
    description:
      "Curabitur maecenas ornare est et est tortor vel pretium. Consequat sed neque posuere.",
    margin: "80px",
  },
];

import bg from "./holiday_pattern.png";
import Card from "./Card";

function Process() {
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
      <h4 className="text-center uppercase">How we work</h4>
      <h3 className="text-center text-3xl">How does it work</h3>

      <div className=" mt-16 grid grid-cols-1 md:lg:xl:grid-cols-3 gap-5 px-4 md:px-24">
        {cards_data.map(
          ({ image, title, description, button, margin }, index) => (
            <Card
              key={title}
              image={image}
              title={title}
              description={description}
              button={button}
              margin={margin}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Process;
