"use client";
import React, { useState } from "react";
import useOrders from "@/app/hooks/useOrders";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import ShowErrorMessage from "@/components/common/ShowErrorMessage";
import OrderDetailsModal from "./OrderDetailsModal";
import { fetchOrderDetails } from "@/lib/api";

const OrderHistory = () => {
  const { orders, loading, error } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewOrder = async (orderId) => {
    try {
      const orderDetails = await fetchOrderDetails({ orderId });
      setSelectedOrder(orderDetails.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ShowErrorMessage message={error} />;
  }

  return (
    <div className="w-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  ORDER NUMBER
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  ORDER DATE
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  NUMBER OF PRODUCTS
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  TOTAL PRICE
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500">
                    No items found.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.orders_id}>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {order.order_number}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {order.order_date}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {order.total_items}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {order.price_summary.net_payable}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => handleViewOrder(order.orders_id)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        orderDetails={selectedOrder}
      />
    </div>
  );
};

export default OrderHistory;
