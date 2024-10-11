import React from "react";
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Washing Machine",
    price: 30000.0,
    inStock: false,
    image:
      "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/Owtpjeb18CalthcsGsfnWlBIZxb137QI5TIneBdd.jpg",
  },
  {
    id: 2,
    name: "Castro, Zimmerman an...",
    price: 2500.0,
    inStock: true,
    image:
      "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/Ifai2xQGkGVVyHMABw83xIalubaX6VgoFVOBqhgU.jpg",
  },
  {
    id: 3,
    name: "Meyer, Bowen and Per...",
    price: 247.94,
    inStock: false,
    image:
      "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/ZbIGwb9257Z82R8M212gQVftdntbqJxUKnCOjNkV.jpg",
  },
  {
    id: 4,
    name: "Anderson-Walker Eco...",
    price: 7500.0,
    inStock: true,
    image:
      "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/ZbIGwb9257Z82R8M212gQVftdntbqJxUKnCOjNkV.jpg",
  },
  {
    id: 5,
    name: "Anderson-Walker Eco...",
    price: 7500.0,
    inStock: true,
    image:
      "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/Ifai2xQGkGVVyHMABw83xIalubaX6VgoFVOBqhgU.jpg",
  },
  {
    id: 6,
    name: "Washing Machine",
    price: 30000.0,
    inStock: false,
    image:
      "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/Owtpjeb18CalthcsGsfnWlBIZxb137QI5TIneBdd.jpg",
  },
  {
    id: 7,
    name: "Castro, Zimmerman an...",
    price: 2500.0,
    inStock: true,
    image:
      "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/Ifai2xQGkGVVyHMABw83xIalubaX6VgoFVOBqhgU.jpg",
  },
  {
    id: 8,
    name: "Meyer, Bowen and Per...",
    price: 247.94,
    inStock: false,
    image:
      "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/ZbIGwb9257Z82R8M212gQVftdntbqJxUKnCOjNkV.jpg",
  },
  {
    id: 9,
    name: "Anderson-Walker Eco...",
    price: 7500.0,
    inStock: true,
    image:
      "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/ZbIGwb9257Z82R8M212gQVftdntbqJxUKnCOjNkV.jpg",
  },
  {
    id: 10,
    name: "Anderson-Walker Eco...",
    price: 7500.0,
    inStock: true,
    image:
      "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/images/Ifai2xQGkGVVyHMABw83xIalubaX6VgoFVOBqhgU.jpg",
  },
];

const BestSellersSection = () => {
  return (
    <div className="container mx-auto py-12  px-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>
        <select className="border rounded p-2">
          <option>All Categories</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="relative">
              <Image
                width={100}
                height={100}
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-2"
              />
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-400 fill-current"
                />
              ))}
            </div>
            <h3 className="font-semibold mb-1 truncate">{product.name}</h3>
            <p
              className={`text-sm ${
                product.inStock ? "text-green-600" : "text-red-600"
              } mb-2`}
            >
              {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
            </p>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <button className="border rounded-l px-2 py-1">-</button>
                <span className="border-t border-b px-2 py-1">1</span>
                <button className="border rounded-r px-2 py-1">+</button>
              </div>
              <p className="font-bold">{product.price.toFixed(2)} ₹</p>
            </div>
            <button className="w-full bg-pink-500 text-white py-2 rounded flex items-center justify-center">
              <Heart size={16} className="mr-2" />
              ADD TO WISHLIST
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 pt-8">
        <button className="mx-1 px-3 py-1 border rounded">
          <ChevronLeft size={16} />
        </button>
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <button
            key={page}
            className={`mx-1 px-3 py-1 border rounded ${
              page === 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button className="mx-1 px-3 py-1 border rounded">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BestSellersSection;
