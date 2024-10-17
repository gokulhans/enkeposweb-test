import React from "react";
import { ChevronDown } from "lucide-react";

const BottomMenu = () => {
  return (
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
  );
};

export default BottomMenu;
