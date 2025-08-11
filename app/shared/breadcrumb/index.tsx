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
  return (
    <div className="mb-6 flex items-center gap-x-2">
      {items.map((item: BreadcrumbType, i: number) => (
        <div key={i}>
          {item.link ? (
            <Link href={item.link}>{item.title}</Link>
          ) : (
            <p>{item.title}</p>
          )}
          {i !== items.length - 1 && " > "}
        </div>
      ))}
    </div>
  );
}
