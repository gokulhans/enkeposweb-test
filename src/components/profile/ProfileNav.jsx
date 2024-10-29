// ProfileNav.jsx
import React from "react";

const ProfileNav = () => {
  return (
    <nav className="bg-white p-4 text-sm">
      <div className="max-w-7xl mx-auto flex items-center space-x-4">
        <a href="/" className="text-gray-800 hover:text-blue-600">
          HOME
        </a>
        <span className="text-blue-500">&raquo;</span>
        <span className="text-blue-500">PRODUCT DETAILS</span>
      </div>
    </nav>
  );
};

export default ProfileNav;
