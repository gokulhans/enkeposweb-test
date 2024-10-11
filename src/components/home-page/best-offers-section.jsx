import React from "react";

const OfferCard = ({
  title,
  description,
  discount,
  imageSrc,
  textColor,
  position,
}) => (
  <div
    className={`rounded-xl overflow-hidden flex-1 min-w-[200px] h-[250px] relative bg-cover bg-center`}
    style={{ backgroundImage: `url(${imageSrc})` }}
  >
    {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
    <div
      className={`p-6 flex flex-col h-full w-56 z-10 ${
        position === "right" ? "absolute right-0" : "relative"
      }`}
    >
      <div className="mb-4">
        <h3 className={` ${textColor} text-sm font-semibold mb-1`}>{title}</h3>
        <p className={`${textColor} text-2xl font-bold mb-1`}>{description}</p>
        <p className={`${textColor} text-2xl font-bold`}>{discount}</p>
      </div>
      <div className="mt-auto">
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-100 transition-colors">
          SHOP NOW
        </button>
      </div>
    </div>
  </div>
);

const BestOffersSection = () => {
  return (
    <div className="container mx-auto px-12 py-8">
      <h2 className="flex justify-start text-3xl font-bold text-center mb-8">Best Offers</h2> 
      <div className="flex flex-wrap gap-6 px-16">
        <OfferCard
          title="HEALTHY FOOD"
          description="100 ORGANIC"
          discount="UP TO 35%"
          imageSrc="https://epos.enke.in/modules/shop/img/discount_img01.jpg"
          textColor="text-white"
          position="right"
        />
        <OfferCard
          title="HEALTHY FOOD"
          description="HYGIENICALLY PACKED"
          discount=""
          imageSrc="https://epos.enke.in/modules/shop/img/discount_img02.jpg"
          textColor="text-white"
          position="right"
        />
        <OfferCard
          title="HEALTHY FOOD"
          description="BABY FAVORITE"
          discount="UP TO 15%"
          imageSrc="https://epos.enke.in/modules/shop/img/discount_img03.jpg"
          textColor="text-black"
        />
      </div>
    </div>
  );
};

export default BestOffersSection;
