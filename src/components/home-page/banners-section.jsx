import React from "react";
import Image from "next/image";

const placeholderImage =
  "https://epos.enke.in/modules/shop/img/slider_banner03.jpg";
const placeholderImage2 =
  "https://epos.enke.in/modules/shop/img/slider_banner01.jpg";
const placeholderImage3 =
  "https://epos.enke.in/modules/shop/img/slider_banner02.jpg";
const placeholderImage4 =
  "https://epos.enke.in/modules/shop/img/slider_banner03.jpg";

const BannersSection = () => {
  return (
    <div className="container h-96 my-8 mb-16 mx-auto p-4 px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-screen">
        {/* Left Banner */}
        <div className="md:col-span-1 relative h-96">
          <Image
            src={placeholderImage}
            alt="Left Banner"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Middle Banners */}
        <div className="md:col-span-2 grid grid-rows-2 gap-4 h-96">
          {/* {[...Array(2)].map((_, index) => ( */}
          <div className="relative h-48">
            <Image
              src={placeholderImage2}
              alt={`Middle Banner `}
              layout="fill"
              className="object-cover h-48"
              objectFit="cover"
            />
          </div>
          <div className="relative">
            <Image
              src={placeholderImage3}
              alt={`Middle Banner`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* ))} */}
        </div>

        {/* Right Banner */}
        <div className="md:col-span-1 h-96 relative">
          <Image
            src={placeholderImage4}
            alt="Right Banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BannersSection;
