import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    access: '',
    refresh: ''
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
    },
    logout(state) {
      state.isAuthenticated = false
    },
  }
});

export const authActions = authSlice.actions;
export default authSlice;
