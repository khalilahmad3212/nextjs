import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import getImageUrl from '../../../utils/getImageUrl';



function HeroRight({ heroGalleryImages }: any) {

    const [images, setimages] = useState([]);

    useEffect(() => {
        let imageUrls = heroGalleryImages.map((item:any) => getImageUrl(item))
        setimages(imageUrls);

    }, [])
    
    return (
    <div className="md:w-1/2 flex gap-3 mt-10 md:mt-0">
    <div className="flex flex-col gap-4">
      <Image
        src={images[0]}
        alt="car image"
        width={266}
        height={100}
      />
      <Image
        src={images[1]}
        alt="car image"
        width={266}
        height={50}
      />
    </div>
    <div className="flex flex-col gap-2">
      <Image
        src={images[2]}
        alt="car image"
        width={300}
        height={100}
      />
      <Image
        src={images[3]}
        alt="car image"
        width={300}
        height={100}
      />
    </div>
  </div>
  )
}

export default HeroRight