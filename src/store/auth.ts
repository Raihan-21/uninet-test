import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      isLoggedIn: false,
    },
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.value.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = authSlice.actions;

export default authSlice.reducer;
