import { API_URL } from '../config';

const generateFetch = (config) => {
  return async (dispatch, getState) => {
    const access = getState().auth.access;
    if (!config) {
      config = {};
    }
    let url = API_URL + config.url;
    if (config.absoluteUrl) {
      url = config.absoluteUrl
    }
    if (config.params) {
      url += '?' + new URLSearchParams(config.params).toString();
    }
    const sendRequest = async () => {
      const response = await fetch(url, {
        method: config.method || 'GET',
        headers: {
          'Content-Type': config.contentType || 'application/json',
          'Authorization': 'Bearer ' + access
        },
      });

      if (!response.ok) {
        let errors = {error: 'Request failed'}
        if (config.getErrors)
          errors = config.getErrors();
        if (errors) {
          let errorStr = '';
          for (const [key, error] of Object.entries(errors))
            errorStr += key + ': ' + error + '\n';
          throw new Error(errorStr);
        }
      }
      const data = await response.json();
      config.process(data, dispatch, getState);
    };

    try {
      await sendRequest();
    } catch (error) {
      alert(error)
    }
  };
}

export default generateFetch;
