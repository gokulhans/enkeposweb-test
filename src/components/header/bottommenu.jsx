"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const BottomMenu = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY; // Get the vertical scroll position
    if (offset > 100) {
      // You can adjust this value based on when you want it to stick
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-300 ${
        isFixed
          ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md md:px-32"
          : "relative md:px-32 border"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between text-black">
        <div className="flex items-center">
          <button className="flex items-center space-x-2 bg-blue-500 px-5 py-2 rounded-t">
            <span className="text-white text-sm font-semibold py-2">
              ALL DEPARTMENT
            </span>
            <ChevronDown size={20} color="white" />
          </button>
          <div className="ml-8 space-x-6 text-sm font-semibold text-gray-500">
            <a href="#" className="hover:text-gray-700">
              HOME
            </a>
            <a href="#" className="hover:text-gray-700">
              ABOUT US
            </a>
            <a href="#" className="hover:text-gray-700">
              FRUITS & VEGETABLES
            </a>
            <a href="#" className="hover:text-gray-700">
              GROCERY & STAPLES
            </a>
            <a href="#" className="hover:text-gray-700">
              PAGES
            </a>
            <a href="#" className="hover:text-gray-700">
              CONTACTS
            </a>
          </div>
        </div>
        <button className="flex items-center space-x-2 bg-blue-500 px-5 rounded-full">
          <span className="text-white font-semibold py-2 text-sm">
            SUPER STORE
          </span>
          <ChevronDown size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default BottomMenu;
