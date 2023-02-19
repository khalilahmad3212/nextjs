// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import slide_1 from "/public/images/about/carousel/slide_1.png";
import slide_2 from "/public/images/about/carousel/slide_2.png";
// import slide_3 from "/public/images/about/carousel/slide_3.png";

import Image from "next/image";
import getImageUrl from "../../utils/getImageUrl";

// const carousel_images = [
//     slide_2,
//     slide_2,
//     slide_2,
//     slide_2,
//     slide_2,
//     slide_2,
// ];

export default function Carousol({ images }: any) {
  return (
    <div className=" max-w-[1440px] mx-auto md:px-2 py-20">

    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        style={{
          height: '300px',
          overflow: 'hidden'
        }}
>
      {images.map((image: any) => (
        <SwiperSlide key={image._key}>
          <Image src={getImageUrl(image)} alt="image" width={100} height={100} className="w-full h-min" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}