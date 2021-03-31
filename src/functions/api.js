
import axios from 'axios';

const BASE_URL = 'http://xnor.space/';

export const login = ({ loginData }) => {
  return axios.post(BASE_URL, loginData);
}