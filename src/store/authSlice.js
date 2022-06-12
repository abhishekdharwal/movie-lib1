import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: true,
  isActive: true,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuth(state, action) {
      state.isAuth = action.payload;
    },
    updateActive(state, action) {
      state.isActive = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAuth, updateActive } = authSlice.actions;

export default authSlice.reducer;
