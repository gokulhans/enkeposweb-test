"use client";
import React, { useState, useCallback } from "react";
import AddressForm from "./AddressForm";
import AddressEditForm from "./AddressEditForm";
import useAddresses from "@/app/hooks/useAddresses";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";

const AddressManager = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { addresses, loading, error, refetchAddresses } = useAddresses();

  const handleAddressAdded = useCallback(() => {
    refetchAddresses();
  }, [refetchAddresses]);

  const handleAddressUpdated = useCallback(() => {
    refetchAddresses();
  }, [refetchAddresses]);

  const handleEditClick = (address) => {
    setSelectedAddress(address);
    setShowEditForm(true);
  };

  return (
    <div className="w-full">
      {!showAddForm && !showEditForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors flex items-center gap-2 mb-8"
        >
          <span className="text-xl">+</span>
          Add New Address
        </button>
      )}

      {showAddForm && (
        <AddressForm
          setShowAddForm={setShowAddForm}
          onAddressAdded={handleAddressAdded}
        />
      )}

      {showEditForm && selectedAddress && (
        <AddressEditForm
          setShowEditForm={setShowEditForm}
          addressData={selectedAddress}
          onAddressUpdated={handleAddressUpdated}
        />
      )}

      {!showAddForm && !showEditForm && (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Select Address
          </h2>
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <p className="text-red-500">Error loading addresses: {error}</p>
          ) : addresses.length === 0 ? (
            <p className="text-gray-500">No addresses added yet.</p>
          ) : (
            <div className="space-y-4">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors"
                >
                  <div className="flex justify-between">
                    <button className="text-gray-500 text-sm bg-gray-200 px-3 mb-2 py-2 rounded-lg">
                      {address.address_type}
                    </button>
                    <button
                      className="text-white text-sm bg-blue-600 px-3 mb-2 py-2 rounded-lg"
                      onClick={() => handleEditClick(address)} // Set selected address for editing
                    >
                      Edit Address
                    </button>
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
        </>
      )}
    </div>
  );
};

export default AddressManager;
