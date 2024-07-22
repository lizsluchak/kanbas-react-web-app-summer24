import axios from "axios";

const LOCAL_SERVER = process.env.REACT_APP_LOCAL_SERVER; 
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// const USERS_API = `${LOCAL_SERVER}/api/users`; WHY DOESNT THIS WORK
const USERS_API = `http://localhost:4000/api/users`;

/**
 * findAllUsers Client Function:
 * Interacts with user routes implemented in server. Sends a GET request to the
 * server and awaits the server's response. 
 * @returns Array of users in data property
 */
export const findAllUsers = async () => {
  try {
    const response = await axios.get(USERS_API);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Optional: re-throw the error if you want to handle it elsewhere
  }
};

/**
 * findUsersByRole client function: 
 * encodes role in theq query string of the url
 * @param role 
 * @returns 
 */
export const findUsersByRole = async (role: string) => {
  const response = await
    axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};

