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
    if (config.params && Object.entries(config.params).length > 0) {
      url += '?' + new URLSearchParams(config.params).toString();
    }
    let headers = {
      'Content-Type': config.contentType || 'application/json'
    }

    if (!config.anonymous) {
      headers['Authorization'] = 'Bearer ' + access
    }

    const sendRequest = async () => {
      const response = await fetch(url, {
        method: config.method || 'GET',
        headers,
        body: JSON.stringify(config.body),
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
