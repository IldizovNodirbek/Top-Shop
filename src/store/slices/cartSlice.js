import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: {} }, // { [id]: qty }
  reducers: {
    addToCart: (state, { payload: id }) => {
      state.items[id] = (state.items[id] || 0) + 1;
    },
    removeFromCart: (state, { payload: id }) => {
      delete state.items[id];
    },
    clearCart: (state) => { state.items = {}; },
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const selectCartCount = (state) => Object.values(state.cart.items).reduce((a,b)=>a+b,0);
export default cartSlice.reducer;
