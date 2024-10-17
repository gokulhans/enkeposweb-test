import React from "react";
import { fetchCategories } from "@/app/services/api";
import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";
import BottomMenu from "./BottomMenu";

const Navbar = async () => {
  const categories = await fetchCategories();

  return (
    <nav className="bg-white shadow-md">
      <TopBar />
      <MainNavbar categories={categories} />
      <BottomMenu />
    </nav>
  );
};

export default Navbar;
