"use client";

import { CategoryType } from "@/app/types/category";
import { ChevronDown, X } from "lucide-react";
import React, { useState } from "react";
import Button from "../button";

type Props = {
  placeHolder?: string;
  items: CategoryType[];
  selectedCategory: CategoryType | undefined;
  onSelect: (item: any) => void;
};

export default function DropDown({
  placeHolder,
  items,
  selectedCategory,
  onSelect,
}: Props) {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className="border-2 border-black rounded-xl p-2 flex items-center justify-between cursor-pointer"
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        {selectedCategory ? selectedCategory.title : placeHolder}
        {selectedCategory ? (
          <X
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelect(undefined);
              setOpenDropDown(true);
            }}
          />
        ) : (
          <ChevronDown className="ml-auto" />
        )}
      </div>

      {openDropDown && (
        <div className="bg-gray-200 absolute top-12 left-0 px-4 py-2 rounded-xl w-full flex flex-col z-130">
          {items.map((item: CategoryType) => (
            <Button
              onClick={() => {
                onSelect(item);
                setOpenDropDown(false);
              }}
              className="hover:bg-gray-300 rounded-lg p-2"
              key={item.value}
            >
              {item.title}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
