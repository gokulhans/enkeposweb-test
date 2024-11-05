// ProfileContent.jsx
import React from "react";
import ProfileView from "@/components/profile/sections/ViewProfile";
import PasswordManagementForm from "@/components/profile/sections/PasswordManagementForm";
import HelpAndSupport from "@/components/profile/sections/HelpAndSupport";
import AddressManager from "@/components/profile/sections/ManageAddress/AddressManager";
import NotificationList from "@/components/profile/sections/NotificationList";
import OrderHistory from "@/components/profile/sections/OrderHistory/OrderHistory";
import EditProfile from "./sections/EditProfile";

const ProfileContent = ({ selectedTab }) => {
  const renderContent = () => {
    switch (selectedTab) {
      case "View Profile":
        return <ProfileView />;
      case "Edit Profile":
        return <EditProfile />;
      case "Manage Address":
        return <AddressManager />;
      case "My Orders":
        return <OrderHistory />;
      case "Notification":
        return <NotificationList />;
      case "Help & Support":
        return <HelpAndSupport />;
      case "Change Password":
        return <PasswordManagementForm />;
      case "Logout":
        return <h2>You have been logged out.</h2>;
      default:
        return <h2>View your profile details here.</h2>;
    }
  };

  return (
    <div className="md:col-span-3">
      <div className="bg-white rounded-lg shadow-lg border p-6 h-full w-full max-w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">{selectedTab}</h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default ProfileContent;
