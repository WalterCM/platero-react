
import { accountsActions } from './accounts-slice';
import generateFetch  from './fetch';

export const getAccountList = (filters) => {
  console.log('filters: ', filters)
  return generateFetch({
    url: 'api/accounts/',
    params: { test: 1 },
    getError: () => {},
    process: (data, dispatch) => {
      dispatch(accountsActions.updateAccounts({ accounts: data }))
    },
  })
};
