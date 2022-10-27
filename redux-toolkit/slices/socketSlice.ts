import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  socket: any;
}
const initialState: IInitialState = {
  socket: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    socketInit: (state: IInitialState, action: PayloadAction<any>) => {
      const socket = action.payload;
      state.socket = socket;
    },
  },
});

export default socketSlice.reducer;
export const { socketInit } = socketSlice.actions;
