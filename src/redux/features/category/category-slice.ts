"use client"
import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../../../../typing";
interface initialStateTypes {
  categoryBoxToggle: boolean;
  categories: Category[] | null;
}
const initialState: initialStateTypes = {
  categoryBoxToggle: false,
  categories: null,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    openCategoryBox: (state) => {
      state.categoryBoxToggle = true;
    },
    closeCategoryBox: (state) => {
      state.categoryBoxToggle = false;
    },
    toggleCategoryBox: (state) => {
      state.categoryBoxToggle = !state.categoryBoxToggle;
    },
  },
});

export const { openCategoryBox, closeCategoryBox, toggleCategoryBox } = categorySlice.actions;
export default categorySlice.reducer;
