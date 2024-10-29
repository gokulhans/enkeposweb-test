"use client";
import React, { Fragment } from "react";
import ProductInfo from "@/components/single-product-page/ProductInfo";
import ProductDetails from "@/components/single-product-page/ProductDetails";
import ProductTabs from "@/components/single-product-page/ProductTabs";
import useProductBySlug from "@/app/hooks/useProductBySlug";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import ShowErrorMessage from "@/components/common/ShowErrorMessage";

const SingleProductPage = ({ params }) => {
  const { slug } = params;
  const { product, loading, error } = useProductBySlug(slug);

  if (loading) return <LoadingSpinner />;
  if (error) return <ShowErrorMessage error={error} />;
  return (
    <Fragment>
      <ProductInfo product={product} />
      <ProductDetails product={product} />
      <ProductTabs product={product} />
    </Fragment>
  );
};

export default SingleProductPage;
