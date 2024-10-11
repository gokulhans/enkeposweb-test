import BestOffersSection from "@/components/home-page/best-offers-section";
import BestSellersSection from "@/components/home-page/best-sellers-section";
import RecentProductsSection from "@/components/home-page/recent-products-section";
import TopCategoriesSection from "@/components/home-page/top-category-section";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <TopCategoriesSection />
      <BestOffersSection />
      <RecentProductsSection />
      <BestSellersSection />
    </Fragment>
  );
}
