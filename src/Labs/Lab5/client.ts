import axios from "axios";



/**
 * fetchWelcomeOnClick function is tagged as async since it uses axios.get()
 * to async send  a request to the server and return response
 * 
 * The current HttpClient.tsx implementation makes a request to the server 
 * from the component itself using the axios library. In addition to 
 * retrieving (or reading) data from the server, there will be other 
 * CRUD operations to create, update, and delete needed to interact 
 * with the server. Instead of implementing these in a React component, 
 * it's better to implement these in a reusable client library that can 
 * be shared across several user interface components. Move the axios.get() 
 * in HttpClient.tsx to a separate file called client.ts as shown below.
 */
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};


/**
 * now lets create an async version of working with objects
 */
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_API}`);
    return response.data;
};



export const updateTitle = async (title: string) => {
    const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
    console.log("help", response);
    return response.data;
};


/**
 *  Let's use axios so that we can manipulate remote arrays on the server from 
 * the user interface and update a user interface to reflect the changes in the 
 * remote array. We'll implement several client functions in client.ts that use 
 * axios to communicate with the server and we'll use them from a new component 
 * that will render the remote array in the use interface.
 */
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

//sends delete request and server responds with surviving todos
export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
  };
  
//request create new todo item 
  export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
  };
  
  //postTodo client function that posts new todo objects
  export const postTodo = async (todo: any) => {
    //note second argument is just todo object instead of whole array
    const response = await axios.post(`${TODOS_API}`, todo);
    return response.data;
  };
  




