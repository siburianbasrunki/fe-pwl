import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: Cookies.get("token"),
  userRole: Cookies.get("role"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.token = action.payload.token;
      state.userRole = action.payload.role;
    },
    removeData: (state) => {
      state.token = null;
      state.userRole = null;
    },
  },
});

export const { setData, removeData } = authSlice.actions;

export default authSlice.reducer;
