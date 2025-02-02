import { useEffect, useState } from "react";
import { fetchCartList } from "@/lib/api"; // Adjust the import based on your file structure
import { useCartContext } from "@/context/CartContext";

const useCart = (customerId = 5) => {
  const [cart, setCart] = useState(null); // State to hold the cart data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const { setCartCount } = useCartContext(); // Get setCartCount from context

  const loadCart = async () => {
    try {
      const data = await fetchCartList(customerId); // Fetch the cart list
      const newCartCount = data.data[0].cart_items.length; // Assuming the structure
      setCartCount(newCartCount); // Update cart count in context
      setCart(data.data); // Assuming the cart data is in data.data
    } catch (err) {
      setError(err.message); // Set the error message
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  useEffect(() => {
    loadCart(); // Call the function to load cart data
  }, []); // Depend on customerId to reload if it changes

  return { cart, loading, error, refreshCart: loadCart }; // Return cart data, loading and error states
};

export default useCart;
