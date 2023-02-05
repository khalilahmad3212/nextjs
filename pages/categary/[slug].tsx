import React from 'react'
import Heading from '../../components/categary/Heading'
import NavigationAndFilter from '../../components/categary/NavigationAndFilter'
import Pagignation from '../../components/categary/Pagignation'
import Cars from '../../components/Generic/Cars'
import Footer from '../../components/Generic/Footer'
import Navbar from '../../components/Generic/Navbar'
import TopBar from '../../components/home/TopBar'


import client from '../../client';
import Check from '../../components/categary/pagination/Check'

function Categary({ cars_data }: any) {
  return (
    <>
        <TopBar />
        <Navbar />
        <Heading />
        <NavigationAndFilter />
        <Cars cars_data={cars_data}/>
        <Pagignation />
        <Check />
        <Footer />
    </>
  )
}

export default Categary


export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "categary"]`
  );
  
  // console.log('\n\n\n check: ', paths, '\n\n\n');
  
  return {
    paths: paths.map(({ slug }: any) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  
  // It's important to default the slug so that it doesn't return "undefined"
  const cars_data = await client.fetch(`*[_type == 'car']{
    title,
    description,
    "imageUrl": car_image.asset->url
  }`);

  // console.log('carData: : : ', cars_data.length);
  
  // console.log('\n\nCars: ', cars_data);
    
  return {
    props: {
      cars_data
    }
  }
}