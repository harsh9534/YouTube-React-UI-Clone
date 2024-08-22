import { createSlice } from "@reduxjs/toolkit";

const searchSLice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSLice.actions;

export default searchSLice.reducer;
