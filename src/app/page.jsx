import BestOffersSection from "@/components/home-page/best-offers-section";
import BestSellersSection from "@/components/home-page/best-sellers-section";
import RecentProductsSection from "@/components/home-page/recent-products-section";
import TopCategoriesSection from "@/components/home-page/top-category-section";
import { Fragment } from "react";
import { fetchCategories, fetchProducts } from "./services/api";
import BannersSection from "@/components/home-page/banners-section";

export default async function Page() {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  return (
    <Fragment className="md:px-16">
      <TopCategoriesSection categories={categories} />
      <BannersSection />
      <BestOffersSection />
      <RecentProductsSection products={products} />
      <BestSellersSection products={products} />
    </Fragment>
  );
}
