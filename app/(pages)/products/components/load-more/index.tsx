"use client";

import { DEFAULT_PAGINATION_LIMIT } from "@/app/const";
import { urlWithQueryParams } from "@/app/lib/utils";
import Button from "@/app/shared/button";
import useQueryParams from "@/app/utils/use-query-params";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  limit: number;
  hasNewPage: boolean;
};

export default function LoadMoreBtn({ limit, hasNewPage }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { query } = useQueryParams();

  const handleLoadMore = () => {
    router.push(
      urlWithQueryParams(pathname, {
        ...query,
        limit: limit + DEFAULT_PAGINATION_LIMIT,
      }),
      {
        scroll: false,
      }
    );
  };

  if (!hasNewPage) {
    return null;
  }

  return (
    <div className='my-18 mx-auto w-fit'>
      <Button
        onClick={handleLoadMore}
        className='bg-gray-200 shadow-lg rounded-full px-4 py-2 border-2 border-black'
      >
        Load more
      </Button>
    </div>
  );
}
