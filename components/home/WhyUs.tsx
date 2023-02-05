import React from 'react'
import Image from 'next/image';

// svgs
import why_us_icon_1 from '/public/images/why_us_icon1.svg';
import why_us_icon_2 from '/public/images/why_us_icon2.svg';
import why_us_icon_3 from '/public/images/why_us_icon3.svg';
import why_us_icon_4 from '/public/images/why_us_icon4.svg';


const cards_data = [
    {
        image: why_us_icon_1,
        title: 'Verified vehicles',
        description: 'Maecenas posuere lectus etiam dictumst tempus justo ultrices a. Ullamcorper non.'
    },
    {
        image: why_us_icon_2,
        title: 'Big network',
        description: 'Neque velit urna nisl enim sed sed ornare accumsan elementum. Quis vitae tellus.'
    },
    {
        image: why_us_icon_3,
        title: 'Available 24/7',
        description: 'Curabitur maecenas ornare est et est tortor vel pretium. Consequat sed neque posuere.'
    },
    {
        image: why_us_icon_4,
        title: 'Rent car fast',
        description: 'Sit ipsum convallis in nunc maecenas orci dignissim. Id nulla quis porta pretium.'
    }
]
function WhyUs() {
  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] bg-[#F5F7FF] py-12 px-4 md:px-14 mx-auto">
        <div className=" md:w-1/2 flex flex-col justify-center">
            <h4 className='uppercase text-primary text-lg'>What makes us unique</h4>
            <h3 className=' max-w-md mt-4 text-lg  md:text-3xl text-justify md:font-[600]'>The Horus makes it easy to discover, book and unlock affordable vehicles from owners in your area. Take your pick from dazzling electric city cars to family SUVs with plenty of storage. Skip the counter today and join the car sharing revolution.</h3>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 md:lg:xl:grid-cols-2 group gap-8 md:gap-5 mt-8 md:mt-0">
            {
                cards_data.map(({image, title, description}) => (
                    <div
                    key={title}
                    className=" shadow-lg py-10 px-6 flex flex-col group cursor-pointer bg-white">
                        <Image src={image} alt="icon" width={50} height={10} />
                    <p className="text-xl font-medium text-slate-700 mt-3">{title}</p>
                    <p className="mt-2 text-sm text-slate-500 md:max-w-[250px]">{description}</p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default WhyUs