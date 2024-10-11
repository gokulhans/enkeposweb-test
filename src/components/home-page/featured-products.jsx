import { Star } from "lucide-react";
import { Button } from "../ui/button";

export default function FeaturedProducts() {
  return (      
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">      
      <div className="px-4 py-6 sm:px-0">      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">      
          <div className="bg-white overflow-hidden shadow rounded-lg">      
            <img className="h-48 w-full object-cover" src="https://via.placeholder.com/200" alt="Product Name" />      
            <div className="p-4">      
              <h3 className="text-lg font-semibold text-gray-900">Product Name</h3>      
              <p className="mt-1 text-gray-600">₹100</p>      
              <div className="mt-2 flex items-center">      
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />      
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />      
                <span className="ml-2 text-sm text-gray-600">4.2</span>      
              </div>      
              <Button className="mt-4 w-full">Add to Cart</Button>      
            </div>      
          </div>      
          <div className="bg-white overflow-hidden shadow rounded-lg">      
            <img className="h-48 w-full object-cover" src="https://via.placeholder.com/200" alt="Product Name" />      
            <div className="p-4">      
              <h3 className="text-lg font-semibold text-gray-900">Product Name</h3>      
              <p className="mt-1 text-gray-600">₹100</p>      
              <div className="mt-2 flex items-center">      
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />      
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />      
                <span className="ml-2 text-sm text-gray-600">4.2</span>      
              </div>      
              <Button className="mt-4 w-full">Add to Cart</Button>      
            </div>      
          </div>      
          <div className="bg-white overflow-hidden shadow rounded-lg">      
            <img className="h-48 w-full object-cover" src="https://via.placeholder.com/200" alt="Product Name" />      
            <div className="p-4">      
              <h3 className="text-lg font-semibold text-gray-900">Product Name</h3>      
              <p className="mt-1 text-gray-600">₹100</p>      
              <div className="mt-2 flex items-center">      
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />      
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />      
                <span className="ml-2 text-sm text-gray-600">4.2</span>      
              </div>      
              <Button className="mt-4 w-full">Add to Cart</Button>      
            </div>      
          </div>      
          <div className="bg-white overflow-hidden shadow rounded-lg">      
            <img className="h-48 w-full object-cover" src="https://via.placeholder.com/200" alt="Product Name" />      
            <div className="p-4">      
              <h3 className="text-lg font-semibold text-gray-900">Product Name</h3>      
              <p className="mt-1 text-gray-600">₹100</p>      
              <div className="mt-2 flex items-center">      
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />      
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />      
                <span className="ml-2 text-sm text-gray-600">4.2</span>      
              </div>      
              <Button className="mt-4 w-full">Add to Cart</Button>      
            </div>      
          </div>      
        </div>      
      </div>      
    </div>      
  );
}