import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// const BEARER_TOKEN = localStorage.getItem("token");
const BEARER_TOKEN = "7|xaTlZTt7pZwo1tzEAq75gOWthbILbCRWCtatmmJa";

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

// // Response interceptor
apiInstance.interceptors.response.use((response) => {
  // You can modify the response data here
  // return response.data;
  return response;
});

export const commonRequest = async ({
  method,
  route,
  body,
  config,
  params,
}) => {
  let requestConfig = {
    method,
    url: route,
    data: body, // This is the request body
    headers: config, // This is for headers
    params, // This is for query parameters
    // withCredentials: true, // Uncomment if you need to send credentials
  };

  try {
    const response = await apiInstance(requestConfig);
    return response;
  } catch (error) {
    console.error("API Request Error:", error);
    throw new Error(error.response?.data?.message || "API request failed");
  }
};

export const fetchProducts = async (filters = {}) => {
  const { term, category, location, page } = filters;

  const params = {};
  if (term) params.filter_name = term;
  if (category) params.filter_category = category;
  if (location) params.location = location;
  if (page) params.page = page;

  try {
    const { data } = await commonRequest({
      method: "GET",
      route: "/product-searchbar",
      params: params,
    });
    return data;
  } catch (error) {
    throw new Error("Failed to fetch products: " + error.message);
  }
};

export const fetchCategories = async () => {
  const { data } = await commonRequest({
    method: "GET",
    route: "/category-searchbar",
  });
  return data;
};

export const fetchProductBySlug = async (slug) => {
  try {
    const { data } = await commonRequest({
      method: "GET",
      route: "/product-searchbar",
    });

    // Find the product with the matching slug
    const product = data.product.find((item) => item.product_slug === slug);
    if (!product) {
      throw new Error(`Product with slug "${slug}" not found`);
    }

    return product;
  } catch (error) {
    throw new Error("Failed to fetch product: " + error.message);
  }
};

export const addToCart = async (productId, quantity, customerId = 5) => {
  try {
    const { data } = await commonRequest({
      method: "POST",
      route: "/cart/add-to-cart",
      body: {
        app_type: "api",
        product_id: productId,
        quantity: quantity,
        customer_id: customerId,
      },
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

export const fetchCartList = async (customerId = 5) => {
  try {
    const { data } = await commonRequest({
      method: "POST",
      route: "/cart/list-carts",
      body: {},
      params: {
        customer_id: customerId,
      },
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching cart list:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

export const decreaseCartItemQuantity = async (itemId) => {
  try {
    const { data } = await commonRequest({
      method: "POST",
      route: "/cart/remove-from-cart", // Adjust this route based on your API
      body: {
        cart_item_id: itemId,
        remove: true,
      },
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

export const removeCartItem = async (itemId) => {
  try {
    const { data } = await commonRequest({
      method: "POST", // Assuming DELETE is correct; adjust if necessary
      route: "/cart/remove-from-cart", // Adjust this route based on your API
      body: {
        cart_item_id: itemId,
        remove: "true",
      },
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error removing cart item:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

export const changePassword = async (
  currentPassword,
  newPassword,
  confirmPassword
) => {
  try {
    const { data } = await commonRequest({
      method: "POST",
      route: "/customer/change-password",
      body: {},
      params: {
        current_password: currentPassword,
        password: newPassword,
        confirm_password: confirmPassword,
      },
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`, // Include your Bearer token here
      },
    });
    console.log(data);
    return data; // Return the response data
  } catch (error) {
    console.error("Error changing password:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

export const editPassword = async (
  confirmPassword
) => {
  try {
    const { data } = await commonRequest({
      method: "POST",
      route: "/customer/change-password",
      body: {},
      params: {
        confirm_password: confirmPassword,
      },
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`, // Include your Bearer token here
      },
    });
    console.log(data);
    return data; // Return the response data
  } catch (error) {
    console.error("Error changing password:", error);
    throw error; // Re-throw the error for handling in the component
  }
};
