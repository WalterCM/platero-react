import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!(localStorage.getItem('access')),
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh')
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      localStorage.setItem('access', action.payload.access);
      localStorage.setItem('refresh', action.payload.refresh);
    },
    logout(state) {
      state.isAuthenticated = false

      state.access = null;
      state.refresh = null;
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    },
  }
});

export const authActions = authSlice.actions;
export default authSlice;
