"use client";

import Button from "@/app/shared/button";
import React, { useState } from "react";
import { FilterIcon } from "lucide-react";
import FiltersModal from "./filters-modal";
import FilterBadge from "./filter-badge";

type Props = {
  productNameQuery?: string;
};

export default function FilterButton({ productNameQuery }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  let filterCount = 0;

  if (productNameQuery && productNameQuery !== "") filterCount += 1;

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="border-black border-2 rounded-full py-2 px-6 flex items-center gap-x-2 relative"
      >
        <FilterBadge count={filterCount} />
        <FilterIcon size={16} />
        Filters
      </Button>

      {openModal && (
        <FiltersModal
          onClose={() => setOpenModal(false)}
          productNameQuery={productNameQuery}
        />
      )}
    </>
  );
}
