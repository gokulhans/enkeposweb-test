"use client";
import React from "react";
import { X, Plus, Minus } from "lucide-react";
import Image from "next/image";
import useCart from "@/app/hooks/useCart";
import { LoadingSpinner } from "../common/LoadingSpinner";
import ShowErrorMessage from "../common/ShowErrorMessage";
import { addToCart, decreaseCartItemQuantity, removeCartItem } from "@/lib/api";
import showToast from "@/app/utils/toastUtil";
import Link from "next/link";

const CartListSection = () => {
  const { cart, loading, error, refreshCart } = useCart();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ShowErrorMessage error={error} />;
  }

  const increaseQuantity = async (productId) => {
    try {
      await addToCart(productId, 1);
      refreshCart();
    } catch (error) {
      console.error(error);
    }
  };

  const decreaseQuantity = async (itemId) => {
    try {
      await decreaseCartItemQuantity(itemId, 1);
      refreshCart();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await removeCartItem(itemId);
      showToast("Item removed from cart", "success");
      refreshCart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 p-4 py-8 md:py-16">
      {cart && cart.length > 0 ? (
        <div className="flex-grow w-full lg:flex-1">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="p-4 md:p-6">
              {/* Desktop Table */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead className="border-b border-gray-200">
                    <tr className="text-left text-sm font-semibold text-gray-700">
                      <th className="pb-4 w-1/2">PRODUCT</th>
                      <th className="pb-4">PRICE</th>
                      <th className="pb-4 align-middle pl-8">QTY</th>
                      <th className="pb-4">TOTAL</th>
                      <th className="pb-4">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) =>
                      item.cart_items.map((cartItem) => (
                        <tr key={cartItem.id} className="align-middle">
                          <td className="py-4">
                            <div className="flex items-center space-x-4">
                              <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={cartItem.product_attachment[0].file_path}
                                  width={100}
                                  height={100}
                                  className="w-full h-full object-cover"
                                  alt={cartItem.product_name}
                                />
                              </div>
                              <span className="font-medium text-gray-800">
                                {cartItem.product_name}
                              </span>
                            </div>
                          </td>
                          <td className="text-gray-700">
                            ₹{cartItem.unit_price}
                          </td>
                          <td>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => decreaseQuantity(cartItem.id)}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                              >
                                <Minus size={16} className="text-blue-600" />
                              </button>
                              <span className="w-8 text-center font-medium">
                                {cartItem.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  increaseQuantity(cartItem.product_id)
                                }
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                              >
                                <Plus size={16} className="text-blue-600" />
                              </button>
                            </div>
                          </td>
                          <td className="font-medium text-gray-700">
                            ₹{cartItem.total_price}
                          </td>
                          <td>
                            <button
                              onClick={() => removeFromCart(cartItem.id)}
                              className="p-2 rounded-full hover:bg-red-50 transition-colors"
                              aria-label="Remove item"
                            >
                              <X size={16} className="text-red-500" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Updated Mobile Layout with Card Style */}
              <div className="md:hidden space-y-4">
                {cart.map((item) =>
                  item.cart_items.map((cartItem) => (
                    <div
                      key={cartItem.id}
                      className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden"
                    >
                      <div className="flex">
                        {/* Left side - Image */}
                        <div className="w-24 h-24 m-3  flex-shrink-0">
                          <Image
                            src={cartItem.product_attachment[0].file_path}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover rounded-lg"
                            alt={cartItem.product_name}
                          />
                        </div>

                        {/* Right side - Content */}
                        <div className="flex-1 p-3 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-gray-800 mb-1">
                              {cartItem.product_name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(cartItem.id)}
                              className="p-1 rounded-full hover:bg-red-50 transition-colors"
                              aria-label="Remove item"
                            >
                              <X size={16} className="text-red-500" />
                            </button>
                          </div>

                          <div className="text-sm text-gray-600 mb-2">
                            ₹{cartItem.unit_price}
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-1">
                              <button
                                onClick={() => decreaseQuantity(cartItem.id)}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                              >
                                <Minus size={14} className="text-blue-600" />
                              </button>
                              <span className="w-8 text-center font-medium text-sm">
                                {cartItem.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  increaseQuantity(cartItem.product_id)
                                }
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                              >
                                <Plus size={14} className="text-blue-600" />
                              </button>
                            </div>
                            <div className="font-medium text-blue-600">
                              ₹{cartItem.total_price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <button className="mt-6 bg-red-50 text-red-600 px-4 md:px-6 py-2 rounded-full text-sm font-medium hover:bg-red-100 transition-colors w-full md:w-auto">
                REMOVE ALL FROM CART
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-xl p-8 flex-grow text-center">
          <p className="text-gray-600">Your cart is empty.</p>
        </div>
      )}

      {/* Summary Section */}
      <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 w-full lg:w-96">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Order Summary
        </h2>

        <div className="flex justify-between mb-6 py-4 border-b border-t border-gray-200">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">
            ₹
            {cart
              .reduce((acc, cart) => acc + cart.price_summary.sub_total, 0)
              .toFixed(2)}
          </span>
        </div>

        {cart.map((cart) =>
          cart.cart_items.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <span className="text-sm text-gray-600 flex-1 pr-4">
                {item.product_name}
              </span>
              <span className="text-gray-800 whitespace-nowrap">
                ₹{item.total_price.replace(/,/g, "")}
              </span>
            </div>
          ))
        )}

        <div className="flex lg:flex-1 justify-between font-semibold mt-6 py-4 border-b border-t border-gray-200">
          <span>Total Price</span>
          <span className="text-blue-600">
            ₹
            {cart
              .reduce((acc, cart) => acc + cart.price_summary.net_total, 0)
              .toFixed(2)}
          </span>
        </div>

        <Link href="/checkout" className="block mt-6">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            PROCEED TO CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartListSection;
