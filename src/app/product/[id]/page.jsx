import React, { Fragment } from "react";
import Image from "next/image";
import { Star, Heart } from "lucide-react";
import ProductInfo from "@/components/single-product-page/ProductInfo";
import ProductDetails from "@/components/single-product-page/ProductDetails";
import ProductTabs from "@/components/single-product-page/ProductTabs";

const SingleProductPage = () => {
  return (
    <Fragment>
      <ProductInfo />
      <ProductDetails />
      <ProductTabs />
    </Fragment>
  );
};

export default SingleProductPage;
