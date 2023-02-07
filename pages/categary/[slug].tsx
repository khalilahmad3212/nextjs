import React, { useContext, useEffect, useState } from "react";
import Heading from "../../components/categary/Heading";
import NavigationAndFilter from "../../components/categary/NavigationAndFilter";

import Footer from "../../components/Generic/Footer";
import Navbar from "../../components/Generic/Navbar";
import TopBar from "../../components/home/TopBar";

import client from "../../client";
import PaginatedData from "../../components/categary/pagination/PaginatedData";

import CarProvider, { CarContext } from "../../context/carContext";

function Categary({ cars_data, page_heading }: any) {
  const { setcarsData, settotalLength } = useContext(CarContext);

  useEffect(() => {
    setcarsData(cars_data)
    settotalLength(cars_data.length);
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <Heading heading={page_heading} />
      <NavigationAndFilter categary={page_heading} />
      <PaginatedData />
      <Footer />
    </>
  );
}

export default Categary;

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "categary"]`);

  return {
    paths: paths.map(({ slug }: any) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {

  let { slug = "electric-car" } = context;
  let categary_res =
    await client.fetch(`*[_type == 'categary' && slug == '${slug}']{
    categary
  }`);

  let { categary } = categary_res[0];

  // It's important to default the slug so that it doesn't return "undefined"
  const cars_data =
    await client.fetch(`[_type=="car" && references([_type=="categary" && slug == '${slug}']._id)]{
    title,
    description,
    "imageUrl": car_image.asset->url
  }`);

  console.log("cars; data: ", cars_data);

  return {
    props: {
      cars_data,
      page_heading: categary,
    },
  };
}