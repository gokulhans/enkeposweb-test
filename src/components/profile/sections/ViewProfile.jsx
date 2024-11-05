"use client";
// ProfileView.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ShowErrorMessage from "@/components/common/ShowErrorMessage";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";

// Make sure to replace this with your actual token retrieval logic
const BEARER_TOKEN = "17|mBEfJNK7YR180ivZ5v3Ea0mSsVed6TbWKVjfqjez"; // Replace with actual token

const ProfileView = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://epos.enke.in/api/user/get-user-details/5",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${BEARER_TOKEN}`, // Pass the token here
            },
          }
        );

        if (response.data.status === "success") {
          setUserData(response.data.data);
        } else {
          setError("User not found");
        }
      } catch (err) {
        setError("Error fetching user data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ShowErrorMessage message={error} />;
  }

  return (
    <div>
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <Image
            src="https://epos.enke.in/modules/shop/img/customer-profile-pic.png"
            alt="Profile"
            width={200}
            height={200}
            objectFit="cover" // Adjusted for next/image
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-1">Customer Name:</p>
          <p className="font-medium">{userData.name}</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Customer Phone:</p>
          <p className="font-medium">{userData.phone}</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Customer Alternate Phone:</p>
          <p className="font-medium">
            {userData.addresses[0]?.alt_phone || "-"}
          </p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Customer Email:</p>
          <p className="font-medium">{userData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
