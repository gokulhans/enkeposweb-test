// import React from "react";
// import Image from "next/image";
// import { Star, Heart } from "lucide-react";

// const ProductInfo = () => {
//   return (
//     <div className="container mx-auto p-6 md:px-32 md:mt-16">
//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Product Images */}
//         <div className="md:w-1/2">
//           <div className="mb-6 relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
//             <Image
//               src="https://epos-bucket.s3.ap-southeast-1.amazonaws.com/product/imagesyv1ZcK1rFeh3ZIIWCK339W1YVH0jcqK4UsV1Zr7K.png"
//               alt="Product"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="flex gap-4">
//             <div className="relative w-1/4 aspect-square rounded-lg overflow-hidden shadow-md">
//               <Image
//                 src="https://epos-bucket.s3.ap-southeast-1.amazonaws.com/product/imagesyv1ZcK1rFeh3ZIIWCK339W1YVH0jcqK4UsV1Zr7K.png"
//                 alt="Product Thumbnail"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <div className="relative w-1/4 aspect-square rounded-lg overflow-hidden shadow-md">
//               <Image
//                 src="https://epos-bucket.s3.ap-southeast-1.amazonaws.com/product/imagesyv1ZcK1rFeh3ZIIWCK339W1YVH0jcqK4UsV1Zr7K.png"
//                 alt="Product Thumbnail"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="md:w-1/2">
//           <h1 className="text-3xl font-bold mb-4">
//             Meyer, Bowen and Perry Ultra Cleaner
//           </h1>
//           <div className="flex items-center mb-4">
//             <span className="text-gray-600 mr-4">Brand: Ganic</span>
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-5 h-5 text-yellow-400 fill-current"
//                 />
//               ))}
//             </div>
//             <span className="ml-2 text-blue-600">Review</span>
//           </div>
//           <p className="text-gray-600 mb-2">ID: QZX8VGH</p>
//           <h2 className="text-4xl font-bold mb-2">247.94 ₹</h2>
//           <p className="text-red-600 font-bold mb-4">Out Of Stock</p>
//           <p className="text-gray-700 mb-4">
//             Organic food is food produced by methods complying with the
//             standards of organic farming. Standards vary worldwide, but organic
//             farming.
//           </p>
//           <ul className="mb-4 space-y-2">
//             <li className="flex items-center">
//               <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//               Type: Ice Cream
//             </li>
//             <li className="flex items-center">
//               <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//               XPD: Aug 19 2021
//             </li>
//             <li className="flex items-center">
//               <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//               CO: Ganic
//             </li>
//           </ul>
//           <div className="flex items-center mb-6">
//             <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l">
//               -
//             </button>
//             <input
//               type="text"
//               value="1"
//               className="w-12 text-center border-t border-b border-gray-300"
//               readOnly
//             />
//             <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r">
//               +
//             </button>
//             <button className="ml-4 bg-blue-600 text-white px-6 py-2 rounded transition duration-300 hover:bg-blue-600">
//               ADD TO CART
//             </button>
//           </div>
//           <button className="flex items-center text-gray-600 mb-4">
//             <Heart className="mr-2" />
//             Add To Wishlist
//           </button>
//           <div className="mt-4">
//             <p className="text-gray-600">TAG: ICE CREAM</p>
//             <p className="text-gray-600">
//               CATEGORIES: WOMEN'S, BIKINI, TOPS FOR, LARGE BUST
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;

import React from "react";
import Image from "next/image";
import { Star, Heart } from "lucide-react";

const ProductInfo = ({ product }) => {
  // Destructure necessary fields from product
  const { product_name, names, price, attachment } = product;

  return (
    <div className="container mx-auto p-6 md:px-32 md:mt-16">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="mb-6 relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image
              src={attachment[0]?.file_path || ""}
              alt={attachment[0]?.alt || "Product Image"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex gap-4">
            {attachment.map((img, index) => (
              <div
                key={index}
                className="relative w-1/4 aspect-square rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={img.file_path}
                  alt={img.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{names.en}</h1>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-4">
              Brand: {product.product_props[0]?.master_value}
            </span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="ml-2 text-blue-600">Review</span>
          </div>
          <h2 className="text-4xl font-bold mb-2">{price.price} ₹</h2>
          {price.old_price !== "No price available" && (
            <p className="text-red-600 font-bold mb-4">{price.old_price}</p>
          )}
          <p className="text-gray-700 mb-4">
            {product.description || "No description available."}
          </p>
          <div className="flex items-center mb-6">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l">
              -
            </button>
            <input
              type="text"
              value="1"
              className="w-12 text-center border-t border-b border-gray-300"
              readOnly
            />
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r">
              +
            </button>
            <button className="ml-4 bg-blue-600 text-white px-6 py-2 rounded transition duration-300 hover:bg-blue-600">
              ADD TO CART
            </button>
          </div>
          <button className="flex items-center text-gray-600 mb-4">
            <Heart className="mr-2" />
            Add To Wishlist
          </button>
          <div className="mt-4">
            <p className="text-gray-600">TAG: {product.category[0]?.name}</p>
            <p className="text-gray-600">
              CATEGORIES: {product.category.map((c) => c.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
