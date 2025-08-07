"use client";

import Button from "@/app/shared/button";
import { PlusCircleIcon } from "lucide-react";
import React from "react";

export default function AddToCartButton() {
  const handleClick = () => {
    alert("added successfully");
  };

  return (
    <Button
      className="absolute bottom-2 right-2 flex gap-x-2 border-2 border-black p-2 rounded-full"
      onClick={handleClick}
    >
      Add to cart <PlusCircleIcon />
    </Button>
  );
}
