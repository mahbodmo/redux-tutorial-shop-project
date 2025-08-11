"use client";

import { useFavorites } from "@/app/hooks/use-favorites";
import Button from "@/app/shared/button";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/app/store/favorite-slice";
import { useAppDispatch } from "@/app/store/main";
import { ProductType } from "@/app/types/product";
import { Star, StarHalf } from "lucide-react";
import React from "react";
import { toast } from "sonner";

type Props = {
  product: ProductType;
};

export default function FavoriteBtn({ product }: Props) {
  const dispatch = useAppDispatch();
  const { favorites } = useFavorites();

  const isFavorite = favorites.find((item) => item.product.id === product.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
      toast.success(`${product.title} removed from your favorites list`);
    } else {
      dispatch(addToFavorites(product));
      toast.success(`${product.title} added to your favorites list`);
    }
  };

  return (
    <Button onClick={handleClick} className="absolute left-4 bottom-4">
      {isFavorite ? <Star /> : <StarHalf />}
    </Button>
  );
}
