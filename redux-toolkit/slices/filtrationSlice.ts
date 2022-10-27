import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: "",
};

const filtrationSlice = createSlice({
  name: "filtration",
  initialState,
  reducers: {
    getFile: (state, action) => {
      state.file = action.payload;
    },
  },
});

export default filtrationSlice.reducer;
export const { getFile } = filtrationSlice.actions;
