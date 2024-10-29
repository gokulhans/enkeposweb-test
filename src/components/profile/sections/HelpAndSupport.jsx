import React from "react";
import { InfoIcon } from "lucide-react";

const HelpAndSupport = () => {
  return (
    <div className="w-full">
      <div className="">
        {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200"> */}
        {/* Header */}
        {/* <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Returns Policy
          </h2>
        </div> */}

        {/* Content */}
        <div className="">
          {/* Alert/Info Box */}
          <div className="flex items-start space-x-3 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <InfoIcon className="h-5 w-5 text-blue-600 mt-0.5" />
            <p className="text-gray-600">
              Returns is a scheme provided by respective sellers under which the
              option of return & refund is offered to you by the sellers. All
              products listed under a particular category may not have the same
              returns policy.
            </p>
          </div>

          {/* Additional Help Section */}
          <div className="mt-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">
                Need More Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Contact our customer support team for assistance with returns
                and refunds.
              </p>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
