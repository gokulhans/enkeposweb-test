import React from "react";
import { ShoppingBag } from "lucide-react";
import SearchBar from "./SearchBar";
import RightIcons from "./RightIcons";

const MainNavbar = ({ categories }) => {
  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <ShoppingBag className="text-pink-500" size={32} />
        <span className="text-2xl font-bold">Epos</span>
      </div>

      {/* Search bar */}
      <SearchBar categories={categories} />

      {/* Right side icons */}
      <RightIcons />
    </div>
  );
};

export default MainNavbar;
