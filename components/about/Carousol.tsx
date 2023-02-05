// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import slide_1 from "/public/images/about/carousel/slide_1.png";
import slide_2 from "/public/images/about/carousel/slide_2.png";
// import slide_3 from "/public/images/about/carousel/slide_3.png";

import Image from "next/image";

const carousel_images = [
    slide_2,
    slide_2,
    slide_2,
    slide_2,
    slide_2,
    slide_2,
];

export default function Carousol() {
  return (
    <div className=" max-w-[1440px] mx-auto md:px-32 py-20">

    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
>
      {carousel_images.map((image) => (
        <SwiperSlide key={new Date().toString()}>
          <Image src={image} alt="image" className="w-full h-min" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}
