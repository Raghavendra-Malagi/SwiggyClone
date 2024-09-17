import { createSlice } from "@reduxjs/toolkit";
const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (store, action) => {
      store.items.push(action.payload);
    },
    clearItems: (store, action) => {
      store.items.length = 0;
    },
    removeItems: (store, action) => {
      store.items.pop(action.payload);
    },
  },
});
export const { addItems, clearItems, removeItems } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
