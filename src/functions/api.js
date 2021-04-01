
import axios from 'axios';
import axiosWithAuth from 'functions/axiosWithAuth';

export const BASE_URL = 'https://xnor.space/api';



// Logs in with loginData. props: username, password
export const login = ( loginData ) => {
  return axios.post(`${BASE_URL}/authenticate`, loginData);
}

// Takes userData and creates a new user. props: login, password, accounttype (student/instructor)
export const signUp = ( userData ) => {
  return axios.post('/api/register', userData);
}

// Returns info of the currently logged in user.
export const getSelf = () => {
  return axiosWithAuth().get('/api/account');
}

export const createClass = (classData) => {
  return axiosWithAuth().post('/api/courses', classData);
}

export const getClasses = () => {
  return axiosWithAuth().get('/api/courses');
}

export const getMyClasses = () => {
  return axiosWithAuth().get('/api/account/courses');
}

export const searchClasses = ( queryData ) => {
  return axiosWithAuth().get('/api/courses/search', queryData);
}
