import { createSlice } from "@reduxjs/toolkit"; //import create slice to access reduxjs


const initialState = {
    //dont need to set default state since we are handling that via useEffect
  users: [],
  
};


/**
 * Create Module Slice:
 * calles Redux createSlice function and passes in necessary params to
 * create module. 
 */
const peopleSlice = createSlice({
  name: "users", //name the slice
  initialState, // pass in initial state we created of modules from db
  reducers: { //declare reducer functions
    
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
export const { setUsers } =
  peopleSlice.actions; // export all reducer functions
export default peopleSlice.reducer; //export reducer
