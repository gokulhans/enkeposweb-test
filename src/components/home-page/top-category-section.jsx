"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useCategories from "@/app/hooks/useCategories";
import { LoadingSpinner } from "../common/LoadingSpinner";
import Link from "next/link";
import ShowErrorMessage from "../common/ShowErrorMessage";

const TopCategoriesSection = () => {
  const sliderRef = useRef(null);
  const { categories, loading, error } = useCategories();

  if (loading) return <LoadingSpinner />;
  if (error) return <ShowErrorMessage error={error} />;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 md:py-12 w-full md:px-16">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center">
          {/* Left scroll button - hidden on mobile */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 z-10 justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Scrollable container */}
          <div
            ref={sliderRef}
            className="flex gap-4 md:gap-6 overflow-x-scroll scrollbar-hide px-2 md:px-12 snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {categories.map((category) => (
              <Link href={`/categories/${category.slug}/${category.id}`} key={category.id}>
                <div
                  key={category.id}
                  className="flex flex-col items-center shrink-0 w-[160px] md:w-[200px] snap-start"
                >
                  <div className="bg-white rounded-full mb-3 md:mb-4 shadow-md hover:shadow-lg transition-shadow">
                    <Image
                      src={category.category_icon}
                      alt={category.category_name}
                      width={100}
                      height={100}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                      priority
                    />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-center line-clamp-2">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Right scroll button - hidden on mobile */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 z-10 justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCategoriesSection;
