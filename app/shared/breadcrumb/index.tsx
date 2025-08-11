import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type BreadcrumbType = {
  title: string;
  link?: string;
};

type Props = {
  items: BreadcrumbType[];
};

export default function Breadcrumb({ items }: Props) {
  const breadcrimbDivider = (
    <ChevronRight size={18} color="black" className="mx-2" />
  );

  const breadcrumbItem = items.map((item: BreadcrumbType, i: number) => (
    <div
      key={i}
      className={`flex items-center ${
        i !== items.length - 1 ? "text-gray-500" : "text-black"
      }`}
    >
      {item.link ? (
        <Link href={item.link}>{item.title}</Link>
      ) : (
        <p>{item.title}</p>
      )}
      {i !== items.length - 1 && breadcrimbDivider}
    </div>
  ));

  return (
    <div className="mb-6 flex items-center text-[15px]">{breadcrumbItem}</div>
  );
}
