import React from "react";
import { Search, Heart, ShoppingCart, Menu, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const MobileHeader = () => {
  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-gray-100 py-3 text-xs text-gray-600 shadow-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">
          <div className="text-center">
            Working time: Mon - Sat : 8:00 - 21:00
          </div>
          <nav className="flex items-center space-x-4">
            <a
              href="/my-account"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              My Account
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="/about"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="/contact"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="/faq"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href={"/"}>
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="https://epos.enke.in/modules/shop/img/logo.png"
                alt="Epos Logo"
                width={50}
                height={50}
              />
              <span className="text-2xl font-bold">Epos</span>
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Product..."
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-0 top-0 h-full px-4 text-white bg-blue-600 rounded-r-lg hover:bg-blue-600">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <User size={24} />
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Heart size={24} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          {/* <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu size={24} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
