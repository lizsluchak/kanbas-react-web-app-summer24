import { createSlice } from "@reduxjs/toolkit"; //import create slice to access reduxjs


const initialState = {
  courses: [],
};


const coursesSlice = createSlice({
  name: "courses", //name the slice
  initialState, // pass in initial state we created of modules from db
  reducers: { //declare reducer functions
    
    //add set courses reducer function to populate courses state variable
    setCourses: (state, action) => {
      state.courses = action.payload;
    },

    
   /**
    * 
    * @param state current state of courses
    * @param module destructures payload property from the action, renamed course
    */ 
    addCourse: (state, { payload: course }) => { //new course is in action payload

      const newCourse: any = {
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        description: course.description,
        image_url: "images/reactjs.jpg", 
      };
      // updates the modules array in state: current module state is spread
      // to new array, new module added at end
      // 'as any':  is a TypeScript type assertion, which tells the TypeScript 
      // compiler to treat the array as of type any
      state.courses = [...state.courses, newCourse] as any;
    },

    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (c: any) => c._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },
    editCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === courseId ? { ...c, editing: true } : c
      ) as any;
    },
  },
});
export const { addCourse, deleteCourse, updateCourse, editCourse, setCourses} =
  coursesSlice.actions; // export all reducer functions
export default coursesSlice.reducer; //export reducer
