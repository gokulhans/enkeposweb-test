// pages/edit-profile.js
import { useState } from "react";
import Image from "next/image";

export default function EditProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    alternatePhone: "",
    email: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = () => {
    setSelectedFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            {selectedFile ? (
              <div className="relative w-24 h-24 md:w-36 md:h-36">
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  alt="Profile picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full shadow border"
                />
              </div>
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded-full" />
            )}

            <div className="flex gap-4">
              <label className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition">
                Upload new picture
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>

              {selectedFile && (
                <button
                  type="button"
                  onClick={handleDelete}
                  className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="0101010101"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="alternatePhone"
            placeholder="Alternate Phone"
            value={formData.alternatePhone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
}
