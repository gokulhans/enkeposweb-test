import React from "react";
import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterContactInfo from "./FooterContactInfo";
import FooterServices from "./FooterServices";
import FooterNewsLetter from "./FooterNewsLetter";
import FooterBottomBar from "./FooterBottomBar";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 md:pt-16 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterCompanyInfo />
          <FooterContactInfo />
          <FooterServices />
          <FooterNewsLetter />
        </div>
      </div>
      <FooterBottomBar />
    </footer>
  );
};

export default Footer;
