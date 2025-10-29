import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { query: '' },
  reducers: {
    setQuery: (state, { payload }) => { state.query = payload; },
    clearQuery: (state) => { state.query = ''; }
  }
});

export const { setQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;
