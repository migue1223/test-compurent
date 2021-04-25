const baseURL = 'http://localhost:8080/api';

const musicApi = async (endpoint, method = 'GET', data = '') => {
  let getData;
  const token = JSON.parse(localStorage.getItem('token')) || '';

  if (method === 'GET') {
    getData = await fetch(`${baseURL}/${endpoint}`, {
      method: method,
      headers: {
        'x-token': token,
        'Content-Type': 'application/json',
      },
    });

    return await getData.json();
  }

  if (method === 'POST') {
    getData = await fetch(`${baseURL}/${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await getData.json();
  }
};

export default musicApi;
