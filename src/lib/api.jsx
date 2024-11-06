import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// Check if we are in the browser environment
// let BEARER_TOKEN;
// if (typeof window !== "undefined") {
//   BEARER_TOKEN = localStorage.getItem("token");
// }
const BEARER_TOKEN = "22|0KQT8UdMrmGlYVZJR9HsYVA8XlcmmmuZb4PbNifL";

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
        "X-Requested-With": "XMLHttpRequest",
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

export const removeCart = async (itemId) => {
  try {
    const { data } = await commonRequest({
      method: "POST", // Assuming DELETE is correct; adjust if necessary
      route: "/cart/remove-from-cart", // Adjust this route based on your API
      body: {
        cart_item_id: itemId,
        remove_all: "true",
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

export const fetchOrders = async () => {
  try {
    const response = await commonRequest({
      method: "GET",
      route: "/order/list-orders",
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const fetchOrderDetails = async ({ orderId = 1 }) => {
  try {
    const response = await commonRequest({
      method: "GET",
      route: "/order/order-details",
      params: {
        order_id: orderId,
      },
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const updateProfile = async (profileData = {}) => {
  const { name, email, gender, pin_code, password, password_confirm } =
    profileData;

  const params = {
    name,
    email,
    gender,
    pin_code,
    password,
    password_confirm,
  };

  try {
    const { data } = await commonRequest({
      method: "POST",
      route: "/customer/profile",
      params: params,
      body: {},
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Failed to fetch products: " + error.message);
  }
};

export const fetchAddresses = async () => {
  try {
    const response = await commonRequest({
      method: "GET",
      route: "/customer/list-address",
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const addAddress = async (addressData = {}) => {
  const {
    name,
    address,
    alt_phone,
    landmark,
    pin_code,
    state_id,
    district_id,
    city,
    address_type,
  } = addressData;

  const params = {
    name,
    address,
    alt_phone,
    landmark,
    pin_code,
    state_id,
    district_id,
    city,
    address_type,
  };

  try {
    const { data } = await commonRequest({
      method: "POST",
      route: "/customer/add-address",
      params: params,
      body: {},
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    return data;
  } catch (error) {
    throw new Error("Failed to add address: " + error.message);
  }
};

export const updateAddress = async (addressData = {}) => {
  const {
    id,
    name,
    address,
    alt_phone,
    landmark,
    pin_code,
    state_id,
    district_id,
    city,
    address_type,
  } = addressData;

  const body = {
    name,
    address,
    alt_phone,
    landmark,
    pin_code,
    state_id,
    district_id,
    city,
    address_type,
  };

  try {
    const { data } = await commonRequest({
      method: "POST",
      route: `/customer/update-address/${id}`,
      body: body,
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    return data;
  } catch (error) {
    throw new Error("Failed to add address: " + error.message);
  }
};

export const fetchStates = async () => {
  const { data } = await commonRequest({
    method: "GET",
    route: "/location/get-states",
    config: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });
  return data;
};

export const fetchDistricts = async ({ stateId }) => {
  const params = {
    state_id: stateId,
  };
  const { data } = await commonRequest({
    method: "GET",
    route: "/location/get-district",
    params,
    config: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });
  return data;
};

export const customerSignIn = async (signinData = {}) => {
  const { phone, password } = signinData;

  const params = {
    phone,
    password,
  };

  try {
    const { data } = await commonRequest({
      method: "POST",
      route: "/signin",
      params: params,
      body: {},
      config: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Failed to add address: " + error.message);
  }
};

export const addToOrder = async (customerId = 5) => {
  try {
    const { data } = await commonRequest({
      method: "POST", // Assuming DELETE is correct; adjust if necessary
      route: "/order/add-to-order", // Adjust this route based on your API
      body: {
        customer_id: customerId,
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
