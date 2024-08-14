import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    // updateCourseEnrollment: (state, { payload: courseId }) => {
    //   if (state.currentUser == null) {
    //     return; 
    //   } else {
    //      state.currentUser = state.currentUser.enrolledCourses.push(courseId); 
      

    //   }
     
    // },


  },

  
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
