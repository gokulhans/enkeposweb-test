import React from "react";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

const CartListSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 p-4 py-16">
      <div className="bg-white shadow-md rounded-lg p-4 flex-grow">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="text-sm font-semibold text-gray-600">PRODUCT</div>
          <div className="flex space-x-4">
            <div className="text-sm font-semibold text-gray-600">PRICE</div>
            <div className="text-sm font-semibold text-gray-600">QTY</div>
            <div className="text-sm font-semibold text-gray-600">TOTAL</div>
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-md">
              <Image
                src="https://epos-bucket.s3.ap-southeast-1.amazonaws.com/product/imagesnxkcIBbWmohew6dSkxQxcNuX3Nm8SRbi6uSTuHrj.png"
                width={100}
                height={100}
                alt="product"
              />
            </div>
            <div className="text-sm">
              Castro, Zimmerman and Jacobson Smart Headphones
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div>2500</div>
            <div className="flex flex-col items-center">
              <div>1</div>
              <div className="flex flex-col">
                <ChevronUp size={16} />
                <ChevronDown size={16} />
              </div>
            </div>
            <div>2500</div>
            <X size={16} className="text-gray-400" />
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
          REMOVE ALL FROM CART
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-64 lg:w-96">
        <h2 className="text-lg font-semibold mb-4">Product Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>2500</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-sm w-64">
            Castro, Zimmerman and Jacobson Smart Headphones
          </span>
          <span>₹ 2500</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total Price</span>
          <span className="text-blue-500">₹ 2500</span>
        </div>
        <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded-md">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartListSection;
