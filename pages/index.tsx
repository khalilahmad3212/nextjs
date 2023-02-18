import { Inter } from "@next/font/google";
import TopBar from "../components/home/TopBar";
import Navbar from "../components/Generic/Navbar";
import Fitooter from "../components/Generic/Footer";
import Hero from "../components/home/Hero";
import CookieBanner from "../components/home/CookieBanner";
import Cars from "../components/Generic/Cars";
import Process from "../components/home/Instructions";
import Banner from "../components/home/Banner";
import Image from "next/image";

import right_arrow from "/public/images/arrow_right.svg";

const inter = Inter({ subsets: ["latin"] });

import client from "../client";
import Testimonial from "../components/home/Testimonial";
import Footer from "../components/Generic/Footer";
import Head from "next/head";
import Features from "../components/home/Features";
import Instructions from "../components/home/Instructions";

export default function Home({ data }: any) {


  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <TopBar />
      <Navbar />
      <Hero content={data.content[0]}/>
      <CookieBanner />

      <Features features={data.features[0]}/>
      
      <div className="max-w-[1440px] mx-auto pt-24 px-5 mb-8 md:mb-16">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-2xl md:text-3xl font-semibold">
            Latest Available Cars
          </h4>
          <button className="w-[10em] mt-4 md:mt-0 border-2 border-gray-600 transition-all divide-neutral-500 text-black py-1 px-5 rounded-full flex flex-row items-center justify-between">
            <span>View All</span>
            <Image src={right_arrow} alt="icon" width={20} height={10} />
          </button>
        </div>
        {/* <Cars cars_data={cars_data.slice(0, 3)} /> */}
      </div>

      <Instructions instructions={data.instructions[0]} />
      
      {/* <Testimonial persons={persons}/> */}
      <Banner />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const homeData = await client.fetch(`*[_type == 'home']`);

  let data = {};

  let title = homeData[0].title;

  let content = homeData[0].content[0];
  let features = homeData[0].features[0]
  let instructions = homeData[0].instructions[0]


  return {
    props: {
      data: homeData[0],
    },
  };
}