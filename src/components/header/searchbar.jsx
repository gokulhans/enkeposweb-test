import React from "react";
import { ChevronDown, Search } from "lucide-react";

const SearchBar = ({ categories }) => {
  return (
    <div className="flex-1 max-w-2xl mx-8">
      <div className="flex">
        <div className="relative w-1/3">
          <select className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-l leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full">
            <option>Select a Location</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown size={20} />
          </div>
        </div>
        <div className="relative w-1/3">
          <select className="appearance-none bg-gray-100 border-t border-b border-gray-300 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full">
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
        <input
          type="text"
          placeholder="Search Product..."
          className="w-1/3 px-4 py-2 border-t border-b border-gray-300 focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
