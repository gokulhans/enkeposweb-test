"use client";
import ProfileContent from "@/components/profile/ProfileContent";
import ProfileNav from "@/components/profile/ProfileNav";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import React, { useState } from "react";

const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("View Profile");

  return (
    <div className="min-h-screen w-full">
      {/* Navigation */}
      <ProfileNav />

      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile</h1>
        <p className="text-gray-600 mb-8">Here you can manage your account</p>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <ProfileSidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />

          {/* Right Content */}
          <ProfileContent selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
