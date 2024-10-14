import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://epos.enke.in/api/product-searchbar");
  const data = await res.json();
  return NextResponse.json(data);
}
