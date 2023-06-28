import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import authReducer from "./auth.slice";
import placeReducer from "./property.slice";

export const store = configureStore({
  reducer: {
    property: placeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
