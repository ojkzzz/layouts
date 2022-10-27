import { configureStore } from "@reduxjs/toolkit";
import radioSlice from "../slices/radioSlice";
import socketSlice from "../slices/socketSlice";
import getDataSlice from "../slices/dataSlice";
import bidsSlice from "../slices/bidsSlice";
import filtrationSlice from "../slices/filtrationSlice";
import poolsSlice from "../slices/poolsSlice";
import parsingSlice from "../slices/parsingSlice";
import downloadingLineSlice from "../slices/downloadingLineSlice";
import activeButtonSlice from "../slices/activeButtonSlice";
import filesSlice from "../slices/filesSlice";

const store = configureStore({
  reducer: {
    radioSlice,
    socketSlice,
    getDataSlice,
    bidsSlice,
    filtrationSlice,
    poolsSlice,
    parsingSlice,
    downloadingLineSlice,
    activeButtonSlice,
    filesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
