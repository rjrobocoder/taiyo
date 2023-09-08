import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the menu as a boolean indicating whether it's open or closed
const initialState: boolean = false;

const menuToggleSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      return true;
    },
    closeMenu: (state) => {
      return false;
    },
    toggleMenu: (state) => {
      return !state;
    },
  },
});

// Export the reducers
export const { openMenu, closeMenu, toggleMenu } = menuToggleSlice.actions;

// Export the reducer itself
export default menuToggleSlice.reducer;
