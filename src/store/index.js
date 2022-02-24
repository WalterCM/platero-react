import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../store/auth-slice';
import accountsSlice from './accounts-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    accounts: accountsSlice.reducer
  }
});

export default store;
