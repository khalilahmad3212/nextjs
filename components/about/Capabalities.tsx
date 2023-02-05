import React from "react";
import Image from "next/image";

// svgs
import why_us_icon_1 from "/public/images/why_us_icon1.svg";
import why_us_icon_2 from "/public/images/why_us_icon2.svg";
import why_us_icon_3 from "/public/images/why_us_icon3.svg";
import why_us_icon_4 from "/public/images/why_us_icon4.svg";

const cards_data = [
  {
    image: 'integer',
    title: "Eu aliquet sodales velit leo commodo",
    description:
      "Imperdiet vitae lorem quis sed sed elementum et. Amet hac ac fermentum ut molestie mi. Amet blandit amet suspendisse quis venenatis purus ornare pharetra. Elementum dapibus.",
  },
  {
    image: '',
    title: "Amet porttitor nisl sit morbi sapien amet.",
    description:
      "At etiam nibh at montes. Porta auctor vehicula ullamcorper semper convallis turpis. Urna tincidunt in erat a pellentesque. Amet proin eget habitant donec. Elementum proin tincidunt.",
  },
  {
    image: 'Sagittis',
    title: "Sit morbi at nec semper fermentum",
    description:
      "Mattis et dolor pulvinar cursus vitae mi nec dis ornare. Augue arcu eget turpis scelerisque amet purus senectus. Facilisis nulla sed purus aliquet nunc. Vulputate turpis et et risus tellus nullam.",
  },
  {
    image: 'Nec',
    title: "Est a urna in morbi. Ac turpis risus",
    description:
      "In ut ornare vestibulum et fermentum volutpat dolor. Tempus elit tellus dignissim scelerisque volutpat. Pellentesque id elementum quam nunc ornare. Viverra nisl at duis nunc.",
  },
];
function Capabalities() {
  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] py-12 px-4 md:px-14 mx-auto">

      <div className=" md:w-1/2 flex flex-col justify-start md:p-8">
        <h4 className="uppercase text-gray-600 text-lg">Capabalities</h4>

        <h3 className=" max-w-md mt-4 text-lg  md:text-3xl md:font-[400]">
          Facilisi accumsan in ut eleifend. Nam lorem nisi risus odio velit in
          bibendum.
        </h3>

      </div>


      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 group gap-8 md:gap-5 mt-8 md:mt-0">
        {cards_data.map(({ image, title, description }) => (
          <div
            key={title}
            className="py-10 px-6 flex flex-col group cursor-pointer bg-white"
          >
            <p className=" text-gray-500 text-[14px]">{image}</p>
            <p className="text-xl font-medium text-slate-700 mt-3">{title}</p>
            <p className="mt-2 text-sm text-slate-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Capabalities;
