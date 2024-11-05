import { fetchOrders } from "@/lib/api";
import { useEffect, useState } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data.data); // Assuming data.data contains the array of orders
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadOrders();
  }, []); // Hook will re-run if the token changes

  return { orders, loading, error };
};

export default useOrders;
