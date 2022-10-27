import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  res: [],
};

const removeFilesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setRes: (state, action) => {
      state.res = action.payload;
    },
  },
});

export default removeFilesSlice.reducer;
export const { setRes } = removeFilesSlice.actions;
