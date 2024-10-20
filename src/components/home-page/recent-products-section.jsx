import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RecentProductsSection = ({ products }) => {
  return (
    <div className="container mx-auto py-16 px-6 lg:px-16">
      <div className="flex justify-start items-center mb-8">
        <h2 className="text-4xl font-bold">Recent Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
        {products.map((product) => (
          <Link
            key={product.product_id}
            href={`/product/${product.product_id}`}
          >
            <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105">
              <div className="relative mb-4">
                <Image
                  width={100}
                  height={100}
                  src={product.attachment[0].file_path}
                  alt={product.names.en}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {/* <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                NEW
              </span> */}
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <h3 className="font-semibold text-lg mb-2 truncate">
                {product.names.en}
              </h3>
              <p
                className={`text-sm ${
                  product.number_of_products_availble
                    ? "text-green-600"
                    : "text-red-600"
                } mb-4`}
              >
                {product.number_of_products_availble
                  ? "IN STOCK"
                  : "OUT OF STOCK"}
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <button className="border border-gray-300 rounded-l px-3 py-1 hover:bg-gray-100">
                    -
                  </button>
                  <span className="border-t border-b border-gray-300 px-3 py-1">
                    1
                  </span>
                  <button className="border border-gray-300 rounded-r px-3 py-1 hover:bg-gray-100">
                    +
                  </button>
                </div>
                <p className="font-bold text-lg">
                  {product.price.price.toFixed(2)} ₹
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProductsSection;
