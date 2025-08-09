import { ProductType } from "@/app/types/product";
import { notFound } from "next/navigation";
import React from "react";
import Wrapper from "./wrapper";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export default async function ProductSinglePage({ params }: Props) {
  const { id } = await params;

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`).then(
      (res) => res.json()
    );

    const product: ProductType = response;

    return <Wrapper product={product} />;
  } catch (e) {
    console.log(e);
    return notFound();
  }
}
