"use client";

import Button from "@/app/shared/button";
import { SortDescIcon, X } from "lucide-react";
import React, { useState } from "react";

type SortOptionsType = {
  title: string;
  value: string;
};

const items = [
  {
    title: "Price",
    value: "price",
  },
  {
    title: "Stock",
    value: "stock",
  },
];

export default function SortButton() {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<SortOptionsType>();

  return (
    <div className='relative'>
      <Button
        onClick={() => setDropDown(!dropDown)}
        className='border-black border-2 rounded-full py-2 px-6 flex items-center gap-x-2'
      >
        <SortDescIcon size={16} />
        Sort
      </Button>

      {selectedSort && (
        <div className='absolute top-[-12] right-10 bg-gray-200 px-4 flex items-center rounded-full'>
          {selectedSort.title}
          <X
            size={16}
            color='gray'
            className='cursor-pointer'
            onClick={() => setSelectedSort(undefined)}
          />
        </div>
      )}

      {dropDown && (
        <div className='bg-white shadow-2xl absolute top-12 left-0 px-4 py-2 rounded-xl w-full flex flex-col z-130'>
          {items.map((item: SortOptionsType) => (
            <Button
              onClick={() => {
                setSelectedSort(item);
                setDropDown(false);
              }}
              className='hover:bg-gray-300 rounded-lg p-2'
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
