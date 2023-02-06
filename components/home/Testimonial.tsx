// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

import SliderCard from "./SliderCard";

import client from "../../client";

// Import Swiper styles
import "swiper/css";

export default function Testimonial({ persons }: any) {
  return (
    <div className="mx-auto py-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ padding: "70px 0px", background: "#F7F7F7" }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {persons.map(({ person_1, person_2 }: any, index: any) => (
          <SwiperSlide key={new Date().toString()}>
            <SliderCard
              person_1={person_1}
              person_2={person_2}
              padding={!(index % 2) ? "30px" : 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
