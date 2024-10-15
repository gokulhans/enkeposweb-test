"use client";
import { useState, useEffect } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/loading-spinner";
import Image from "next/image";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Step 1: Create loading state

  // Fetch categories and products from the API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading

      try {
        const categoryResponse = await fetch(
          "https://epos.enke.in/api/list-category"
        );
        const categoryData = await categoryResponse.json();
        setCategories(categoryData.category); // Set categories

        const productResponse = await fetch(
          "https://epos.enke.in/api/product-searchbar"
        );
        const productData = await productResponse.json();
        setProducts(productData.product); // Set products
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // End loading
      } 
    };

    fetchData();
  }, []);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) =>
          product.category.some((cat) => cat.name === selectedCategory)
        );

  return (
    <div className="min-h-screen bg-white">
      {loading ? ( // Step 3: Display loading indicator for the entire page
        <div className="fixed top-0 flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <header className="bg-white shadow my-5 rounded-lg">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Product Catalog
              </h1>
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0">
                  <Button
                    variant={selectedCategory === "All" ? "default" : "outline"}
                    onClick={() => setSelectedCategory("All")}
                  >
                    All
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.category_id}
                      variant={
                        selectedCategory === category.category_name
                          ? "default"
                          : "outline"
                      }
                      onClick={() =>
                        setSelectedCategory(category.category_name)
                      }
                    >
                      {category.category_name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.product_id}
                      className="bg-white overflow-hidden shadow rounded-lg"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="h-48 w-full object-cover"
                        src={
                          product.attachment[0]?.file_path ||
                          "https://via.placeholder.com/200"
                        }
                        alt={product.names.en}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {product.names.en}
                        </h3>
                        <p className="mt-1 text-gray-600">
                          ₹{product.price.price.toFixed(2)}
                        </p>
                        <div className="mt-2 flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">
                            {product.rating || "N/A"}
                          </span>
                        </div>
                        <Button className="mt-4 w-full" variant="outline">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}
