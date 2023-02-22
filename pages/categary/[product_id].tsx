import React from "react";
import Footer from "../../components/Generic/Footer";
import Navbar from "../../components/Generic/Navbar";
import CarData from "../../components/product/CarData";
import TopBar from "../../components/home/TopBar";
import ProductSlider from "../../components/product/ProductSlider";
import client from "../../client";


function Product({ car_data, topNavigation, footerNavigation }: any) {

  return (
    <>
      {/* <Head>
        <title>{data.title}</title>
      </Head> */}
      <TopBar />
      <Navbar navigation={topNavigation} />
      <ProductSlider sliderImages={[car_data.image_01,car_data.image_02, car_data.image_03]}/>
      <CarData 
        title={car_data.title}
        description={car_data.detailed_description}
        tags={car_data.tags}
      />
      <Footer navigations={footerNavigation}/>
    </>
  );
}

export default Product;


export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "car"]{_id}`);

  return {
    paths: paths.map(({ _id }: any) => ({ params: { slug: _id } })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {

  let { slug = "6cea0add-26bb-475e-9aba-c0f3e427576a" } = context;
  let car_data =
    await client.fetch(`*[_type == 'car' && _id == '${slug}']{
      title,
      detailed_description,
      "image_01": car_image_01.asset->url,
      "image_02": car_image_02.asset->url,
      "image_03": car_image_03.asset->url,
      tags
  }`);

  let navigationData = await client.fetch(`*[_type == 'navigation']`);
  let topNavigationData = navigationData.filter(
    (item: any) => item.navId.current === "mainMenu"
  );
  let footerNavigationData = navigationData.filter(
    (item: any) => item.navId.current !== "mainMenu"
  );

  return {
    props: {
      car_data: car_data[0],
      topNavigation: topNavigationData,
      footerNavigation: footerNavigationData
    },
  };
}