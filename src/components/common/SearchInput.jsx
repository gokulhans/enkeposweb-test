"use client";
import React from "react";
import { Search } from "lucide-react";

const SearchInput = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search Product..."
        className="w-full px-4 rounded-l focus:outline-none py-4 shadow-md border border-gray-200"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-r shadow-md"
        onClick={handleSearch} // Call search function on click
      >
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchInput;
