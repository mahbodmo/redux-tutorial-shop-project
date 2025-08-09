import AddToCartButton from "@/app/shared/add-to-cart-button";
import CategoryBadge from "@/app/shared/category-badge";
import Price from "@/app/shared/price";
import { ProductType } from "@/app/types/product";
import Image from "next/image";
import React from "react";

type Props = {
  product: ProductType;
};

export default function Wrapper({ product }: Props) {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-start gap-x-4">
        <div className="bg-gray-200 shadow-l w-fit rounded-2xl">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col gap-y-6 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-[20px] font-bold">
              {product.title} ({product.rating} / 5)
            </h2>
            <CategoryBadge category={product.category} />
          </div>

          <p className="text-[14px] text-gray-600">{product.description}</p>

          <Price price={product.price} />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 relative">
        <p>
          <strong>Stock:</strong> {product.stock || "-"}
        </p>
        <p>
          <strong>Tags:</strong>{" "}
          {product.tags.map((tag) => tag).join(", ") || "-"}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand || "-"}
        </p>
        <p>
          <strong>Weight:</strong> {`${product.weight} KG` || "-"}
        </p>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
