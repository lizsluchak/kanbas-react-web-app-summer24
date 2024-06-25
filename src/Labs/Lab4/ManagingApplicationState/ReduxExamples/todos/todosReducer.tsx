import { createSlice } from "@reduxjs/toolkit"; // import createSlice

/**
 * Although the TodoList component might work as expected and it might be all 
 * we would need, it's implementation makes it difficult to share the local 
 * state data (the todos) outside its context with other components or screens. 
 * For instance, how would we go about accessing and displaying the todos, say, 
 * in the Lab3 component or Kanbas? We would have to move the todos state 
 * variable and mutator functions to a component that is parent to both the 
 * Lab3 component and the TodoList component, e.g., Labs or even App.
 * Instead, let's move the state and functions from the TodoList component to a 
 * reducer and store so that the todos can be accessed from anywhere within the 
 * Labs. Create todosReducer as shown below, moving the todos and todo state 
 * variables to the reducer's initialState. Also move the addTodo, deleteTodo, 
 * updateTodo, and setTodo functions into the reducers property, reimplementing 
 * them to use the state and action parameters of the new reducer functions.
 */
const initialState = { // declare initial state of reducer
    // moved here from TodoList.tsx
  todos: [ //todos has default todos
    { id: "1", title: "Learn React" },  
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" }, //todo has default todo
};
const todosSlice = createSlice({ // create slice
  name: "todos", // name slice
  initialState, // configure store's initial state
  reducers: { // declare reducer functions
    addTodo: (state, action) => { // addTodo reducer function, action
      const newTodos = [ // contains new todo. newTodos
          ...state.todos, // copy old todos, append new todo
        { ...action.payload, id: new Date().getTime().toString() }, // in action.payload, override; id as timestamp
      ];
      state.todos = newTodos; // update todos
      state.todo = { title: "" }; // clear todo
    },
    deleteTodo: (state, action) => { // deleteTodo reducer function,
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload); // action contains todo's ID to filter out of newTodos
      state.todos = newTodos;
    },
    updateTodo: (state, action) => { // updateTodo reducer function
      const newTodos = state.todos.map((item) => // rebuilding newTodos by replacing
        item.id === action.payload.id ? action.payload : item // old todo with new todo in action payload
      );
      state.todos = newTodos; // update todos
      state.todo = { title: "" }; // clear todo
    },
    setTodo: (state, action) => { // setTodo reducer function 
      state.todo = action.payload; // to update todo state variable

    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions; // export reducer functions
export default todosSlice.reducer; // export reducer for store