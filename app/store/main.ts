import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ProductType } from "../types/product";

// cart slice
// favorite products slice
// auth slice

type CartItem = {
  product: ProductType;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
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

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
