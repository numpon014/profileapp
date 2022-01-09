import axios from 'axios';

export const httpRequest = {
  default: () =>
    axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 30000,
    }),
};