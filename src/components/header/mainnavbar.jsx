import React from "react";
import SearchBar from "./SearchBar";
import RightIcons from "./RightIcons";
import Image from "next/image";
import Link from "next/link";

const MainNavbar = ({ categories }) => {
  return (
    <div className="container mx-auto md:px-32 py-8 flex items-center justify-between">
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
      <SearchBar categories={categories} />

      {/* Right side icons */}
      <RightIcons />
    </div>
  );
};

export default MainNavbar;
