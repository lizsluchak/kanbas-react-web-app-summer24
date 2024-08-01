/******************************************************************************
 *                            Module: ModuleService                           *
 * -------------------------------------------------------------------------- *
 * Description:                                                               *
 * This module provides client-side functions to interact with the server     *
 * API for creating, reading, updating, and deleting course modules.          *
 *                                                                            *
 * Dependencies:                                                              *
 * - axios: For making HTTP requests                                          *
 * - process.env.REACT_APP_REMOTE_SERVER: Remote server URL                   *
 * -------------------------------------------------------------------------- *
 ******************************************************************************/

/* ============================ */
/*         1. Imports           */
/* ============================ */
import axios from "axios";

/* ============================ */
/*         2. Constants         */
/* ============================ */
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const MODULES_API = `http://localhost:4000/api/modules`;

/* ============================ */
/*    3. Function Definitions   */
/* ============================ */

/**
 * Retrieve Modules Client Function 
 * Fetches all modules for a given course from the server.
 * 
 * @param {string} courseId - The ID of the course
 * @returns {Promise<any>} - A promise that resolves to the list of modules
 */
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${MODULES_API}/${courseId}`);
  return response.data;
};

/**
 * Create Module Client Function 
 * Posts a new module object to the server for a given course.
 * 
 * @param {string} courseId - The ID of the course
 * @param {any} module - The module object to be created
 * @returns {Promise<any>} - A promise that resolves to the newly created module
 */
export const createModule = async (courseId: string, module: any) => {
  const response = await axios.post(`${MODULES_API}/${courseId}`, module);
  return response.data;
};

/**
 * Update Module Client Function 
 * Updates an existing module on the server.
 * 
 * @param {any} module - The module object with updated data
 * @returns {Promise<any>} - A promise that resolves to the updated module
 */
export const updateModule = async (module: any) => {
  console.log("update moduel called", module); 
  const response = await axios.put(`${MODULES_API}/${module._id}`, module);
  console.log("response is", response);
  return response.data;
};

/**
 * Delete Module Client Function 
 * Deletes a module from the server.
 * 
 * @param {string} moduleId - The ID of the module to be deleted
 * @returns {Promise<any>} - A promise that resolves to the deleted module data
 */
export const deleteModuleClientRoute = async (moduleId: string) => {
  try {
    const response = await axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting module:', error);
    throw error;
  }
};


