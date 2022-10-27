import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  oper: string;
  filePool: string;
  region: string;
  time_zone: string;
  number: string;
  code: any;
}

const initialState = {
  oper: "",
  filePool: "",
  region: "",
  time_zone: "",
  number: "",
  code: [""],
};

const poolsSlice = createSlice({
  name: "pool",
  initialState,
  reducers: {
    setOper: (state, action) => {
      state.oper = action.payload;
    },
    setFile: (state, action) => {
      state.filePool = action.payload;
    },
    setPoolRegion: (state, action) => {
      state.region = action.payload;
    },
    setTimezone: (state, action) => {
      state.time_zone = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setCode: (state: IInitialState, action: any) => {
      state.code.push(action.payload);
    },
    setEllCode: (state, action) => {
      state.code[action.payload.index] = action.payload.value;
    },
    deleteEllCode: (state, action) => {
      state.code = state.code.filter((_, id) => id !== action.payload);
    },
  },
});

export default poolsSlice.reducer;
export const {
  setCode,
  setEllCode,
  deleteEllCode,
  setOper,
  setFile,
  setPoolRegion,
  setTimezone,
  setNumber,
} = poolsSlice.actions;
