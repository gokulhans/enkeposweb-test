import { fetchProducts } from "@/lib/api";
import { useEffect, useState } from "react";

const useProducts = (filters) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    setLoading(true); // Reset loading state before fetch
    try {
      const data = await fetchProducts(filters); // Pass filters to fetchProducts
      setProducts(data.product); // Assuming the response contains a "product" array
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [filters]); // Refetch when filters change

  return { products, loading, error };
};

export default useProducts;
