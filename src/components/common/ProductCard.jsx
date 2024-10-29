"use client";
import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.product_slug}`}>
      <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg transition-transform transform hover:shadow-xl sm:hover:scale-105">
        <div className="relative mb-4">
          <Image
            width={100}
            height={100}
            src={product.attachment[0].file_path}
            alt={product.names.en}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-current" />
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
          } mb-2`}
        >
          {product.number_of_products_availble ? "IN STOCK" : "OUT OF STOCK"}
        </p>
        <p className="font-bold text-lg mb-2">
          {product.price.price.toFixed(2)} ₹
        </p>
        <div className="flex justify-between items-center">
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
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
