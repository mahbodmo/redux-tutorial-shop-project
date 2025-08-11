import { ProductType } from "@/app/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteItemType } from "../types/favorite";

type FavoritesState = {
  favoriteItems: FavoriteItemType[];
};

const initialState: FavoritesState = {
  favoriteItems: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<ProductType>) {
      state.favoriteItems.push({ product: action.payload });
    },
    removeFromFavorites(state, action: PayloadAction<ProductType>) {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.product.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;

export default favoriteSlice;
