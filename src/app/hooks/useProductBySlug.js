import { fetchProductBySlug } from "@/lib/api";
import { useEffect, useState } from "react";

const useProductBySlug = (slug) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (!slug) return; // Guard clause for empty slug

      try {
        const data = await fetchProductBySlug(slug);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [slug]);

  return { product, loading, error };
};

export default useProductBySlug;
