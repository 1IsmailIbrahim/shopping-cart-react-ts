import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
import {
  addItemToShoppingCart,
  removeItemFromShoppingCart,
} from "../../../utils/functions";
import { RootState } from "../../store";

interface CartItemsState {
  cartItems: IProduct[];
}

const initialState: CartItemsState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, actionPayload: PayloadAction<IProduct>) => {
      state.cartItems = addItemToShoppingCart(
        state.cartItems,
        actionPayload.payload
      );
    },
    removeItemToCart: (state, actionPayload: PayloadAction<IProduct>) => {
      state.cartItems = removeItemFromShoppingCart(
        state.cartItems,
        actionPayload.payload
      );
    },
  },
});

export const { addItemToCart, removeItemToCart } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart;

export default cartSlice.reducer;
