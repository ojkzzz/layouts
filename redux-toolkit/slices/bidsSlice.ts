import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  prod: any;
  status: any;
  pbStatus: any;
  textNumbers: string;
}
const initialState: IInitialState = {
  prod: 0,
  status: 0,
  pbStatus: 0,
  textNumbers: "",
};

const getDataSlice = createSlice({
  name: "bids",
  initialState,
  reducers: {
    getProd: (state: IInitialState, action: PayloadAction<any>) => {
      state.prod = action.payload;
    },
    getStatus: (state: IInitialState, action: PayloadAction<any>) => {
      state.status = action.payload;
    },
    getPbStatus: (state, action) => {
      state.pbStatus = action.payload;
    },
    getText: (state, action) => {
      state.textNumbers = action.payload;
    },
  },
});

export default getDataSlice.reducer;
export const { getPbStatus, getProd, getStatus, getText } =
  getDataSlice.actions;
