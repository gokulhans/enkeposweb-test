"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-50 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <a href="/">EPOS</a>
        </div>
        <div className="hidden md:flex space-x-4">
          {/* <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about-enke" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/enke-services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/enke-products" className="hover:text-gray-400">
            Products
          </Link>
          <Link href="/enke-careers" className="hover:text-gray-400">
            Careers
          </Link>
          <Link href="/contact-enke" className="hover:text-gray-400">
            Contatcs
          </Link> */}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <a href="/" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-700">
            About
          </a>
          <a href="/services" className="block px-4 py-2 hover:bg-gray-700">
            Services
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
