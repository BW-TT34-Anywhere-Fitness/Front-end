
import axios from 'axios';
import axiosWithAuth from 'functions/axiosWithAuth';

export const BASE_URL = 'https://xnor.space/api';



// Logs in with loginData. props: username, password
export const login = ( loginData ) => {
  return axios.post(`${BASE_URL}/authenticate`, loginData);
}

// Takes userData and creates a new user. props: login, password, accounttype (student/instructor)
export const signUp = ( userData ) => {
  return axios.post(`${BASE_URL}/register`, userData);
}

// Returns info of the currently logged in user.
export const getSelf = () => {
  return axiosWithAuth().get('/account');
}

export const editUser = (userData) => {
  return axiosWithAuth().post(`/account`, userData);
}

export const createClass = (classData) => {
  return axiosWithAuth().post('/courses', classData);
}

export const editClass = (classData) => {
  return axiosWithAuth().put(`/courses/${classData?.id}`, classData);
}

export const deleteClass = (classData) => {
  return axiosWithAuth().delete(`/courses/${classData?.id}`);
}

export const getClasses = () => {
  return axiosWithAuth().get('/courses');
}

export const getMyClasses = () => {
  return axiosWithAuth().get('/account/courses');
}

export const searchClasses = ( queryData ) => {
  return axiosWithAuth().get('/courses/search', queryData);
}
