import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disabled: false,
};

const activeButtonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setActive: (state) => {
      state.disabled = false;
    },
    setDisabled: (state) => {
      state.disabled = true;
    },
  },
});

export default activeButtonSlice.reducer;
export const { setActive, setDisabled } = activeButtonSlice.actions;
