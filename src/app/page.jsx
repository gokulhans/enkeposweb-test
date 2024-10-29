import BestOffersSection from "@/components/home-page/best-offers-section";
import BestSellersSection from "@/components/home-page/best-sellers-section";
import RecentProductsSection from "@/components/home-page/recent-products-section";
import TopCategoriesSection from "@/components/home-page/top-category-section";
import { Fragment } from "react";
import BannersSection from "@/components/home-page/banners-section";

export default async function Page() {
  return (
    <Fragment>
      <div className="w-full md:px-16">
        <TopCategoriesSection />
        <BannersSection />
        <BestOffersSection title={"Best Offers"} />
        <RecentProductsSection title={"Recent Products"} />
        <BestSellersSection title={"Best Sellers"} />
      </div>
    </Fragment>
  );
}
