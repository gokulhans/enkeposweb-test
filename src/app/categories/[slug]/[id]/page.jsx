"use client";
import useProducts from "@/app/hooks/useProducts";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import ProductCardWithWish from "@/components/common/ProductCardWithWish";
import ShowEmptyMessage from "@/components/common/ShowEmptyMessage";
import ShowErrorMessage from "@/components/common/ShowErrorMessage";
import TopCategoriesSection from "@/components/home-page/top-category-section";
import { Fragment, useMemo } from "react";

function capitalizeWords(str) {
  if (!str) return str;
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CategoryProducts({ params }) {
  const { slug, id } = params;
  const formattedSlug = capitalizeWords(slug);

  const filters = useMemo(() => ({ category: id }), [id]);
  const { products, loading, error } = useProducts(filters);

  if (loading) return <LoadingSpinner />;
  if (error) return <ShowErrorMessage error={error} />;

  return (
    <Fragment>
      <div className="w-full md:px-16">
        <TopCategoriesSection />
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-center">{`${formattedSlug} Products`}</h2>
        </div>
        {products.length === 0 ? (
          <ShowEmptyMessage messege="No products found" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCardWithWish key={product.product_id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}
