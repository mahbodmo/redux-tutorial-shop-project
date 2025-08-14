import React from "react";
import CategoryList from "./components/category-list";

export default async function Wrapper() {
  const categories = await fetch(
    "https://dummyjson.com/products/categories"
  ).then((res) => res.json());

  return <CategoryList categories={categories} />;
}
