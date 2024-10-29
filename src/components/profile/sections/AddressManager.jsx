import React, { useState } from "react";
import AddressForm from "./AddressForm";

const AddressManager = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [addresses, setAddresses] = useState([]);

  return (
    <div className="w-full">
      {/* <div className="bg-white rounded-lg shadow-sm p-6"> */}
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Manage address
        </h1> */}

      {!showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors flex items-center gap-2 mb-8"
        >
          <span className="text-xl">+</span>
          Add New Address
        </button>
      )}

      {showAddForm && <AddressForm setShowAddForm={setShowAddForm} />}
      {!showAddForm && (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Select Address
          </h2>
          {addresses.length === 0 ? (
            <p className="text-gray-500">No addresses added yet.</p>
          ) : (
            <div className="space-y-4">
              {addresses.map((address, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors"
                >
                  <p className="font-medium text-gray-800">{address.street}</p>
                  <p className="text-gray-600">
                    {address.city}, {address.state} {address.zipCode}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* </div> */}
    </div>
  );
};

export default AddressManager;
