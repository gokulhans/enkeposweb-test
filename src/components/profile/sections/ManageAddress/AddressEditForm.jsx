// AddressEditForm.js
import showToast from "@/app/utils/toastUtil";
import { updateAddress, fetchDistricts, fetchStates } from "@/lib/api";
import React, { useEffect, useState } from "react";

const AddressEditForm = ({
  setShowEditForm,
  addressData,
  onAddressUpdated,
}) => {
  const [addressType, setAddressType] = useState(addressData.address_type);
  const [formData, setFormData] = useState({
    fullName: addressData.name,
    phone: addressData.phone || "",
    alternatePhone: addressData.alt_phone || "",
    pincode: addressData.pin_code,
    state: addressData.state_id,
    district: addressData.district_id,
    city: addressData.city,
    address: addressData.address,
    landmark: addressData.landmark,
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

  useEffect(() => {
    const loadDistricts = async () => {
      if (formData.state) {
        setLoadingDistricts(true);
        try {
          const data = await fetchDistricts({ stateId: formData.state });
          setDistricts(
            Object.entries(data.data).map(([id, name]) => ({ id, name }))
          );
        } catch (error) {
          console.error("Error fetching districts:", error);
        } finally {
          setLoadingDistricts(false);
        }
      } else {
        setDistricts([]); // Clear districts if no state is selected
      }
    };

    loadDistricts();
  }, [formData.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addressUpdateData = {
      id: addressData.id, // Include the address ID for the update request
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
      await updateAddress(addressUpdateData); // Assume this function updates the address
      showToast("Address updated successfully!");
      onAddressUpdated(); // Refetch addresses or handle updates in parent
      setShowEditForm(false);
    } catch (error) {
      showToast("Error updating address: " + error.message);
      console.error("Error updating address:", error.message);
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

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
            required
          />

          {/* Phone (optional if needed) */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.alternatePhone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
            readOnly
            required
          />

          {/* Alternate Phone */}
          <input
            type="tel"
            name="alternatePhone"
            placeholder="Alternate Phone"
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
            required
          />

          {/* State */}
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
            required
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
            required
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
            required
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
          required
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
            onClick={() => setShowEditForm(false)}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors flex items-center gap-2"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressEditForm;
