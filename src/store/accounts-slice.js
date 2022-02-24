import { createSlice } from '@reduxjs/toolkit';

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    list: [],
    size: 0
  },
  reducers: {
    updateAccounts(state, action) {
      console.log(action.payload.accounts)
      state.list = action.payload.accounts
    }
  }
});

export const accountsActions = accountsSlice.actions;
export default accountsSlice;
