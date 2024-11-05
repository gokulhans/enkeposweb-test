import React from "react";
import { X } from "lucide-react";

const OrderDetailsModal = ({ isOpen, onClose, orderDetails }) => {
  if (!isOpen || !orderDetails) return null;

  const { order_number, cart, order_status, order_date } = orderDetails;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Order Details</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Order Number</p>
              <p className="font-medium">{order_number}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-medium">{order_status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Order Date</p>
              <p className="font-medium">{order_date}</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    NO
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    PRODUCT NAME
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    QUANTITY
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    UNIT PRICE
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                    TOTAL PRICE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cart[0]?.cart_items.map((item, index) => (
                  <tr key={item.id}>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {index + 1}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {item.product_name}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {item.quantity}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {item.unit_price}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 text-right">
                      {item.total_price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-end space-y-2">
              <div className="w-64">
                <div className="flex justify-between py-1">
                  <span className="text-sm text-gray-600">Subtotal:</span>
                  <span className="font-medium">
                    {cart[0]?.price_summary.sub_total}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-sm text-gray-600">Tax:</span>
                  <span className="font-medium">
                    {cart[0]?.price_summary.total_tax}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-t">
                  <span className="text-sm font-semibold">Total:</span>
                  <span className="font-semibold">
                    {cart[0]?.price_summary.net_payable}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
