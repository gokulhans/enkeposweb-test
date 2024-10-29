"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

const LocationSelect = ({ selectedLocation, setSelectedLocation }) => {
  return (
    <div className="relative w-1/3">
      <select
        className="appearance-none border border-gray-200 text-gray-700 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full py-5 shadow-md rounded-lg"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="">Select a Location</option>
        <option value="other">Other</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDown size={20} />
      </div>
    </div>
  );
};

export default LocationSelect;
