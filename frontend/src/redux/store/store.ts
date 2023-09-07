import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/ContactsSlice"; // Import your slice

export const store = configureStore({
  reducer: {
    contacts: contactsSlice, // Use the reducer from your slice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
