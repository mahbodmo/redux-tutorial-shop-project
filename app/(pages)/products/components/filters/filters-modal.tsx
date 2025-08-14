import React, { useState } from "react";
import FilterRow from "./filter-row";
import Input from "@/app/shared/input";
import Button from "@/app/shared/button";
import { redirect } from "next/navigation";
import { urlWithQueryParams } from "@/app/lib/utils";
import Modal from "@/app/shared/modal";

type Props = {
  onClose: () => void;
  productNameQuery?: string;
};

export default function FiltersModal({ onClose, productNameQuery }: Props) {
  const [name, setName] = useState<string>(productNameQuery || "");

  const handleRemoveFilters = () => {
    onClose();
    redirect("/products");
  };

  const handleSubmit = () => {
    onClose();
    redirect(
      urlWithQueryParams("/products", {
        productName: name,
      })
    );
  };

  return (
    <Modal onClose={onClose}>
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
    </Modal>
  );
}
