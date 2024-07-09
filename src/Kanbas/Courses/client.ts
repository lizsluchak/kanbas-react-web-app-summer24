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

/**
 * Create Course Client Function:
 * Posts a new course to the server and returns the response's data. 
 * @param course 
 * @returns new course
 */
export const createCourse = async (course: any) => {
  const response = await axios.post(COURSES_API, course);
  return response.data;
};

/**
 * Delete Course Client Function:
 * @param id 
 * @returns 
 */
export const deleteCourse = async (id: string) => {
  const response = await axios.delete(`${COURSES_API}/${id}`);
  return response.data;
};


export const updateCourse = async (course: any) => {
  const response = await axios.put(`${COURSES_API}/${course.id}`, course);
  return response.data;
};


