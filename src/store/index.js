import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import searchReducer from './slices/searchSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    search: searchReducer,
    ui: uiReducer,
  },
});

export default store;
