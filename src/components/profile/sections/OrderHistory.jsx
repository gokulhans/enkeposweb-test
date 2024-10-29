import React from "react";

const OrderHistory = () => {
  return (
    <div className="w-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 ">
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
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">
                  No items found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
