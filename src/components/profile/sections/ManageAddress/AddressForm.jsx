import showToast from "@/app/utils/toastUtil";
import { addAddress, fetchDistricts, fetchStates } from "@/lib/api";
import React, { useEffect, useState } from "react";

const AddressForm = ({ setShowAddForm, onAddressAdded }) => {
  const [addressType, setAddressType] = useState("Home");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    alternatePhone: "",
    pincode: "",
    state: "",
    district: "",
    city: "",
    address: "",
    landmark: "",
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
        ); // Transform the response
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
    setFormData((prev) => ({ ...prev, state: selectedStateId, district: "" })); // Reset district on state change
    if (selectedStateId) {
      setLoadingDistricts(true);
      try {
        const data = await fetchDistricts({ stateId: selectedStateId });
        setDistricts(
          Object.entries(data.data).map(([id, name]) => ({ id, name }))
        ); // Transform the response
      } catch (error) {
        console.error("Error fetching districts:", error);
      } finally {
        setLoadingDistricts(false);
      }
    } else {
      setDistricts([]); // Clear districts if no state is selected
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addressData = {
      name: formData.fullName,
      address: formData.address,
      alt_phone: formData.alternatePhone,
      pin_code: formData.pincode,
      state_id: formData.state,
      district_id: formData.district,
      city: formData.city,
      landmark: formData.landmark,
      address_type: addressType,
    };

    try {
      const response = await addAddress(addressData);
      showToast("Address added successfully!");
      console.log("Address added successfully:", response);
      onAddressAdded();
      setShowAddForm(false);
      // Optionally, you can show a success message or redirect the user
    } catch (error) {
      showToast("Error adding address: " + error.message);
      console.error("Error adding address:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Use Current Location Button */}
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Use Current Location
        </button>

        {/* Address Type */}
        <div className="space-y-2">
          <label className="block text-gray-700">Address Type</label>
          <div className="flex gap-3">
            {["Home", "Office", "Other"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setAddressType(type)}
                className={`px-6 py-2 rounded-md transition-colors ${
                  addressType === type
                    ? "bg-blue-500 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
          />

          {/* Phone */}
          {/* <input
            type="tel"
            name="phone"
            placeholder="0101010101"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
          /> */}

          {/* Alternate Phone */}
          <input
            type="tel"
            name="alternatePhone"
            placeholder="Alternate Phone"
            value={formData.alternatePhone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
          />

          {/* Pincode */}
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
          />

          {/* State */}
          <select
            name="state"
            value={formData.state}
            onChange={handleStateChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
            disabled={loadingStates} // Disable while loading
          >
            <option value="">Select State</option>
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

          {/* District */}
          <select
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
            disabled={loadingDistricts} // Disable while loading
          >
            <option value="">Select District</option>
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

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
          />
        </div>

        {/* Full Width Fields */}
        <textarea
          name="address"
          placeholder="Flat/House Number Apartment Name Street No"
          value={formData.address}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
        />

        <input
          type="text"
          name="landmark"
          placeholder="Land Mark"
          value={formData.landmark}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
        />

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowAddForm(false)}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
