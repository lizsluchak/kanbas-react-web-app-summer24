import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import useSelector (to read), useDispatch (to write) to edit reducer
import { addTodo, updateTodo, setTodo } from "./todosReducer"; // reducer functions
/**
 * Similarly we'll break out the form to Create and Update todos into component 
 * TodoForm shown below. Parameters todo, setTodo, addTodo, and updateTodo, 
 * to maintain dependencies between the TodoList and TodoForm component.

 * @param param0 
 * @returns 
 */
export default function TodoForm(
// we were able to remove this dependency from here, parent component
// { todo, setTodo, addTodo, updateTodo }
) {
  const { todo } = useSelector((state: any) => state.todosReducer); // retrieve todo from reducer
  const dispatch = useDispatch(); // // create dispatch instance to invoke reducer functions
  return (
    <li className="list-group-item">
      <button onClick={() => dispatch(addTodo(todo))} // wrap reducer functions w dispatch
              id="wd-add-todo-click"> Add </button>
      <button onClick={() => dispatch(updateTodo(todo))} // wrap reducer functions w dispatch
              id="wd-update-todo-click"> Update </button>
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}











// BEFORE REDUCER
// export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
//     todo: { id: string; title: string }; // todo to be added or edited
//     setTodo: (todo: { id: string; title: string }) => void; // event handler to update todo's title
//     addTodo: (todo: { id: string; title: string }) => void; // event handler to add new todo
//     updateTodo: (todo: { id: string; title: string }) => void; // event handler to update todo
//   }) {
//     return (
//       <li className="list-group-item">
//         <button onClick={() => addTodo(todo)} // invoke add new todo
//                 id="wd-add-todo-click"> Add </button>
//         <button onClick={() => updateTodo(todo)} // invoke update todo
//                 id="wd-update-todo-click"> Update </button> 
//         <input value={todo.title} // todo title
//             // update title on each key stroke
//           onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }/>
//       </li>
//     );
//   }
  