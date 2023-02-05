// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

import SliderCard from "./SliderCard";

// Import Swiper styles
import "swiper/css";

import third from "/public/images/third.png";

const persons = new Array(10).fill({
  person_1: {
    image: third,
    name: "Babs A.",
    date: "July 4, 2019",
    heading: "EXPRESSIONIST FACIAL DEVICE",
    desc: "orem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. orem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  person_2: {
    image: third,
    name: "Angel P.",
    date: "March 30, 2019",
    heading: "WONDERFUL PRODUCT I AM ALREADY",
    desc: "orem Ipsum is not simply random text. It has roots in a piece of classical.",
  },
});

export default function Testimonial() {
  return (
    <div className="mx-auto py-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ padding: "70px 0px", background: "#F7F7F7" }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 30,
          }
        }}
      >
        {persons.map(({ person_1, person_2 }, index) => (
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
