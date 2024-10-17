import React from "react";
import { Twitter, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
              <h2 className="text-2xl font-bold">GANVIN</h2>
            </div>
            <p className="text-sm mb-4">Make you confident</p>
            <p className="text-sm mb-4">
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour words
              believable.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6" />
              <Facebook className="w-6 h-6" />
              <Youtube className="w-6 h-6" />
              <Linkedin className="w-6 h-6" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="mb-2">
              Akshya Nagar 1st Block 1st Cross,Rammurthy nagar, Bangalore-560016
            </p>
            <p className="mb-2">+91 5656465789</p>
            <p>yougo@gmail.com</p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Electronics</li>
              <li>Vegetables</li>
              <li>Electronics</li>
              <li>Mobiles</li>
              <li>Bakery</li>
              <li>Beverages</li>
            </ul>
          </div>

          {/* Connect With Whatsapp */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect With Whatsapp
            </h3>
            <p className="mb-4">
              Subscribe Our Newsletter To Get Latest Update And News
            </p>
            <input
              type="text"
              placeholder="Your phone number"
              className="w-full p-2 mb-4 text-black rounded"
            />
            <button className="w-full bg-white text-blue-500 py-2 rounded font-semibold">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
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
    </footer>
  );
};

export default Footer;
