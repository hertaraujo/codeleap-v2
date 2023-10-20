import axios from 'axios';

const url = process.env.NODE_ENV;

export const api = axios.create({ baseURL: url });
