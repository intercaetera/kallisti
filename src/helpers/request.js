import axios from 'axios';

const request = options => axios({
  ...options,
  url: `https://discordapp.com/api/${options.url}`,
  headers: {
    ...options.headers,
    Authorization: process.env.TOKEN,
  },
})
  .then(response => response.data)
  .catch(error => console.error(error));

export default request;
