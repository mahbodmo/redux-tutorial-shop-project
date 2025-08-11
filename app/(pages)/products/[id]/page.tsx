import { notFound } from "next/navigation";
import React from "react";
import Wrapper from "./wrapper";
import Breadcrumb from "@/app/shared/breadcrumb";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export default async function ProductSinglePage({ params }: Props) {
  const { id } = await params;

  try {
    const product = await fetch(`https://dummyjson.com/products/${id}`).then(
      (res) => res.json()
    );

    const breadcrumbItems = [
      {
        title: "Products",
        link: "/products",
      },
      {
        title: product.title,
      },
    ];

    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <Wrapper product={product} />
      </>
    );
  } catch (e) {
    console.log(e);
    return notFound();
  }
}
