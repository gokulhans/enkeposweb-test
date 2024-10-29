"use client";
import React, { useEffect, useState } from "react";
import { Phone, Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { fetchCartList } from "@/lib/api";

const RightIcons = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const cartData = await fetchCartList();
        // Assuming cartData contains an array of items
        setCartCount(cartData.data.length); // Update this logic based on your actual data structure
        console.log(cartData.data);
        
      } catch (error) {
        console.error("Failed to fetch cart data:", error);
      }
    };

    getCartData();
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center text-sm">
        <Phone size={20} className="text-gray-600 mr-2" />
        <span>Call Us Now +185 4124 650</span>
      </div>
      <Link href={"/profile"} className="p-2 rounded-full bg-gray-100 relative">
        <User size={20} />
      </Link>
      <Link
        href={"/wishlist"}
        className="p-2 rounded-full bg-gray-100 relative"
      >
        <Heart size={20} />
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          0 {/* Replace with actual wishlist count if needed */}
        </span>
      </Link>
      <Link href={"/cart"} className="p-2 rounded-full bg-gray-100 relative">
        <ShoppingCart size={20} />
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartCount} {/* Display the cart count */}
        </span>
      </Link>
    </div>
  );
};

export default RightIcons;
