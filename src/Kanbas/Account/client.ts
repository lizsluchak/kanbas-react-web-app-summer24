import axios from "axios";

/**
 * By default axios does not support cookies. To configure axios to include 
 * cookies in requests, use the axios.create() to create an instance of the 
 * library that includes cookies for credentials as shown below. Then replace 
 * all occurrences of the axios library with this new version 
 * axiosWithCredentials.
 */
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = `https://kanbas-server-a5part2.onrender.com`;
console.log("RUNNING ON!!!!!", REMOTE_SERVER); 
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
  try {
    console.log('Sending signin request with credentials:', credentials);
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  console.log('Signin request headers:', response.config.headers);
  console.log('Signin response status:', response.status);
  console.log('Signin response headers:', response.headers);
  console.log('Signin response data:', response.data);
  return response.data;
} catch (error: any) {
  if (error.response) {
    console.error('Signin error status:', error.response.status);
    console.error('Signin error headers:', error.response.headers);
    console.error('Signin error data:', error.response.data);
  } else {
    console.error('Signin error:', error.message);
  }
  throw error;
}
};
export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};



