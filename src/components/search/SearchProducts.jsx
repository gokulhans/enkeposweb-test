import React from "react";
import ProductCardWithWish from "../common/ProductCardWithWish";
import { LoadingSpinner } from "../common/LoadingSpinner";

const SearchProducts = ({ products, title }) => {
  return (
    <div className="container mx-auto py-16 px-6 lg:px-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-center">{title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCardWithWish key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
