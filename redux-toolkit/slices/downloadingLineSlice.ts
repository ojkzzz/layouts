import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibility: false,
};

const downloadingLineSlice = createSlice({
  name: "downloadingLine",
  initialState,
  reducers: {
    setVisibility: (state) => {
      state.visibility = true;
    },
  },
});

export default downloadingLineSlice.reducer;
export const { setVisibility } = downloadingLineSlice.actions;
