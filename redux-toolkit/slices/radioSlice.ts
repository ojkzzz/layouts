import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeRadio: 100,
  dateFrom: "",
  dateTo: "",
  mark: "",
  progress: 0,
};

const radioSlice = createSlice({
  name: "radio",
  initialState,
  reducers: {
    active: (state, action) => {
      state.activeRadio = action.payload;
      state.mark = "";
      // state.dateFrom = "";
      // state.dateTo = "";
    },
    getDateFrom: (state, action) => {
      state.dateFrom = action.payload;
    },
    getDateTo: (state, action) => {
      state.dateTo = action.payload;
    },
    getTextValue: (state, action) => {
      state.mark = action.payload;
    },
    getProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
});

export default radioSlice.reducer;
export const { active, getDateFrom, getDateTo, getTextValue, getProgress } =
  radioSlice.actions;
