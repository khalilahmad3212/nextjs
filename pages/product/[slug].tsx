import React from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Generic/Footer";
import Navbar from "../../components/Generic/Navbar";
import CarData from "../../components/product/CarData";
import TopBar from "../../components/home/TopBar";
import ProductSlider from "../../components/product/ProductSlider";
import client from "../../client";
import { log } from "console";

function Product({ car_data }: any) {
  return (
    <>
      <TopBar />
      <Navbar />
      <ProductSlider
        sliderImages={[car_data.image_01, car_data.image_02, car_data.image_03]}
      />
      <CarData
        title={car_data.title}
        description={car_data.detailed_description}
        tags={car_data.tags}
      />
      <Footer />
    </>
  );
}

export default Product;

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "car"]{_id}`);
  console.log("\n\n\n\nEntered\n\n\n\n");

  return {
    paths: paths.map(({ _id }: any) => ({ params: { slug: _id } })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  // console.log('\n\n\n\n\n\n');
  // console.log('context: ', context);
  // console.log('\n\n\n\n\n\n');

  let { slug } = context.params;
  let car_data = await client.fetch(`*[_type == 'car' && _id == '${slug}']{
      title,
      detailed_description,
      "image_01": car_image_01.asset->url,
      "image_02": car_image_02.asset->url,
      "image_03": car_image_03.asset->url,
      tags
  }`);

  // console.log('\n\n\n\n\n\n\n');
  // console.log('Car Data: ', car_data);
  // console.log('\n\n\n\n\n\n\n');

  return {
    props: {
      car_data: car_data[0],
    },
  };
}