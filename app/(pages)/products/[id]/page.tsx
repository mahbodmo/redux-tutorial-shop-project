import { notFound } from "next/navigation";
import React from "react";
import Wrapper from "./wrapper";
import Breadcrumb from "@/app/shared/breadcrumb";

type Params = {
  params: Promise<{
    id: number;
  }>;
};

export default async function ProductSinglePage({ params }: Params) {
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
        title: "Categories",
        link: "/products/categories",
      },
      {
        title: product.category,
        link: `/products/categories/${product.category}`,
      },
      {
        title: product.title,
      },
    ];

    return (
      <div className="flex flex-col gap-y-6">
        <Breadcrumb items={breadcrumbItems} />
        <Wrapper product={product} />
      </div>
    );
  } catch (e) {
    console.log(e);
    return notFound();
  }
}
