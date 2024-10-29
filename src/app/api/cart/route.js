// app/api/cart/route.js
import { fetchCartList } from "@/lib/api";
import axios from "axios";

export async function GET(request) {
  const url = "https://epos.enke.in/api/cart/list-carts?customer_id=5";
  const BEARER_TOKEN = "6|D5YnbHlVL0GtxjoVYFmBqGhj1ScqFGpsKfgsmA7R"; // Use environment variable for security

  try {
    const data = await fetchCartList();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching cart list:", error);
    return new Response("Error fetching cart list", {
      status: error.response?.status || 500,
    });
  }
}
