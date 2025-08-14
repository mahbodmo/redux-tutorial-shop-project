import { ProductType } from "@/app/types/product";
import Link from "next/link";
import React from "react";
import AddToCartButton from "../add-to-cart-button";
import CategoryBadge from "@/app/shared/category-badge";
import Price from "@/app/shared/price";
import Image from "next/image";
import FavoriteBtn from "./components/favorite-btn";

type Props = {
  product: ProductType;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="relative">
      <Link
        href={`/products/${product.id}`}
        className="bg-gray-200 shadow-l rounded-2xl p-4 flex flex-col gap-y-4 min-h-[400px]"
      >
        <div className="flex items-center gap-x-2">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={50}
            height={50}
          />
          <h4 className="text-[16px] font-bold">{product.title}</h4>
        </div>
        <CategoryBadge category={product.category} />
        <div className="flex items-center justify-between">
          <Price price={product.price} />
          <p>
            <strong>in Stock: </strong>
            {product.stock}
          </p>
        </div>
        <p className="text-[14px] text-gray-600">{product.description}</p>
      </Link>
      <FavoriteBtn product={product} />
      <AddToCartButton product={product} />
    </div>
  );
}
