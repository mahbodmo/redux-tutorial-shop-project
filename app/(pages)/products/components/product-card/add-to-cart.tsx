"use client";

import { addProduct, useAppDispatch } from "@/app/store/main";
import { ProductType } from "@/app/types/product";
import { PlusCircleIcon } from "lucide-react";
import React, { useRef } from "react";

type Props = {
  product: ProductType;
};

export default function AddToCartButton({ product }: Props) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addProduct(product));
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={buttonRef}
      className='absolute bottom-2 right-2 flex gap-x-2 border-2 border-black p-2 rounded-full'
      onClick={handleClick}
    >
      Add to cart <PlusCircleIcon />
    </button>
  );
}
