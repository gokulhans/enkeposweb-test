import React from "react";

const FooterBottomBar = () => {
  return (
    <div className="mt-8 pt-8 border-t border-blue-400">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; Copyright enke , All Right Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-sm">
            Terms
          </a>
          <a href="#" className="text-sm">
            Privacy
          </a>
          <a href="#" className="text-sm">
            Help
          </a>
          <a href="#" className="text-sm">
            Sitemap
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomBar;
