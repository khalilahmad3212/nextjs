import React, { useContext } from 'react'
import { CarContext } from '../../context/carContext'
import BreadCrumb from './BreadCrumb'
import Filtering from './Filtering'

function NavigationAndFilter({ categary }: any) {

  const { setcarsData, slug, minValue, maxValue, brand, transmission }: any = useContext(CarContext);

  async function fetchCarsData() {
    fetch('/api/cars-data?' + new URLSearchParams({
      slug,
      minValue,
      maxValue,
      brand,
      transmission
    }))
      .then((res) => res.json())
      .then((data) => {
        setcarsData(data.data);
        console.log('Data Fetched!');
        
        console.log(data.data); 
      })
  }

  return (
    <div className='max-w-[1440px] mx-auto flex justify-between px-12 mt-8'>
        <BreadCrumb categary={categary}/>
        <Filtering fetchCarsData={fetchCarsData}/>
    </div>
  )
}

export default NavigationAndFilter