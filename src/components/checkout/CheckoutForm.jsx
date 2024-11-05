"use client";
import useCart from "@/app/hooks/useCart";
import React, { useState } from "react";
import { LoadingSpinner } from "../common/LoadingSpinner";
import ShowErrorMessage from "../common/ShowErrorMessage";
import { addToOrder } from "@/lib/api";
import { useRouter } from "next/navigation";
import showToast from "@/app/utils/toastUtil";

const CheckoutForm = () => {
  const router = useRouter();
  const { cart, loading, error } = useCart(); // Fetch the cart data using the custom hook
  const [formData, setFormData] = useState({
    name: "",
    landmark: "",
    address: "",
    city: "",
    postcode: "",
    state: "",
    district: "",
    phone: "",
    addressType: "",
    createAccount: false,
    differentShipping: false,
    orderNotes: "",
  });

  const placeOrder = async () => {
    try {
      await addToOrder();
      showToast("Order placed successfully");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ShowErrorMessage error={error.messege} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Billing Details */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Landmark <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Landmark"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Street address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="House number and street name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="City"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Postcode/ ZIP (optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Postcode / ZIP code"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Select state</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">
                District <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Select district</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Address type <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Select a address type</option>
              </select>
            </div>

            <div className="space-x-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add Address
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                CANCEL
              </button>
            </div>

            {/* New Account and Shipping Options */}
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="createAccount"
                  checked={formData.createAccount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      createAccount: e.target.checked,
                    })
                  }
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="createAccount" className="text-gray-600">
                  Create an account?
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="differentShipping"
                  checked={formData.differentShipping}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      differentShipping: e.target.checked,
                    })
                  }
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="differentShipping" className="text-gray-600">
                  Ship to a different address?
                </label>
              </div>

              <div>
                <label
                  htmlFor="orderNotes"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Order notes (optional)
                </label>
                <textarea
                  id="orderNotes"
                  value={formData.orderNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, orderNotes: e.target.value })
                  }
                  placeholder="Note about your orders, e.g special notes for delivery."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-full md:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
            <div className="border-b pb-4">
              <div className="flex justify-between mb-2">
                <div className="font-medium">PRODUCT</div>
                <div className="font-medium">TOTAL</div>
              </div>
              {cart.map((item) =>
                item.cart_items.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="flex justify-between text-gray-600 text-md py-2"
                  >
                    <div>
                      {cartItem.product_name} (x{cartItem.quantity})
                    </div>
                    <div>₹{cartItem.total_price}</div>
                  </div>
                ))
              )}
            </div>

            <div className="border-b py-4">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>
                  ₹
                  {cart
                    .reduce(
                      (acc, cart) => acc + cart.price_summary.sub_total,
                      0
                    )
                    .toFixed(2)}
                </div>
              </div>
            </div>

            <div className="border-b py-4">
              <div className="flex justify-between">
                <div>Shipping</div>
                <div className="text-gray-600">Free shipping</div>
              </div>
            </div>

            <div className="py-4">
              <div className="flex justify-between font-semibold">
                <div>Total</div>
                <div className="text-green-600">
                  {" "}
                  ₹
                  {cart
                    .reduce(
                      (acc, cart) => acc + cart.price_summary.sub_total,
                      0
                    )
                    .toFixed(2)}
                </div>
              </div>
            </div>
            {/* 
            <div className="mt-6">
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Coupon Code..."
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
                  APPLY COUPON
                </button>
              </div>
            </div> */}

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-4">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="text-sm">
                  I have read and agree to the website{" "}
                  <a href="#" className="text-green-600">
                    terms and conditions
                  </a>
                  <span className="text-red-500">*</span>
                </label>
              </div>
              <button
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => placeOrder()}
              >
                Place an order
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <a href="#" className="text-green-600">
                privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
