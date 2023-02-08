// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';


import SliderCard from "./SliderCard";

// Import Swiper styles
import "swiper/css";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import first from "/public/images/product/one.png";
// import second from "/public/images/product/second.png";
// import last from "/public/images/product/last.png";

// const images = [first, second, last];

export default function ProductSlider({sliderImages}: any) {
  return (
    <div className="mx-auto py-10 px-10">
      {sliderImages && (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
          style={{padding: '20px 45px', height: '500px'}}
        >
          {sliderImages.map(() => (
            <SwiperSlide key={new Date().toString()}>
              <SliderCard images={sliderImages} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
