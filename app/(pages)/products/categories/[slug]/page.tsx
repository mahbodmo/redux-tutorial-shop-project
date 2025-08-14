import Breadcrumb from "@/app/shared/breadcrumb";
import ProductCard from "@/app/shared/product-card";
import { CategoryType } from "@/app/types/category";
import { ProductType } from "@/app/types/product";
import React from "react";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: Params) {
  const { slug } = await params;

  const categories = await fetch(
    "https://dummyjson.com/products/categories"
  ).then((res) => res.json());

  const category = categories.find((item: CategoryType) => item.slug === slug);

  const response = await fetch(
    `https://dummyjson.com/products/category/${slug}`
  ).then((res) => res.json());

  const categoryProducts = response?.products;

  const breadCrumbItems = [
    {
      title: "Products",
      link: "/products",
    },
    { title: "Categories", link: "/products/categories" },
    { title: category.name },
  ];

  return (
    <div className="flex flex-col gap-y-6">
      <Breadcrumb items={breadCrumbItems} />
      <h3>
        <strong>{category.name}</strong> products
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categoryProducts.map((product: ProductType) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
