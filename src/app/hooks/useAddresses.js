import { fetchAddresses } from "@/lib/api";
import { useEffect, useState } from "react";

const useAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAddresses = async () => {
      try {
        const data = await fetchAddresses();
        setAddresses(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadAddresses();
  }, []);

  return { addresses, loading, error, refetchAddresses: fetchAddresses };
};

export default useAddresses;
