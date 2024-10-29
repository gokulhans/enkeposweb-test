import React from "react";
import { Twitter, Facebook, Youtube, Linkedin } from "lucide-react";

const FooterCompanyInfo = () => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
        <h2 className="text-2xl font-bold">ENKE</h2>
      </div>
      <p className="text-sm mb-4">Make you confident</p>
      <p className="text-sm mb-4">
        We are many variations of passages available but the majority have
        suffered alteration in some form by injected humour words believable.
      </p>
      <div className="flex space-x-4">
        <Twitter className="w-6 h-6" />
        <Facebook className="w-6 h-6" />
        <Youtube className="w-6 h-6" />
        <Linkedin className="w-6 h-6" />
      </div>
    </div>
  );
};

export default FooterCompanyInfo;
