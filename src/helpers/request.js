import axios from 'axios';

const request = options => axios({
  ...options,
  headers: {
    ...options.headers,
    Authorization: process.env.TOKEN,
  },
})
  .then(response => response.data)
  .catch(error => console.error(error));

export default request;
