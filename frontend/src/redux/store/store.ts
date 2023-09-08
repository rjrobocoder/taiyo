import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/ContactsSlice";
import MenuToggleSlice from "./slices/MenuToggleSlice";
import SidebarToggleSlice from "./slices/SidebarToggleSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice, // Use the reducer from your slice
    menu: MenuToggleSlice,
    sidebar: SidebarToggleSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
