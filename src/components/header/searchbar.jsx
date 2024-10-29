"use client";
import React, { useState } from "react";
import useCategories from "@/app/hooks/useCategories";
import { useRouter } from "next/navigation";
import LocationSelect from "@/components/header/LocationSelect";
import CategorySelect from "@/components/common/CategorySelect";
import SearchInput from "@/components/common/SearchInput";
import ShowErrorMessage from "../common/ShowErrorMessage";
// import { LoadingSpinner } from "@/components/common/LoadingSpinner";

const SearchBar = () => {
  const router = useRouter();
  const { categories, loading, error } = useCategories();

  // Local state management
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Search function
  const handleSearch = () => {
    console.log("Search Term:", searchTerm);
    console.log("Selected Location:", selectedLocation);
    console.log("Selected Category:", selectedCategory);

    router.push(
      "/search?term=" +
        searchTerm +
        "&category=" +
        selectedCategory +
        "&location=" +
        selectedLocation
    );
  };

  // if (loading) return <LoadingSpinner />;
  if (error) return <ShowErrorMessage error={error} />;

  return (
    <div className="flex-1 max-w-2xl mx-8">
      <div className="flex space-x-2">
        <LocationSelect
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
        <CategorySelect
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
