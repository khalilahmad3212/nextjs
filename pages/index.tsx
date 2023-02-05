import { Inter } from "@next/font/google";
import TopBar from "../components/home/TopBar";
import Navbar from "../components/Generic/Navbar";
import Footer from "../components/Generic/Footer";
import Hero from "../components/home/Hero";
import CookieBanner from "../components/home/CookieBanner";
import WhyUs from "../components/home/WhyUs";
import Cars from "../components/Generic/Cars";
import Process from "../components/home/Process";
import Banner from "../components/home/Banner";
import Image from "next/image";

import right_arrow from "/public/images/arrow_right.svg";

const inter = Inter({ subsets: ["latin"] });

import client from "../client";
import Testimonial from "../components/home/Testimonial";

export default function Home({ cars_data }: any) {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <CookieBanner />
      <WhyUs />
      <div className="max-w-[1440px] mx-auto pt-24 px-5 mb-8 md:mb-16">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-2xl md:text-3xl font-semibold">Latest Available Cars</h4>
          <button className="w-[10em] mt-4 md:mt-0 border-2 border-gray-600 transition-all divide-neutral-500 text-black py-1 px-5 rounded-full flex flex-row items-center justify-between">
            <span>View All</span>
            <Image src={right_arrow} alt="icon" width={20} height={10} />
          </button>
        </div>
        <Cars cars_data={cars_data.slice(0, 3)} />
      </div>
      <Process />
      <Testimonial />
      <Banner />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const cars_data = await client.fetch(`*[_type == 'car']{
    title,
    description,
    "imageUrl": car_image.asset->url
  }`);

  console.log("\n\nCars: ", cars_data);

  return {
    props: {
      cars_data,
    },
  };
}
