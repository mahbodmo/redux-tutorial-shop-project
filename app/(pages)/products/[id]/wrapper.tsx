import AddToCartButton from "@/app/shared/add-to-cart-button";
import CategoryBadge from "@/app/shared/category-badge";
import { ProductType } from "@/app/types/product";
import Image from "next/image";
import React from "react";

type Props = {
  product: ProductType;
};

export default function Wrapper({ product }: Props) {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-4 md:flex-row items-start relative">
        <div className="bg-gray-200 rounded-xl">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <h3>
            {product.title} ({product.rating} / 5)
          </h3>
          <CategoryBadge category={product.category} />
        </div>
        <AddToCartButton product={product} />
      </div>
      <p>{product.description}</p>
    </div>
  );
}
