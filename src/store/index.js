import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import mainReducer from "./reducer";

export const store = configureStore({
  reducer: {
    mainReducer: mainReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
