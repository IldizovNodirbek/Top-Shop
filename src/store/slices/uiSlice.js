import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { showCategories: false },
  reducers: {
    toggleCategories: (state) => { state.showCategories = !state.showCategories; },
    closeCategories: (state) => { state.showCategories = false; },
  }
});

export const { toggleCategories, closeCategories } = uiSlice.actions;
export default uiSlice.reducer;
