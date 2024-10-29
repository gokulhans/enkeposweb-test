import React from "react";

const TopBar = () => {
  return (
    <div className="container mx-auto px-4 py-2 flex justify-between items-center border-b text-xs ">
      <p className="text-gray-600 md:pl-32 border-r pr-2">
        Working time: Mon - Sat : 8:00 - 21:00
      </p>
      <div className="space-x-2 md:pr-32">
        <a href="#" className="text-gray-600 hover:text-gray-800 border-r pr-2">
          My Account
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-800  border-r pr-2"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-800  border-r pr-2"
        >
          Contact
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800 border-r pr-2">
          FAQ
        </a>
      </div>
    </div>
  );
};

export default TopBar;
