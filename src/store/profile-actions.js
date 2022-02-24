import { API_URL } from '../config';

import { accountsActions } from './accounts-slice';

export const getAccountList = () => {
  return async (dispatch, getState) => {
    const access = getState().auth.access;
    const sendRequest = async () => {
      const params = {
        test: 1
      };
      const url = API_URL + 'api/accounts/?' + new URLSearchParams(params).toString()
      console.log(url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access
        },
      });

      if (!response.ok) {
        throw new Error('ACcount retrieve failed');
      }
      const data = await response.json();
      dispatch(accountsActions.updateAccounts({ accounts: data }))
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error)
    }
  }
};
