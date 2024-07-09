import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

/**
 * Retrieve Modules Client Function 
 * @param courseId 
 * @returns 
 */
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};


/**
 * Create Module Client Function 
 * It should post a new module object in the body and encode the courseId in 
 * the path. The response's data contains the newly created module from the 
 * server. We'll append the new module to the cached modules in the module 
 * reducer.
 * @param courseId 
 * @param module 
 * @returns 
 */
export const createModule = async (courseId: string, module: any) => {
  const response = await axios.post( `${COURSES_API}/${courseId}/modules`, module );
  return response.data;
};

/**
 * Update Moduel Client Function 
 * @param module 
 * @returns 
 */
export const updateModule = async (module: any) => {
  const response = await axios.
    put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};



/**
 * Delete Module Client Function 
 * @param moduleId 
 * @returns 
 */
export const deleteModule = async (moduleId: string) => {
  const response = await axios
    .delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

