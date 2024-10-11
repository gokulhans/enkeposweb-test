import React from "react";
import Image from "next/image";

const categories = [
  {
    name: "Electronics",
    icon: "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/Owtpjeb18CalthcsGsfnWlBIZxb137QI5TIneBdd.jpg",
  },
  {
    name: "Home Appliances",
    icon: "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/Ifai2xQGkGVVyHMABw83xIalubaX6VgoFVOBqhgU.jpg",
  },
  {
    name: "Ceiling Fan",
    icon: "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/ZbIGwb9257Z82R8M212gQVftdntbqJxUKnCOjNkV.jpg",
  },
  {
    name: "Pedastrial Fan",
    icon: "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/ZbIGwb9257Z82R8M212gQVftdntbqJxUKnCOjNkV.jpg",
  },
];

const TopCategoriesSection = () => {
  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center">
              <div className="bg-white rounded-full mb-4 shadow-md">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="w-36 h-36 object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategoriesSection;
