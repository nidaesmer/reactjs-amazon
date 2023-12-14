import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getLocale: (state) => {
      const email = localStorage.getItem("email");
      if (email) {
        state.email = email;
        state.isLoggedIn = true;
      }
    },

    login: (state, action) => {
      const email = action.payload.email;
      state.email = email;
      state.isLoggedIn = true;

      localStorage.setItem("email", email);
    },

    logout: (state) => {
      state.email = null;
      state.isLoggedIn = false;

      localStorage.removeItem("email");
    },
  },
});

export const { login, logout, getLocale } = authSlice.actions;
export default authSlice.reducer;
