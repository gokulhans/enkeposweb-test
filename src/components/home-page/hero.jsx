"use client";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div>
      <h1 className="bg-primary text-secondary p-base">Welcome to Epos</h1>
    </div>
  );
}
