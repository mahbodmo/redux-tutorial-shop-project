import { CategoryType } from "@/app/types/category";
import React from "react";
import CategoryCard from "./category-card";

type Props = {
  categories: CategoryType[];
};

export default function CategoryList({ categories }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {categories.map((category, i) => (
        <CategoryCard category={category} key={i} />
      ))}
    </div>
  );
}
