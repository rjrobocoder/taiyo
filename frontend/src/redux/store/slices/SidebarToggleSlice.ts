import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = true;

const sidebarToggleSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      return true;
    },
    closeSidebar: (state) => {
      return false;
    },
    toggleSidebar: (state) => {
      return !state;
    },
  },
});

// Export the reducers
export const { openSidebar, closeSidebar, toggleSidebar } = sidebarToggleSlice.actions;

// Export the reducer itself
export default sidebarToggleSlice.reducer;
