import React from "react";
import {
  ShoppingBag,
  Heart,
  ShoppingCart,
  ChevronDown,
  Search,
  Phone,
} from "lucide-react";
import { fetchCategories } from "@/app/services/api";

const Navbar = async () => {
  const categories = await fetchCategories();

  return (
    <nav className="bg-white shadow-md">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <p className="text-gray-600">Working time: Mon - Sat : 8:00 - 21:0</p>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            My Account
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            FAQ
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <ShoppingBag className="text-pink-500" size={32} />
          <span className="text-2xl font-bold">Epos</span>
        </div>

        {/* Search bar */}
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

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone size={20} className="text-gray-600 mr-2" />
            <span>Call Us Now+185 4124 650</span>
          </div>
          <button className="p-2 rounded-full bg-gray-100 relative">
            <Heart size={20} />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          </button>
          <button className="p-2 rounded-full bg-gray-100 relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Bottom menu */}
      <div className="bg-blue-500">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-white">
          <div className="flex items-center">
            <button className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded">
              <span>ALL DEPARTMENT</span>
              <ChevronDown size={20} />
            </button>
            <div className="ml-8 space-x-6">
              <a href="#" className="hover:text-gray-200">
                HOME
              </a>
              <a href="#" className="hover:text-gray-200">
                ABOUT US
              </a>
              <a href="#" className="hover:text-gray-200">
                FRUITS & VEGETABLES
              </a>
              <a href="#" className="hover:text-gray-200">
                GROCERY & STAPLES
              </a>
              <a href="#" className="hover:text-gray-200">
                PAGES
              </a>
              <a href="#" className="hover:text-gray-200">
                CONTACTS
              </a>
            </div>
          </div>
          <button className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded">
            <span>SUPER STORE</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
