
import axios from 'axios';

import {BASE_URL} from './api'

const axiosWithAuth = () => {

  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${token}` }
  });
};

export default axiosWithAuth;
