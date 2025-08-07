import Link from "next/link";
import React from "react";

type MenuItemsType = {
  title: string;
  url: string;
};

export default function MenuItems() {
  const items = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "Contact", url: "/contact" },
    { title: "About", url: "/about" },
  ];

  return (
    <div className="flex items-center gap-x-4">
      {items.map((item: MenuItemsType, i: number) => (
        <Link href={item.url} key={i}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
