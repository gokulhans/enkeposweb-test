// import Image from "next/image";

// const ProductDetails = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Product Details</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="relative aspect-square w-full">
//           <Image
//             src="https://epos-bucket.s3.ap-southeast-1.amazonaws.com/product/imagesMlR2hHNA8EwbQcuUkjLPwgpz4tAhEbUQ5uX3EVpv.png"
//             alt="Product Image"
//             fill
//             className="object-cover rounded-lg"
//             priority
//           />
//         </div>

//         <div className="space-y-4">
//           <h2 className="text-xl font-semibold text-green-700">
//             100% Natural Vitamin
//           </h2>

//           <p className="text-gray-600">
//             Cramond Leopard & Pythong Print Anorak Jacket In Beige but also the
//             leap into electronic typesetting, remaining Lorem Ipsum is simply
//             dummy text of the printing and typesetting industry. Lorem Ipsum has
//             been the industry's standard dummy text ever since the 1500s, when
//             an unknown printer took a galley of type and scrambled it to make a
//             type specimen book.
//           </p>

//           <ul className="space-y-2 text-gray-700">
//             <li className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-gray-400 rounded-full" />
//               65% poly, 35% rayon
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-gray-400 rounded-full" />
//               Hand wash cold
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-gray-400 rounded-full" />
//               Partially lined
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-gray-400 rounded-full" />
//               Hidden front button closure with keyhole accents
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-gray-400 rounded-full" />
//               Button cuff sleeves
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-gray-400 rounded-full" />
//               Lightweight semi-sheer fabrication
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-gray-400 rounded-full" />
//               Made in USA
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import Image from "next/image";

const ProductDetails = ({ product }) => {
  const { product_props } = product;

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col items-start justify-start w-full">
      <h1 className="text-2xl font-bold mb-6">Product Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative aspect-square w-full h-96">
          <Image
            src={product.attachment[0]?.file_path || ""}
            alt="Product Image"
            layout="fill"
            objectFit="contain"
            className=" rounded-lg"
            priority
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-green-700">
            {product_props[0]?.master_value}
          </h2>

          <p className="text-gray-600">
            {/* Add product description or other relevant text here */}
            {product.description || "No additional details available."}
          </p>

          <ul className="space-y-2 text-gray-700">
            {product_props.map((prop) => (
              <li key={prop.id} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full" />
                {prop.label}: {prop.master_value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
