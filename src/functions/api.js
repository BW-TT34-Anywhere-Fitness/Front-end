
import axios from 'axios';
import axiosWithAuth from 'functions/axiosWithAuth';

const BASE_URL = 'http://xnor.space';



export const login = ({ username, password }) => {
  return axios.post(BASE_URL + '/api/authenticate', { username, password });
}

export const createClass = (classData) => {
  return axiosWithAuth().post(BASE_URL + '/api/courses', classData);
}