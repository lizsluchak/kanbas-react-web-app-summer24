import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

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

  const createTodo = async () => {
    const todos = await client.createTodo();
    setTodos(todos);
  };


  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      
      

      <ul className="list-group w-25">
      <h4>Todos <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3"
                         id="wd-create-todo" />  </h4>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input type="checkbox" className="form-check-input me-2"
                   defaultChecked={todo.completed}/>
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.title}
            </span>
            <FaTrash onClick={() => removeTodo(todo)}
                     className="text-danger float-end mt-1" id="wd-remove-todo"/>

          </li>
        ))}
      </ul> <hr />
    </div>
  );
}
