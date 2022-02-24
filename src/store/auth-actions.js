import { API_URL } from '../config';

import { authActions } from './auth-slice';

export const loginRequest = (values) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(API_URL + 'api/users/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      const access = data.access;
      const refresh = data.refresh;
      dispatch(authActions.login({ access, refresh }));
    };

    try {
      await sendRequest();
    } catch (error) {

    }
  }
};
