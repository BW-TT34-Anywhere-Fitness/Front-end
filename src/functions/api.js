
import axios from 'axios';
import axiosWithAuth from 'functions/axiosWithAuth';

const BASE_URL = 'https://xnor.space';



// Logs in with loginData. props: username, password
export const login = ( loginData ) => {
  return axios.post(BASE_URL + '/api/authenticate', loginData);
}

// Takes userData and creates a new user. props: login, password, accounttype (student/instructor)
export const signUp = ( userData ) => {
  return axios.post(BASE_URL + '/api/register', userData);
}

// Returns info of the currently logged in user.
export const getSelf = () => {
  return axiosWithAuth().get(BASE_URL + '/api/account');
}

export const createClass = (classData) => {
  return axiosWithAuth().post(BASE_URL + '/api/courses', classData);
}

export const getClasses = () => {
  return axiosWithAuth().get(BASE_URL + '/api/courses');
}

export const getMyClasses = () => {
  return axiosWithAuth().get(BASE_URL + '/api/account/courses');
}

export const searchClasses = ( queryData ) => {
  return axiosWithAuth().get(BASE_URL + '/api/courses/search', queryData);
}
