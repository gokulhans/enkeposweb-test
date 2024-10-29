"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

const CategorySelect = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="relative">
      <select
        className="appearance-none border border-gray-200 text-gray-700 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full py-5 shadow-md rounded-lg"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDown size={20} />
      </div>
    </div>
  );
};

export default CategorySelect;
