import React from 'react'
import Image from 'next/image';

import arrow from '/public/images/arrow_right_orange.svg';

function Banner() {
  return (
    <div className='max-w-[1100px] bg-[#FFC300] text-center mx-auto text-white py-16 px-4 md:px-16 -mb-10 relative z-10'>

        <h3 className='text-xl md:text-3xl w-full md:max-w-md mb-7 mx-auto font-bold md:font-normal'>You wanna get married and drive a nice car or you come visit Ivory Coast and you need a car?</h3>
        
        <div className="relative max-w-[13em] mx-auto rounded-full">
            <input
              type="email"
              placeholder="Book a car"
              className="px-5 py-2 bg-white text-[#222222] border-[#222222] focus:outline-none focus:border-[#222222] w-full rounded-full"
            />
            <span className="bg-white p-[8px] pt-3 pr-4 absolute right-0 rounded-tr-full rounded-br-full cursor-pointer">
              <Image src={arrow} alt="arrow" width={25} height={10}/>
            </span>
          </div>
    </div>
  )
}

export default Banner