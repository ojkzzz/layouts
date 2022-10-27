import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parsingRegion: "1",
  from: 0,
  count: 1000,
  comment: "",
};

const parsingSlice = createSlice({
  name: "parsing",
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.parsingRegion = action.payload;
    },
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export default parsingSlice.reducer;
export const { setFrom, setCount, setRegion, setComment } =
  parsingSlice.actions;
