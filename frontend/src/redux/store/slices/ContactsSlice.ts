import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  id: number;
  name: string;
  email: string;
  status: string;
}

// Define the initial state as an array of Contact objects
const initialState: Contact[] = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      // Add a new contact to the state
      state.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      // Find the index of the contact to update by ID
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      );

      // If the contact is found, replace it with the updated contact
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      // Remove a contact by ID from the state
      return state.filter((contact) => contact.id !== action.payload);
    },
    deleteContacts: (state, action: PayloadAction<number[]>) => {
      // Delete multiple contacts by IDs from the state
      return state.filter((contact) => !action.payload.includes(contact.id));
    },
  },
});

// Export the reducer and actions
export const { addContact, updateContact, removeContact, deleteContacts } =
  contactsSlice.actions;

// Export the reducer itself
export default contactsSlice.reducer;
