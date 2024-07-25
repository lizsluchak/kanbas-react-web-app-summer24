// imports -------------------------------------------------------------------//
import axios from "axios";


// routes- -------------------------------------------------------------------//
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER
console.log(REMOTE_SERVER);
const COURSES_API = `${REMOTE_SERVER}/api/courses`
console.log(COURSES_API);



// const COURSES_API = `http://localhost:4000/api/courses`;
/**
 * IMPLEMENTS ALL COURSE RELATED COMMUNICATION BE TWEEN USER INTERFACE & SERVER
 */


/**
 * 
 * @returns 
 */
export const findAllCourses = async () => {
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
  const response = await axios.post(`${COURSES_API}`, course);
  return response.data;
};

/**
 * Delete Course Client Function:
 * @param id 
 * @returns 
 */
export const deleteCourse = async (course: any) => { 
  const response = await axios.delete(`${COURSES_API}/${course._id}`);
  return response.data;
};


export const updateCourse = async (course: any) => {
  const response = await axios.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};


export const findCourseById = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}`);
  return response.data;
};