import axios from 'axios';

export const api = () => {
  return axios.create();
};
