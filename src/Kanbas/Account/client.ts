import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;


/**
 * CLIENT SIGNIN ROUTE
 * Posts a credentials object containing the username and password expected 
 * by the server
 * @param credentials 
 * @returns 
 */
export const signin = async (credentials: any) => {
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
