import React from "react";
import { ShoppingCart, X } from "lucide-react";
import Image from "next/image";

const Wishlist = () => {
  return (
    <div className="w-full max-w-7xl mx-auto shadow-xl p-4 sm:p-8 m-4 sm:m-16">
      {/* Table Container with horizontal scroll */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Scrollable container */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {" "}
            {/* Minimum width to prevent squishing */}
            {/* Table Header - Visible on all screens */}
            <div className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 bg-gray-50 p-4 border-b">
              <div className="text-gray-700 font-medium">PRODUCT</div>
              <div className="text-gray-700 font-medium">PRICE</div>
              <div className="text-gray-700 font-medium">DATE ADDED</div>
              <div className="text-gray-700 font-medium">STOCK STATUS</div>
              <div className="w-24"></div>
            </div>
            {/* Product Row - Same layout for all screen sizes */}
            <div className="p-4">
              <div className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 items-center">
                {/* Product Column */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <div
                      className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md"
                    >
                      <Image
                        src={
                          "https://epos-bucket.s3.ap-southeast-1.amazonaws.com/product/imagesnxkcIBbWmohew6dSkxQxcNuX3Nm8SRbi6uSTuHrj.png"
                        }
                        alt={"img alt"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Castro, Zimmerman and Jacobson Smart Headphones
                  </span>
                </div>

                {/* Price Column */}
                <div className="text-gray-900 font-semibold">2,500.00 ₹</div>

                {/* Date Column */}
                <div className="text-gray-600">2024 Oct, 23</div>

                {/* Stock Status Column */}
                <div className="text-green-500 font-medium">In Stock</div>

                {/* Actions Column */}
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
