"use client";
// app/components/TopCategoriesSection.js
import React, { useRef } from "react";
import Image from "next/image";

const TopCategoriesSection = ({ categories }) => {
  const sliderRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" }); // Adjust the scroll amount as needed
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" }); // Adjust the scroll amount as needed
    }
  };

  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <button onClick={scrollLeft} className="mr-2 p-2 rounded">
            &lt;
          </button>
          <div
            ref={sliderRef}
            className={`flex overflow-x-auto scrollbar-hide`} // Apply the scrollbar hide class
            style={{ scrollBehavior: "smooth" }}
          >
            {categories.map((category) => (
              <div
                key={category.category_id}
                className="flex flex-col items-center shrink-0 w-1/4 " // Adjust width for desired size
              >
                <div className="bg-white rounded-full mb-4 shadow-md">
                  <Image
                    src={category.category_icon}
                    alt={category.category_name}
                    width={100}
                    height={100}
                    className="w-36 h-36 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {category.category_name}
                </h3>
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className="ml-2 p-2 rounded">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCategoriesSection;
