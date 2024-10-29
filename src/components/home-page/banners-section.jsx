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
    <div className="container mx-auto p-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
        {/* Left Banner */}
        <div className="md:col-span-5 relative h-96 sm:h-64 md:h-96">
          <Image
            className="rounded-lg"
            src={placeholderImage}
            alt="Left Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Middle Banners */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 gap-4">
          <div className="relative h-96 sm:h-40 md:h-44">
            <Image
              className="rounded-lg"
              src={placeholderImage2}
              alt="Middle Banner 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-96 sm:h-40 md:h-44">
            <Image
              className="rounded-lg"
              src={placeholderImage3}
              alt="Middle Banner 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Banner */}
        <div className="md:col-span-2 flex items-center justify-center">
          <div className=" w-64 relative h-96 md:h-96">
            <Image
              className="rounded-lg w-full"
              src={placeholderImage4}
              alt="Right Banner"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannersSection;
