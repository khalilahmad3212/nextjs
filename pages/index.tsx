import { Inter } from "@next/font/google";
import TopBar from "../components/home/TopBar";
import Navbar from "../components/Generic/Navbar";
import Hero from "../components/home/Hero";
import CookieBanner from "../components/home/CookieBanner";
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

import printData from "../print";
import Cars from "../components/Generic/Cars";

export default function Home({
  data,
  topNavigation,
  footerNavigation,
  featuredCars,
  testimonials,
}: any) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <TopBar />
      <Navbar navigation={topNavigation} />
      <Hero content={data.content[0]} />
      <CookieBanner />

      <Features features={data.features[0]} />

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
        <Cars featuredCars={featuredCars} />
      </div>

      <Instructions instructions={data.instructions[0]} />

      <Testimonial testimonials={testimonials} />
      <Banner />
      <Footer navigations={footerNavigation} />
    </>
  );
}

export async function getStaticProps() {
  const homeData = await client.fetch(`*[_type == 'home']`);

  let featuredCars = [];
  for (let i = 0; i < homeData[0].featuredCars.length; i++) {
    let carProduct = await client.fetch(
      `*[_type == 'product' && _id == '${homeData[0].featuredCars[i]._ref}']`
    );
    featuredCars.push(carProduct[0]);
  }


  // feching navigations
  let navigationData = await client.fetch(`*[_type == 'navigation']`);
  
  let topNavigationData = navigationData.filter(
    (item: any) => item.navId.current === "mainMenu"
  );
  
  let footerNavigationData = navigationData.filter(
    (item: any) => item.navId.current !== "mainMenu"
  );

  // fetching testimonial data
  let testimonials: any = [];
  const testimonialsData = await client.fetch(`*[_type == 'testimonial']`);

  if (testimonialsData.length % 2) {
    let temp = testimonialsData[testimonialsData.length - 1];
    testimonialsData.push(temp);
  }

  let end = Math.floor(testimonialsData.length / 2);

  for (let i = 0; i < end; i++) {
    testimonials.push({
      person_1: testimonialsData[i],
      person_2: testimonialsData[i + end],
    });
  }

  return {
    props: {
      data: homeData[0],
      topNavigation: topNavigationData[0],
      footerNavigation: footerNavigationData,
      featuredCars,
      testimonials,
    },
  };
}
