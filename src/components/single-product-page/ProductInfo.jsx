import React from "react";
import Image from "next/image";
import { Star, Heart } from "lucide-react";

const ProductInfo = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="mb-4 relative w-full aspect-square">
            <Image
              src="https://epos-bucket.s3.ap-southeast-1.amazonaws.com/product/imagesyv1ZcK1rFeh3ZIIWCK339W1YVH0jcqK4UsV1Zr7K.png"
              alt="Product"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex gap-4">
            <div className="relative w-1/4 aspect-square">
              <Image
                src="https://epos-bucket.s3.ap-southeast-1.amazonaws.com/product/imagesyv1ZcK1rFeh3ZIIWCK339W1YVH0jcqK4UsV1Zr7K.png"
                alt="Product Thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-1/4 aspect-square">
              <Image
                src="https://epos-bucket.s3.ap-southeast-1.amazonaws.com/product/imagesyv1ZcK1rFeh3ZIIWCK339W1YVH0jcqK4UsV1Zr7K.png"
                alt="Product Thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">
            Meyer, Bowen and Perry Ultra Cleaner
          </h1>
          <div className="flex items-center mb-2">
            <span className="text-gray-600 mr-2">Baands : Ganic</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="ml-2 text-blue-600">Review</span>
          </div>
          <p className="text-gray-600 mb-2">ID : QZX8VGH</p>
          <h2 className="text-3xl font-bold mb-2">247.94 ₹</h2>
          <p className="text-red-600 font-bold mb-4">Out Of Stock</p>
          <p className="text-gray-700 mb-4">
            Organic food is food produced by methods complying with the
            standards of Rganic farming. Standards vary Lorem ipsum dolor sit
            amet, consectetur adipiscing worldwide, but organic farming.
          </p>
          <ul className="mb-4">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Type : Ice Cream
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              XPD : Aug 19 2021
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>CO
              : Ganic
            </li>
          </ul>
          <div className="flex items-center mb-4">
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l">
              -
            </button>
            <input
              type="text"
              value="1"
              className="w-12 text-center border-t border-b"
              readOnly
            />
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r">
              +
            </button>
            <button className="ml-4 bg-blue-500 text-white px-6 py-2 rounded">
              ADD TO CART
            </button>
          </div>
          <button className="flex items-center text-gray-600">
            <Heart className="mr-2" />
            Add To Wishlist
          </button>
          <div className="mt-4">
            <p className="text-gray-600">TAG : ICE CREAM</p>
            <p className="text-gray-600">
              CATEGORIES : WOMEN'S, BIKINI, TOPS FOR, LARGE BUST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
