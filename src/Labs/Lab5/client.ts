import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

  /**
   * fetchWelcomeOnClick function is tagged as sync since it uses axios.get()
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
  export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
  };


// import axios from "axios";
// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// export const fetchWelcomeMessage = async () => {
//   const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
//   return response.data;
// };
