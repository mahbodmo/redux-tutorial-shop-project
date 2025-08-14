import React from "react";
import Wrapper from "./wrapper";
import Breadcrumb from "@/app/shared/breadcrumb";

export default function CategoriesPage() {
  const breadCrumbItems = [
    {
      title: "Products",
      link: "/products",
    },
    { title: "Categories" },
  ];

  return (
    <div className="flex flex-col gap-y-6">
      <Breadcrumb items={breadCrumbItems} />
      <Wrapper />
    </div>
  );
}
