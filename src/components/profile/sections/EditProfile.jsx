"use client";
import { useState } from "react";
import Image from "next/image";
import { updateProfile } from "@/lib/api";
import ShowErrorMessage from "@/components/common/ShowErrorMessage";
import showToast from "@/app/utils/toastUtil";

export default function EditProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    alternatePhone: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Prepare profile data
    const profileData = {
      name: formData.fullName,
      email: formData.email,
      // Assuming `gender` and `pin_code` are part of your form, you can add them here
      // gender: formData.gender, // If you have a gender field
      // pin_code: formData.pin_code, // If you have a pin code field
      // Password fields if necessary
      // password: formData.password, // If you have these fields
      // password_confirm: formData.password_confirm,
    };

    try {
      const response = await updateProfile(profileData);
      showToast("Profile updated successfully!");
    } catch (error) {
      setError(error.message);
    }
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
      <div className="mt-4">{error && <ShowErrorMessage error={error} />}</div>
    </div>
  );
}
