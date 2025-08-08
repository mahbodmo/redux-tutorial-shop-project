import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ProductType } from "../types/product";

// cart slice
// favorite products slice
// auth slice

type CartState = {
  products: ProductType[];
  totalPrice: number;
};

const initialState: CartState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeProduct: (state) => {},
    clearCart: (state) => {
      state.products = initialState.products;
      state.totalPrice = initialState.totalPrice;
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
