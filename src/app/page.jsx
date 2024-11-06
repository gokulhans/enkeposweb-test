// "use client";
import BestOffersSection from "@/components/home-page/best-offers-section";
import BestSellersSection from "@/components/home-page/best-sellers-section";
import RecentProductsSection from "@/components/home-page/recent-products-section";
import TopCategoriesSection from "@/components/home-page/top-category-section";
import { Fragment } from "react";
import BannersSection from "@/components/home-page/banners-section";
// import useCart from "./hooks/useCart";

export default function Page() {
  // if (typeof window !== "undefined") {
  //   const BEARER_TOKEN = localStorage.getItem("token");
  //   if (BEARER_TOKEN != null) {
  //     const { refreshCart } = useCart();
  //     console.log(refreshCart());
  //   }
  // }

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
