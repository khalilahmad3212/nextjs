import React from 'react'
import BreadCrumb from './BreadCrumb'
import Filtering from './Filtering'

function NavigationAndFilter() {
  return (
    <div className='max-w-[1440px] mx-auto flex justify-between px-12 mt-8'>
        <BreadCrumb />
        <Filtering />
    </div>
  )
}

export default NavigationAndFilter