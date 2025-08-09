"use client";

import Button from "@/app/shared/button";
import Modal from "@/app/shared/modal";
import React, { useState } from "react";
import Filters from "./filters";
import { FilterIcon } from "lucide-react";

export default function FilterButton() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="border-black border-2 rounded-full py-2 px-6 flex items-center gap-x-2"
      >
        <FilterIcon size={16} />
        Filters
      </Button>

      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <Filters />
        </Modal>
      )}
    </>
  );
}
