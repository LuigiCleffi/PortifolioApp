import axios from 'axios';

export const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    withCredentials: true,
    'Content-Type': 'application/json'
  },

});