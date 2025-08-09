"use client";

import Button from "@/app/shared/button";
import { addProduct, useAppDispatch } from "@/app/store/main";
import { ProductType } from "@/app/types/product";
import { PlusCircleIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

type Props = {
  product: ProductType;
};

export default function AddToCartButton({ product }: Props) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addProduct(product));
    toast.success("Added to your cart successfully");
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
