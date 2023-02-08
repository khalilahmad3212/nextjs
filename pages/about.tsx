import React from "react";
import AboutBreadCrumb from "../components/about/AboutBreadCrumb";
import Brands from "../components/about/Brands";
import Capabalities from "../components/about/Capabalities";
import Testimonial from "../components/about/Testimonial";
import Footer from "../components/Generic/Footer";
import Navbar from "../components/Generic/Navbar";
import Banner from "../components/home/Banner";
import TopBar from "../components/home/TopBar";
import Carousel from "../components/about/Carousol";
import MediaBlock from "../components/about/BTestimonial";

import image from "/public/images/about/image.png";
let heading = "Eu tincidunt amet vulputate consectetur";
let description =
  "Nunc sed lorem a a id. Faucibus sed amet arcu mattis elementum erat. Mauris id donec et tellus ac aliquam augue erat aliquam. Non vel dapibus sociis porttitor sit quam. Lectus feugiat mattis augue turpis duis dapibus diam maecenas. Faucibus massa dictumst aliquam mauris tempus purus sit. Nulla aliquet sed blandit odio enim lorem quis. Elementum adipiscing in blandit ligula fringilla. Suspendisse elementum senectus in convallis ut tempus sed.";

import topImage from "/public/images/about/about_top.png";
import Image from "next/image";

function about() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div className="mb-7">
        <Image src={topImage} alt='about image' className="w-full"/>
      </div>
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <AboutBreadCrumb />
      </div>
      <Capabalities />
      <Carousel />
      <Testimonial />
      <MediaBlock
        imageSrc={image}
        heading={heading}
        description={description}
      />
      <Brands />

      <Banner />
      <Footer />
    </>
  );
}

export default about;