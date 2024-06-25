import React from "react";
import { useDispatch } from "react-redux"; // import useDispatch to invoke reducer funcitons
import { deleteTodo, setTodo } from "./todosReducer"; // import reducer functions
/**
 * TodoItem shown below breaks out the line items that render the todo's title, 
 * and Delete and Edit buttons. The component accepts references to the todo 
 * object, as well as deleteTodo and setTodo functions.

 * @param todo : 
 * @returns 
 */



export default function TodoItem( { todo} ) {
    // todo: { title: string };
    //   deleteTodo, setTodo

  const dispatch = useDispatch(); // create dispatch instance to invoke reducer functions
  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))} // wrap reducer functions with dispatch
              id="wd-delete-todo-click"> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit </button>
      {todo.title}
    </li>
  );
}






// VERSION WITHOUT REDUCER
// export default function TodoItem({ todo, deleteTodo, setTodo }: {
//     todo: { id: string; title: string }; // todo to render
//     deleteTodo: (id: string) => void; // event handler to remove todo
//     setTodo: (todo: { id: string; title: string }) => void; // event handler to select todo
// }) {
//     return (
//       <li key={todo.id} className="list-group-item">
//         <button onClick={() => deleteTodo(todo.id)} // invoke delete todo with ID
//                 id="wd-delete-todo-click"> Delete </button> 
//         <button onClick={() => setTodo(todo)} // invoke select todo
//                 id="wd-set-todo-click"> Edit </button>
//                 {/* render todo's title */}
//         {todo.title} 
//       </li>
//     );
//   }
  
  