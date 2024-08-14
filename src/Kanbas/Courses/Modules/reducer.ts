import { createSlice } from "@reduxjs/toolkit"; //import create slice to access reduxjs


/**
 * The Modules component seems to be working fine. We can create new modules, 
 * edit modules, and remove modules, BUT, it suffers a major flaw. Those new 
 * modules and edits can't be used outside the confines of the Modules component 
 * even though we would want to display the same list of modules elsewhere such 
 * as the Home screen. We could use the same approach as we did for the 
 * Dashboard, by moving the state variables and functions to a higher level 
 * component that could share the state with other components. Instead we're 
 * going to use Redux this time to practice application level state management. 
 * To start, create the reducer.tsx shown below containing the modules state 
 * variables as well as the addModule, deleteModule, updateModule, and 
 * editModule functions reimplemented in the reducers property.
 * 
 * 1. add redux
 * 2. create slice
 * 3. add reducer functions
 * 4. create store and add reducer or update approriate store 
 * 5. "provide store" to whole kanbas application by wrapping it
 * 6. remove previous state variables since using redux now and replace with selectors, 
 *      dispatchers, and reducer functions
 * 7. get dispatch to call reducers fucntions and then wrap each reducer function in a dispatch
 * 2. 
 */
const initialState = {
    //dont need to set default state since we are handling that via useEffect
  modules: [],
  
};


/**
 * Create Module Slice:
 * calles Redux createSlice function and passes in necessary params to
 * create module. 
 */
const modulesSlice = createSlice({
  name: "modules", //name the slice
  initialState, // pass in initial state we created of modules from db
  reducers: { //declare reducer functions
    
    //add set modules reducer function to populate modules state variable
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    
   /**
    * 
    * @param state current state of modules
    * @param module destructures payload property from the action, renamed module 
    */ 
    addModule: (state, { payload: module }) => { //new module is in action payload

        /**
         * New Module Object: 
         * Object that represents the new module to be added
         * @param _id: unqiue identifier for new module, generated using timestamp
         * @param lessons: empty array to hold lessons for the module
         * @param name: name of the module, name from the action payload
         * @param course: course to which module belongs, taken from action payload
         */
      const newModule: any = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      // updates the modules array in state: current module state is spread
      // to new array, new module added at end
      // 'as any':  is a TypeScript type assertion, which tells the TypeScript 
      // compiler to treat the array as of type any
      state.modules = [...state.modules, newModule] as any;
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (m: any) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addModule, deleteModule, updateModule, editModule, setModules } =
  modulesSlice.actions; // export all reducer functions
export default modulesSlice.reducer; //export reducer
