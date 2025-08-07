import { ProductType } from "@/app/types/product";
import Link from "next/link";
import React from "react";
import AddToCartButton from "./add-to-cart";

type Props = {
  product: ProductType;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="relative">
      <Link
        href={`/products/${product.id}`}
        className="bg-gray-200 shadow-xl rounded-md p-4 flex flex-col gap-y-4 min-h-[300px]"
      >
        <div className="flex justify-between gap-x-4">
          <h4 className="text-[18px]">{product.title}</h4>
          <div className="bg-red-200 w-fit h-fit p-2 rounded-full text-red-900">
            {product.category}
          </div>
        </div>
        <p>{product.price} $</p>
        <p className="text-[14px] text-gray-600">{product.description}</p>
      </Link>
      <AddToCartButton />
    </div>
  );
}
