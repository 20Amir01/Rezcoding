"use client";
import { createSlice } from "@reduxjs/toolkit";
interface initialStateTypes {
  mobileMenuToggle: boolean;
}
const initialState: initialStateTypes = {
  mobileMenuToggle: false,
};
const mobileMenuSlice = createSlice({
  name: "mobile-menu",
  initialState,
  reducers: {
    openMobileMenu: (state) => {
      state.mobileMenuToggle = true;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuToggle = false;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuToggle = !state.mobileMenuToggle;
    },
  },
});

export const { openMobileMenu, closeMobileMenu, toggleMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
