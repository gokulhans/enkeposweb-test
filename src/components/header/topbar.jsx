import React from "react";

const TopBar = () => {
  return (
    <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
      <p className="text-gray-600">Working time: Mon - Sat : 8:00 - 21:00</p>
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
  );
};

export default TopBar;
