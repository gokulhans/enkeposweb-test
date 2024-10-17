import React from "react";
import Image from "next/image";

const placeholderImage =
  "https://epos.enke.in/modules/shop/img/slider_bg01.jpg";
const placeholderImage2 =
  "https://epos.enke.in/modules/shop/img/slider_banner01.jpg";
const placeholderImage3 =
  "https://epos.enke.in/modules/shop/img/slider_banner02.jpg";
const placeholderImage4 =
  "https://epos.enke.in/modules/shop/img/slider_banner03.jpg";

const BannersSection = () => {
  return (
    <div className="container my-8 mb-16 mx-auto p-4 px-12 h-96">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-4 h-screen">
        {/* Left Banner */}
        <div className="md:col-span-5 relative h-72">
          <Image
            className="rounded-lg"
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
              className="rounded-lg"
              src={placeholderImage2}
              alt={`Middle Banner `}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src={placeholderImage3}
              alt={`Middle Banner`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* ))} */}
        </div>

        {/* Right Banner */}
        <div className="md:col-span-2 w-64 h-96 relative">
          <Image
            className="rounded-lg"
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
