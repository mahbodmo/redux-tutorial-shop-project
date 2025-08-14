import { CategoryType } from "@/app/types/category";
import Link from "next/link";
import React from "react";

type Props = {
  category: CategoryType;
};

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/products/categories/${category.slug}`}
      className="bg-gray-200 shadow-l rounded-2xl p-4 min-h-[90px] flex items-center justify-center"
    >
      {category.name}
    </Link>
  );
}
