"use client";
import SearchProducts from "@/components/search/SearchProducts";
import { Fragment, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation"; // Import to retrieve search params
import useProducts from "../hooks/useProducts";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import ShowEmptyMessage from "@/components/common/ShowEmptyMessage";
import ShowErrorMessage from "@/components/common/ShowErrorMessage";
import useToastOnLoad from "../hooks/useToastOnLoad";

export default function CategoryProducts() {
  const searchParams = useSearchParams(); // Get search params from the URL
  const term = searchParams.get("term");
  const category = searchParams.get("category");
  const location = searchParams.get("location");

  // Use useMemo to avoid creating a new filters object on every render
  const filters = useMemo(
    () => ({
      term,
      category,
      location,
    }),
    [term, category, location]
  );

  const { products, loading, error } = useProducts(filters);

  useToastOnLoad(loading, products, `${products.length} Products found!`);

  if (loading) return <LoadingSpinner />;
  if (error) return <ShowErrorMessage error={error} />;
  if (products.length === 0)
    return <ShowEmptyMessage messege={"No products found"} />;

  return (
    <Fragment>
      <div className="w-full md:px-16">
        {products.length > 0 && (
          <SearchProducts
            products={products}
            loading={loading}
            error={error}
            title={""}
          />
        )}
      </div>
    </Fragment>
  );
}
