import React from "react";
import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";
import BottomMenu from "./BottomMenu";

const Header = async () => {
  return (
    <nav className="bg-white shadow-md">
      <TopBar />
      <MainNavbar />
      <BottomMenu />
    </nav>
  );
};

export default Header;
