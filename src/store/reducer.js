import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
};

export const mainSlice = createSlice({
  name: "showSidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { showSidebar } = mainSlice.actions;
export default mainSlice.reducer;
