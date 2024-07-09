// imports -------------------------------------------------------------------//
import axios from "axios";


// routes- -------------------------------------------------------------------//
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

/**
 * IMPLEMENTS ALL COURSE RELATED COMMUNICATION BETWEEN USER INTERFACE & SERVER
 */


/**
 * 
 * @returns 
 */
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};
