
import { authActions } from './auth-slice';
import generateFetch  from './fetch';

export const loginRequest = (values) => {
  return generateFetch({
    url: 'api/users/token/',
    method: 'POST',
    body: values,
    getError: () => {},
    process: (data, dispatch) => {
      const access = data.access;
      const refresh = data.refresh;
      dispatch(authActions.login({ access, refresh }));
    },
  })
};

export const refreshRequest = (values) => {
  return generateFetch({
    url: 'api/users/token/refresh/',
    method: 'POST',
    body: values,
    getError: () => {},
    process: (data, dispatch) => {
      const access = data.access;
      const refresh = data.refresh;
      dispatch(authActions.login({ access, refresh }));
    },
  })
};
