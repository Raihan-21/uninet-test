import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: "",
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setIsLoggedIn, setToken } = authSlice.actions;

export default authSlice.reducer;
