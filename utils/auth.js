

import Cookies from 'js-cookie';

// Generate a random token (
const generateRandomToken = () => {
  return crypto.randomUUID(); 
};

export const setToken = () => {
  const token = generateRandomToken();
  // token set for 30 seconds
  Cookies.set('token', token, { expires: 1 / 24 });
  return token; 
};

export const getToken = () => Cookies.get('token');
export const clearToken = () => Cookies.remove('token');
