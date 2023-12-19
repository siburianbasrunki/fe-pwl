import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";
import productReducers from "./productSlice";
import authReducers from "./authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducers,
    product: productReducers,
    auth: authReducers,
  },
});

export default store;
