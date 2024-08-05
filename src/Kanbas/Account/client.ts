import axios from "axios";

/**
 * By default axios does not support cookies. To configure axios to include 
 * cookies in requests, use the axios.create() to create an instance of the 
 * library that includes cookies for credentials as shown below. Then replace 
 * all occurrences of the axios library with this new version 
 * axiosWithCredentials.
 */
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
console.log("RUNNING ON!!!!!", REMOTE_SERVER); 
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data;
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



