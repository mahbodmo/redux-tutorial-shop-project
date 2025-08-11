import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../types/cart";
import { ProductType } from "../types/product";

type CartState = {
  items: CartItemType[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      if (state.items.find((item) => item.product.id === action.payload.id)) {
        state.items.find(
          (item) => item.product.id === action.payload.id
        )!.quantity += 1;
      } else {
        state.items.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },
    reduceProduct: (state, action: PayloadAction<ProductType>) => {
      if (state.items.find((item) => item.product.id === action.payload.id)) {
        state.items.find(
          (item) => item.product.id === action.payload.id
        )!.quantity -= 1;
      } else {
        return;
      }
    },
    removeProduct: (state, action: PayloadAction<ProductType>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.items = initialState.items;
    },
  },
});

export const { addProduct, reduceProduct, removeProduct, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export default cartSlice;
