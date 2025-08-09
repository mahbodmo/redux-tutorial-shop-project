import React, { useState } from "react";
import FilterRow from "./filter-row";
import Input from "@/app/shared/input";
import Divider from "@/app/shared/divider";
import DropDown from "@/app/shared/dropdown";
import { CategoryType } from "@/app/types/category";
import Button from "@/app/shared/button";
import { redirect } from "next/navigation";
import { urlWithQueryParams } from "@/app/lib/utils";

const categoryItems = [
  {
    title: "Beauty",
    value: "beauty",
  },
  {
    title: "Fragrances",
    value: "fragrances",
  },
  {
    title: "Furniture",
    value: "furniture",
  },
  {
    title: "Groceries",
    value: "groceries",
  },
];

export default function Filters() {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<CategoryType>();
  const [minPrice, setMinPrice] = useState<string>("0");
  const [maxPrice, setMaxPrice] = useState<string>("1000");

  const handleRemoveFilters = () => {
    setName("");
    setCategory(undefined);
    setMinPrice("0");
    setMaxPrice("1000");
    redirect("/products");
  };

  const handleSubmit = () => {
    redirect(
      urlWithQueryParams("/products", {
        productName: name,
        category: category?.value,
        minPrice: minPrice,
        maxPrice: maxPrice,
      })
    );
  };

  return (
    <div>
      <FilterRow title="Product Name">
        <Input
          type="text"
          placeHolder="Filter by product name"
          autoFocus
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </FilterRow>

      <Divider />

      <FilterRow title="Category">
        <DropDown
          placeHolder="Select a category"
          items={categoryItems}
          onSelect={(item) => setCategory(item)}
          selectedCategory={category}
        />
      </FilterRow>

      <Divider />

      <FilterRow title="Price">
        <div className="flex flex-col gap-y-4">
          <Input
            type="number"
            placeHolder="From"
            autoFocus
            value={minPrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMinPrice(e.target.value)
            }
            afterNode={"$"}
          />

          <Input
            type="number"
            placeHolder="To"
            value={maxPrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMaxPrice(e.target.value)
            }
            afterNode={"$"}
          />
        </div>
      </FilterRow>

      <div className="flex items-center justify-between mt-10">
        <Button onClick={handleRemoveFilters} className="text-red-700">
          Remove all filters
        </Button>

        <Button
          onClick={handleSubmit}
          className="border-2 border-black px-4 py-2 rounded-lg"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
