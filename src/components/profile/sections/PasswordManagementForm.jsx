"use client";

import React, { useState } from "react";
import { capitalizeFirstLetter } from "@/app/utils/stringUtils";
import showToast from "@/app/utils/toastUtil";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { changePassword } from "@/lib/api";

const PasswordManagementForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages

    // Validate password match
    if (newPassword !== confirmPassword) {
      setErrors((prev) => [
        ...prev,
        "New password and confirm password do not match.",
      ]);
      return;
    }

    setIsLoading(true); // Set loading to true before the API call

    try {
      const response = await changePassword(
        currentPassword,
        newPassword,
        confirmPassword
      );

      // Handle API response
      if (response.errors && response.errors.length > 0) {
        showToast("Failed to change password", "error");
        setErrors(response.errors);
      } else {
        showToast(capitalizeFirstLetter(response.message));
        setSuccessMessage(capitalizeFirstLetter(response.message));
        // Reset form fields
        resetForm();
      }
    } catch (error) {
      setErrors(["An error occurred while changing the password."]);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Reset form fields
  const resetForm = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Current Password Input */}
        <div className="relative">
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors duration-200"
            placeholder="Current Password"
            required
          />
        </div>

        {/* New Password Input */}
        <div className="relative">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors duration-200"
            placeholder="New Password"
            required
          />
        </div>

        {/* Confirm New Password Input */}
        <div className="relative">
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors duration-200"
            placeholder="Confirm New Password"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 ${
            isLoading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? (
            <LoadingSpinner className={"py-0"} />
          ) : (
            "Change Password"
          )}
        </button>

        {/* Display Errors */}
        {errors.length > 0 && (
          <div className="mt-4 text-red-600">
            {errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}

        {/* Display Success Message */}
        {successMessage && (
          <div className="mt-4 text-green-600">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default PasswordManagementForm;
