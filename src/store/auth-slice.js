import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh')
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true
      const new_access = action.payload.access
      const new_refresh = action.payload.refresh
      if (new_access) {
        state.access = new_access;
        localStorage.setItem('access', new_access);
      }

      if (new_refresh) {
        state.access = new_refresh;
        localStorage.setItem('refresh', new_refresh);
      }
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
