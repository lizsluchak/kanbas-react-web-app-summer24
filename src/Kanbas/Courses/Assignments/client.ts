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
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER; //http://localhost:4000
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

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



/**
 * Update Assignment Client Function 
 * Updates an existing module on the server.
 * 
 * @param {any} assigment - The assignment object with updated data
 * @returns {Promise<any>} - A promise that resolves to the updated module
 */
export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${COURSES_API}/assignments/${assignment._id}`, assignment);
  return response.data;
};

/**
 * Delete Assignmnet Client Function 
 * Deletes a module from the server.
 * 
 * @param {string} assignmentId - The ID of the module to be deleted
 * @returns {Promise<any>} - A promise that resolves to the deleted module data
 */
export const deleteAssignments = async (assignmentId: string) => {
  const response = await axios.delete(`${COURSES_API}/assignments/${assignmentId}`);
  return response.data;
};

  /**
 * Create Assignment Client Function 
 * Posts a new assignment object to the server for a given course.
 * 
 * @param {string} courseId - The ID of the course
 * @param {any} module - The module object to be created
 * @returns {Promise<any>} - A promise that resolves to the newly created module
 */
  export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
  };
