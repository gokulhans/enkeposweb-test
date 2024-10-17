"use client";
import { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional information" },
    { id: "shipping", label: "Shipping & Returns" },
    { id: "reviews", label: "Review(s)" },
  ];

  const TabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna viverra non, semper suscipit, posuere
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis. Phasellus ultrices nulla quis nibh. Quisque a lectus.
                Donec consectetuer ligula vulputate sem tristique cursus.
              </p>
              <ul className="space-y-2 list-none pl-4">
                <li>
                  Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
                  elit.
                </li>
                <li>Vivamus finibus vel mauris ut vehicula.</li>
                <li>
                  Nullam a magna porttitor, dictum risus nec, faucibus sapien.
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna viverra non, semper suscipit, posuere
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis. Phasellus ultrices nulla quis nibh. Quisque a lectus.
                Donec consectetuer ligula vulputate sem tristique cursus.
              </p>
            </div>
          </div>
        );
      case "additional":
        return (
          <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">
              Additional Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4">
                <h3 className="font-semibold">Weight</h3>
                <p>0.5 kg</p>
              </div>
              <div className="bg-gray-50 p-4">
                <h3 className="font-semibold">Dimensions</h3>
                <p>10 × 20 × 5 cm</p>
              </div>
            </div>
          </div>
        );
      case "shipping":
        return (
          <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">Shipping & Returns</h2>
            <div className="space-y-4 text-gray-600">
              <p>Free shipping on orders over $50</p>
              <p>30-day return policy</p>
            </div>
          </div>
        );
      case "reviews":
        return (
          <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">Product Reviews</h2>
            <p className="text-gray-600">No reviews yet</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8" aria-label="Product Information Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                py-4 px-1 border-b-2 font-medium text-lg whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        <TabContent />
      </div>
    </div>
  );
};

export default ProductTabs;
