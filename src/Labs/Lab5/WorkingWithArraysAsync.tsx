import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]); //init state variable
  /**
   * async function to fetch todos from server and populate todos state
   * variable which can render on load due to useEffect
   */
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };

  //using axios.get
  const createTodo = async () => {
    const todos = await client.createTodo();
    setTodos(todos);
  };

  //using axios.post
  const postTodo = async () => {
    const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false, });
    setTodos([...todos, newTodo]);
  };

/**
 * Note that the new implementation ignores the response from the server and 
 * instead filters the removed todo from the local state variable. T
 * his is fine for now, but the operation is too optimistic assuming the 
 * server successfully deleted the item from the array and updating the user 
 * interface without confirmation. Later we'll deal with errors from the server 
 * to make sure the local state variable in the user interface is in synch with 
 * the remote array on the server.

 * @param todo 
 */
  const deleteTodo = async (todo: any) => {
    await client.deleteTodo(todo);
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };


  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      
      

      <ul className="list-group w-25">
      <h4>Todos <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3"
                         id="wd-create-todo" /> 
                <FaPlusCircle onClick={postTodo}   className="text-primary float-end fs-3 me-3" id="wd-post-todo"   />
                </h4>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input type="checkbox" className="form-check-input me-2"
                   defaultChecked={todo.completed}/>
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.title}
            </span>
            <FaTrash onClick={() => removeTodo(todo)}
                     className="text-danger float-end mt-1" id="wd-remove-todo"/>
            <TiDelete onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3" id="wd-delete-todo" />


          </li>
        ))}
      </ul> <hr />
    </div>
  );
}