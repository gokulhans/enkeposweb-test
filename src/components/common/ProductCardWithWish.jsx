"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import showToast from "@/app/utils/toastUtil";
import { addToCart } from "@/lib/api";

const ProductCardWithWish = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (productId) => {
    setLoading(true); // Set loading state
    try {
      const data = await addToCart(productId, quantity);

      if (data.status === "success") {
        setQuantity(1); // Reset quantity after adding to cart
        showToast("Product added to cart", "success");
      } else {
        showToast(data.message, "error");
      }
    } catch (error) {
      showToast("Failed to add to cart", "error");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div key={product.product_id}>
      <div className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:shadow-xl sm:hover:scale-105">
        <div className="relative mb-4">
          <Image
            width={100}
            height={100}
            src={product.attachment[0].file_path}
            alt={product.names.en}
            className="w-full h-48 object-cover rounded-lg"
          />
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-2 truncate">
          <Link href={`/product/${product.product_slug}`}>
            {product.names.en}
          </Link>
        </h3>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <button
              onClick={decreaseQuantity}
              className="border border-gray-300 rounded-l px-3 py-1 hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="border-t border-b border-gray-300 px-3 py-1">
              {quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className="border border-gray-300 rounded-r px-3 py-1 hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <p className="font-bold text-md">
            {product.price.price.toFixed(2)} ₹
          </p>
        </div>
        <button
          onClick={() => handleAddToCart(product.product_id)}
          className={`w-full bg-pink-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-pink-600 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
          aria-label="Add to cart"
        >
          {loading ? "Adding..." : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};

export default ProductCardWithWish;
