import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  FIREBASE_AUTH_SIGN_IN_URL,
  FIREBASE_AUTH_SIGN_UP_URL,
} from "../constants/firebase";

const initialState = {
  token: null,
  userId: null,
  isLoading: false,
  error: null,
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }) => {
    try {
      const response = await fetch(FIREBASE_AUTH_SIGN_UP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      return {
        token: data.idToken,
        userId: data.localId,
      };
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }) => {
    try {
      const response = await fetch(FIREBASE_AUTH_SIGN_IN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      return {
        token: data.idToken,
        userId: data.localId,
      };
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
