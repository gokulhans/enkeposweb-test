"use client";
import useCart from "@/app/hooks/useCart";
import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../common/LoadingSpinner";
import ShowErrorMessage from "../common/ShowErrorMessage";
import { addToOrder, addAddress, fetchDistricts, fetchStates } from "@/lib/api"; // Import necessary functions
import { useRouter } from "next/navigation";
import showToast from "@/app/utils/toastUtil";
import useAddresses from "@/app/hooks/useAddresses";

const CheckoutForm = () => {
  const router = useRouter();
  const { cart, loading, error, refreshCart } = useCart(); // Fetch the cart data using the custom hook
  const { addresses } = useAddresses();

  const [formData, setFormData] = useState({
    fullName: "",
    landmark: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    district: "",
    phone: "",
    addressType: "Home", // Default address type
    createAccount: false,
    differentShipping: false,
    orderNotes: "",
  });

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingDistricts, setLoadingDistricts] = useState(false);

  useEffect(() => {
    const loadStates = async () => {
      setLoadingStates(true);
      try {
        const data = await fetchStates();
        setStates(
          Object.entries(data.data).map(([id, name]) => ({ id, name }))
        );
      } catch (error) {
        console.error("Error fetching states:", error);
      } finally {
        setLoadingStates(false);
      }
    };

    loadStates();
  }, []);

  const handleStateChange = async (e) => {
    const selectedStateId = e.target.value;
    setFormData((prev) => ({ ...prev, state: selectedStateId, district: "" }));
    if (selectedStateId) {
      setLoadingDistricts(true);
      try {
        const data = await fetchDistricts({ stateId: selectedStateId });
        setDistricts(
          Object.entries(data.data).map(([id, name]) => ({ id, name }))
        );
      } catch (error) {
        console.error("Error fetching districts:", error);
      } finally {
        setLoadingDistricts(false);
      }
    } else {
      setDistricts([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressData = {
      name: formData.fullName,
      address: formData.address,
      alt_phone: formData.phone,
      pin_code: formData.pincode,
      state_id: formData.state,
      district_id: formData.district,
      city: formData.city,
      landmark: formData.landmark,
      address_type: formData.addressType,
    };

    try {
      await addAddress(addressData);
      showToast("Address added successfully!");
    } catch (error) {
      showToast("Error adding address: " + error.message);
      console.error("Error adding address:", error.message);
    }
  };

  const placeOrder = async () => {
    try {
      await addToOrder();
      await refreshCart();
      showToast("Order placed successfully");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ShowErrorMessage error={error.message} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Billing Details */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Landmark */}
            <div>
              <label className="block text-sm mb-1">
                Landmark <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="landmark"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Landmark"
                value={formData.landmark}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm mb-1">
                Street address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="House number and street name"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-sm mb-1">
                Postcode/ ZIP <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Postcode / ZIP code"
                value={formData.pincode}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleStateChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loadingStates}
                required
              >
                <option value="">Select state</option>
                {loadingStates ? (
                  <option value="" disabled>
                    Loading...
                  </option>
                ) : (
                  states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))
                )}
              </select>
            </div>

            {/* District */}
            <div>
              <label className="block text-sm mb-1">
                District <span className="text-red-500">*</span>
              </label>
              <select
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loadingDistricts}
                required
              >
                <option value="">Select district</option>
                {loadingDistricts ? (
                  <option value="" disabled>
                    Loading...
                  </option>
                ) : (
                  districts.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))
                )}
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Address Type */}
            <div>
              <label className="block text-sm mb-1">
                Address type <span className="text-red-500">*</span>
              </label>
              <select
                name="addressType"
                value={formData.addressType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Action Buttons */}
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
                onClick={() => router.push("/")}
              >
                CANCEL
              </button>
            </div>

            {/* Address List */}

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Select Address
            </h2>
            {addresses.length === 0 ? (
              <p className="text-gray-500">No addresses added yet.</p>
            ) : (
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors"
                  >
                    <div className="flex justify-between">
                      <button className="text-white text-sm bg-blue-600 px-3 mb-2 py-2 rounded-lg">
                        {address.address_type}
                      </button>
                      <input type="radio" name="address" value={address.id} />
                    </div>
                    <p className="font-medium text-gray-800">{address.name}</p>
                    <p className="text-gray-600">
                      {address.address}, {address.city}, {address.state_id}{" "}
                      {address.pin_code}
                    </p>
                  </div>
                ))}
              </div>
            )}

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
                onClick={placeOrder}
              >
                Place Order
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
