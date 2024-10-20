import React from "react";
import { ChevronDown, Search } from "lucide-react";

const SearchBar = ({ categories }) => {
  return (
    <div className="flex-1 max-w-2xl mx-8">
      <div className="flex space-x-2">
        <div className="relative w-1/3">
          <select className="appearance-none border border-gray-200 text-gray-700 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full py-5 shadow-md rounded-lg">
            <option>Select a Location</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown size={20} />
          </div>
        </div>
        <div className="relative w-1/3">
          <select className="appearance-none border border-gray-200 text-gray-700 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full py-5 shadow-md rounded-lg">
            <option>Select Category</option>
            {categories.map((cat) => (
              <option key={cat.category_id} value={cat.category_slug}>
                {cat.category_name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown size={20} />
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full px-4 rounded-l focus:outline-none py-4 shadow-md border border-gray-200"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r shadow-md">
            <Search size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
