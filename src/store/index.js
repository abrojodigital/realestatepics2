import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import propertyReducer from "./property/propertySlice";

export const store = configureStore({
  reducer: {
    property: propertyReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
