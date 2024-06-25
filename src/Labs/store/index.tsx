import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ManagingApplicationState/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ManagingApplicationState/ReduxExamples/CounterRedux/CounterReducer";
import addReducer from "../Lab4/ManagingApplicationState/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../Lab4/ManagingApplicationState/ReduxExamples/todos/todosReducer";


// Application state can maintain data from various components or screens across an entire application. 
// Each would have a separate reducer that can be combined into a single store where reducers come 
//    together to create a complex, application wide state. 
// The store.tsx below demonstrates adding the helloReducer to the store. 
// Later exercises and the Kanbas section will add additional reducers to the store.
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer, // makse the counter's state available to all components within the body of the Provider.
    addReducer,
    todosReducer,
    
  },
});
export default store;