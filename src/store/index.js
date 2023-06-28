import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import authReducer from "./auth.slice";
import placeReducer from "./place.slice";

export const store = configureStore({
  reducer: {
    place: placeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
