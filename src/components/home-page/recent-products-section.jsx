"use client";
import React from "react";
import useProducts from "@/app/hooks/useProducts";
import { LoadingSpinner } from "../common/LoadingSpinner";
import ProductCard from "../common/ProductCard";
import ShowErrorMessage from "../common/ShowErrorMessage";

const RecentProductsSection = ({ title }) => {
  const { products, loading, error } = useProducts();
  if (loading) return <LoadingSpinner />;
  if (error) return <ShowErrorMessage error={error} />;

  return (
    <div className="container mx-auto py-16 px-6 lg:px-16">
      <div className="flex justify-start items-center mb-8">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecentProductsSection;
