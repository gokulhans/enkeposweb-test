import React from "react";
import TopBar from "./topbar";
import MainNavbar from "./mainnavbar";
import BottomMenu from "./bottommenu";

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
