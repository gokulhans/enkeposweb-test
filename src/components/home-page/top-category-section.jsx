// app/components/TopCategoriesSection.js
import React from "react";
import Image from "next/image";

const TopCategoriesSection = ({ categories }) => {
  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((category) => (
            <div
              key={category.category_id}
              className="flex flex-col items-center"
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
      </div>
    </section>
  );
};

export default TopCategoriesSection;
