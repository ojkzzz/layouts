import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  data: any;
  regions: any;
  logs: any;
  link: any;
}
const initialState: IInitialState = {
  data: null,
  regions: null,
  logs: null,
  link: "",
};

const getDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state: IInitialState, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    getRegions: (state: IInitialState, action: PayloadAction<any>) => {
      state.regions = action.payload;
    },
    getLogs: (state, action) => {
      state.logs = action.payload;
    },
    getLink: (state, action) => {
      state.link = action.payload;
    },
  },
  // extraReducers: {
  //   ["radio/active"]: (state) => {
  //     state.link = "";
  //   },
  // },
});

export default getDataSlice.reducer;
export const { getData, getRegions, getLogs, getLink } = getDataSlice.actions;
