import { createSlice } from "@reduxjs/toolkit"; //import create slice to access reduxjs
import { assignments } from "../../Database";

const initialState = {
    // set assignment reducer's intial state to assignments loaded in from database
  assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments", //name the slice
  initialState, // pass in initial state we created of assignments from db
  reducers: { //declare reducer functions
    

    addAssignment: (state, { payload: assignment }) => { //new module is in action payload

        /**
         * New Assignment Object: 
         * Object that represents the new assignment to be added
         * @param _id: unqiue identifier for new assignment, generated using timestamp
         * @param title: empty string to hold name of new assignemnt 
         * @param course: course to which assignment belongs, taken from action payload
         * @param description: short description of new assignment
         * @param points: number of points assignment is worth 
         * @param dueDate: date assignment must be submitted
         * @param availableDate: date assignment must be submitted
         * @param availableTime: date assignment is opened
         * @param dueTime: time assignment must be sumbitted on dueDate
         */
    //   const newAssignment: any = {
    //     _id: new Date().getTime().toString(),
    //     title: "New Assignment Title",
    //     course: assignment.course,
    //     description: "New Assignment Description", 
    //     points: "New Assignment Point Value", 
    //     dueDate: "2022-12-31", 
    //     availableDate: "2022-12-31",
    //     availableTime: "12:01am",
    //     dueTime: "12:01am", 
    //   };
      // updates the assignments array in state: current module state is spread
      // to new array, new module added at end
      // 'as any':  is a TypeScript type assertion, which tells the TypeScript 
      // compiler to treat the array as of type any
      state.assignments = [...state.assignments, {...assignment, _id: Date.now().toString()}] as any;
    },

    deleteAssignment: (state, { payload: assigmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assigmentId);
    },

    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions; // export all reducer functions
export default assignmentsSlice.reducer; //export reducer