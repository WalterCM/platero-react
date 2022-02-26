
import { accountsActions } from './accounts-slice';
import generateFetch  from './fetch';

export const getAccountList = (filters) => {
  return generateFetch({
    url: 'api/accounts/',
    params: filters,
    getError: () => {},
    process: (data, dispatch) => {
      dispatch(accountsActions.updateAccounts({ accounts: data }))
    },
  })
};
