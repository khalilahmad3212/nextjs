import React from "react";
import AboutBreadCrumb from "../components/about/AboutBreadCrumb";
import Brands from "../components/about/Brands";
import Capabalities from "../components/about/Goals";
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

import Image from "next/image";
import client from "../client";
import getImageUrl from "../utils/getImageUrl";
import Head from "next/head";
import Leader from "../components/about/Leader";
import printData from "../print";

function About({ data, leaders, topNavigation, footerNavigation }: any) {

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <TopBar />
      <Navbar navigation={topNavigation} />
      
      <div className="mb-7">
        <Image
          src={getImageUrl(data.mainImage)}
          alt="about image"
          width={200}
          height={200}
          className="w-full"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <AboutBreadCrumb />
      </div>

      <Capabalities goals={data.goals[0].goalsList} />

      <Carousel images={data.imageGallery[0].images} />

      <Leader leaders={leaders} />

      <MediaBlock
        imageSrc={image}
        heading={heading}
        description={description}
      />
      <Brands />

      <Banner />
      <Footer navigations={footerNavigation} />
    </>
  );
}

export default About;

export async function getStaticProps() {

  const missionData = await client.fetch(`*[_type == 'mission']`);
  const leaders = await client.fetch(`*[_type == 'leader']`);


// Fetching Navigations
  let navigationData = await client.fetch(`*[_type == 'navigation']`);
  let topNavigationData = navigationData.filter(
    (item: any) => item.navId.current === "mainMenu"
  );
  let footerNavigationData = navigationData.filter(
    (item: any) => item.navId.current !== "mainMenu"
  );


  return {
    props: {
      data: missionData[0],
      leaders,
      topNavigation: topNavigationData[0],
      footerNavigation: footerNavigationData,
    },
  };
}
