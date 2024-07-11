/******************************************************************************
 *                            Module: AssignmentService                       *
 * -------------------------------------------------------------------------- *
 * Description:                                                               *
 * This module provides client-side functions to interact with the server     *
 * API for creating, reading, updating, and deleting course assignments.      *
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
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/assignments`;

/* ============================ */
/*    3. Function Definitions   */
/* ============================ */

/**
 * Retrieve Assignments Client Function 
 * Fetches all assignments for a given course from the server.
 * 
 * @param {string} courseId - The ID of the course
 * @returns {Promise<any>} - A promise that resolves to the list of assignments
 */
export const findAssignmentsForCourse = async (courseId: string) => {
  try {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
  } catch (error) {
    console.error(`Error fetching modules for course ${courseId}:`, error);
    throw error;
  }
};

// /**
//  * Create Module Client Function 
//  * Posts a new module object to the server for a given course.
//  * 
//  * @param {string} courseId - The ID of the course
//  * @param {any} module - The module object to be created
//  * @returns {Promise<any>} - A promise that resolves to the newly created module
//  */
// export const createModule = async (courseId: string, module: any) => {
//   const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
//   return response.data;
// };

// /**
//  * Update Module Client Function 
//  * Updates an existing module on the server.
//  * 
//  * @param {any} module - The module object with updated data
//  * @returns {Promise<any>} - A promise that resolves to the updated module
//  */
// export const updateModule = async (module: any) => {
//   const response = await axios.put(`${MODULES_API}/${module._id}`, module);
//   return response.data;
// };

/**
 * Delete Module Client Function 
 * Deletes a module from the server.
 * 
 * @param {string} assignmentId - The ID of the module to be deleted
 * @returns {Promise<any>} - A promise that resolves to the deleted module data
 */
export const deleteAssignments = async (assignmentId: string) => {
  const response = await axios.delete(`${COURSES_API}/assignments/${assignmentId}`);
  return response.data;
};
