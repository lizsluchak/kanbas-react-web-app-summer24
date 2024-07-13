import { createSlice } from "@reduxjs/toolkit"; //import create slice to access reduxjs


const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments", //name the slice
  initialState, // pass in initial state we created of assignments from db
  reducers: { //declare reducer functions

    setAssignments: (state, action ) => {
      state.assignments = action.payload;
    },
    

    addAssignment: (state, { payload: assignment }) => { //new assignment is in action payload

      // updates the assignments array in state: current assignment state is spread
      // to new array, new assignment added at end
      // 'as any':  is a TypeScript type assertion, which tells the TypeScript 
      // compiler to treat the array as of type any
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        description: assignment.descrption, 
        points: assignment.points, 
        dueDate: assignment.dueDate, 
        availableDate: assignment.availableDate,
        availableTime: assignment.availableTime,
        dueTime: assignment.dueTime, 
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== action.payload);
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
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } =
  assignmentsSlice.actions; // export all reducer functions
export default assignmentsSlice.reducer; //export reducer