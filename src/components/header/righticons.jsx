import React from "react";
import { Phone, Heart, ShoppingCart } from "lucide-react";

const RightIcons = () => {
  return (
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
  );
};

export default RightIcons;
