"use client"
import { createSlice } from "@reduxjs/toolkit";
interface initialStateTypes {
  searchQuery:any;
  searchBoxToggle: boolean;
}
const initialState: initialStateTypes = {
  searchQuery: "",
  searchBoxToggle: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearchQuery: (state) => {
      state.searchQuery = "";
    },
    toggleSearchBox: (state) => {
      state.searchBoxToggle = !state.searchBoxToggle;
    },
    openSearchBox: (state) => {
      state.searchBoxToggle = true;
    },
    closeSearchBox: (state) => {
      state.searchBoxToggle = false;
    },
  },
});

export const { setSearchQuery, clearSearchQuery, toggleSearchBox, openSearchBox, closeSearchBox } =
  searchSlice.actions;
export default searchSlice.reducer;
