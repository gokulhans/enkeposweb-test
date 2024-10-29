// ProfileSidebar.jsx
import React from "react";
import Image from "next/image";
import {
  User,
  MapPin,
  ShoppingBag,
  Bell,
  HelpCircle,
  Lock,
  Power,
} from "lucide-react";
import { useRouter } from "next/navigation";
import showToast from "@/app/utils/toastUtil";

const menuItems = [
  { icon: <User className="w-5 h-5" />, text: "Edit Profile" },
  { icon: <MapPin className="w-5 h-5" />, text: "Manage Address" },
  { icon: <ShoppingBag className="w-5 h-5" />, text: "My Orders" },
  { icon: <Bell className="w-5 h-5" />, text: "Notification" },
  { icon: <HelpCircle className="w-5 h-5" />, text: "Help & Support" },
  { icon: <Lock className="w-5 h-5" />, text: "Change Password" },
  { icon: <Power className="w-5 h-5" />, text: "Logout" },
];

const ProfileSidebar = ({ selectedTab, setSelectedTab }) => {
  const router = useRouter(); // Initialize useRouter

  const handleLogout = () => {
    localStorage.clear();
    showToast("User logged out");
    router.push("/"); // Adjust the path as needed
  };
  return (
    <div className="md:col-span-1 space-y-4">
      {/* User Card */}
      <div className="rounded-lg shadow-lg border">
        <button
          onClick={() => setSelectedTab("View Profile")}
          className={`flex items-center space-x-4 p-4 cursor-pointer w-full hover:bg-gray-50 border-b last:border-b-0 ${
            selectedTab === "View Profile" ? "bg-gray-100" : ""
          }`}
        >
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://epos.enke.in/modules/shop/img/customer-profile-pic.png"
              objectFit="cover"
              alt="Profile"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-xl font-semibold">Hello</h2>
        </button>
      </div>

      {/* Menu Items */}
      <div className="bg-white rounded-lg shadow-lg border">
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={
                    item.text === "Logout"
                      ? handleLogout
                      : () => setSelectedTab(item.text)
                  }
                  className={`flex items-center space-x-3 px-4 py-3 w-full hover:bg-gray-50 border-b last:border-b-0 ${
                    selectedTab === item.text ? "bg-gray-100" : ""
                  }`}
                >
                  <span className="text-blue-500">{item.icon}</span>
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProfileSidebar;
