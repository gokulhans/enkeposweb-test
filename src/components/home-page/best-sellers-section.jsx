"use client";
import React, { useMemo, useState, useEffect } from "react";
import useProducts from "@/app/hooks/useProducts";
import ProductCardWithWish from "../common/ProductCardWithWish";
import { LoadingSpinner } from "../common/LoadingSpinner";
import CategorySelect from "../common/CategorySelect";
import useCategories from "@/app/hooks/useCategories";
import ShowErrorMessage from "../common/ShowErrorMessage";
import ShowEmptyMessage from "../common/ShowEmptyMessage";

const BestSellersSection = ({ title }) => {
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.id || ""
  ); // Default to first category
  const [page, setPage] = useState(1); // Track current page
  const [allProducts, setAllProducts] = useState([]); // Store all products

  const filters = useMemo(
    () => ({ category: selectedCategory, page }),
    [selectedCategory, page]
  );

  const { products, loading, error } = useProducts(filters);

  // Effect to load more products when scrolling to the bottom
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Check if already loading to avoid duplicate requests
        if (!loading) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  // Effect to update allProducts when new products are fetched
  useEffect(() => {
    if (products.length > 0) {
      setAllProducts((prevProducts) => [...prevProducts, ...products]);
    }
  }, [products]); // Runs every time new products are fetched

  return (
    <div className="container mx-auto py-16 px-6 lg:px-16">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-center">{title}</h2>
        <div className="pt-5 sm:p-0 w-full sm:w-1/3">
          <CategorySelect
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>

      {error && <ShowErrorMessage error={error} />}
      {loading && page === 1 ? (
        <LoadingSpinner />
      ) : allProducts.length === 0 ? (
        <ShowEmptyMessage message="No products found" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <ProductCardWithWish key={product.product_id} product={product} />
          ))}
        </div>
      )}
      {/* Show loading spinner for additional products when scrolling */}
      {loading && page > 1 && <LoadingSpinner />}
    </div>
  );
};

export default BestSellersSection;
