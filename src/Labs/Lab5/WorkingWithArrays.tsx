import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER; //http://localhost:4000

/**
 * Hyperlink to test retrieving server array
 * @returns 
 */
export default function WorkingWithArrays() {
    const API = `${REMOTE_SERVER}/lab5/todos`;
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const handleCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, completed: e.target.checked });
    };
    return (
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos </a><hr />

            <h4>Retrieving an Item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <input id="wd-todo-id" value={todo.id} className="form-control w-50"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <hr />

            <h3>Filtering Array Items</h3>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
                href={`${API}?completed=true`}>
                Get Completed Todos
            </a><hr />

            <h3>Creating new Items in an Array</h3>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
                href={`${API}/create`}>
                Create Todo
            </a><hr />

            {/** test route to delete item from array*/}
            <h3>Deleting from an Array</h3>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary float-end" href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id} </a>
            <input value={todo.id} className="form-control w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })} /><hr />

            {/** test server route to edit title property */}
            <h3>Updating an Item Title in an Array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
                Update Todo Title</a>
            <input value={todo.id} className="form-control w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <input value={todo.title} className="form-control w-50 float-start"
                onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
            <br /><br /><hr />

            <h3>Updating an Item Completion Status in an Array</h3>
            <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary float-end">
                Update Todo Completion</a>
            <input value={todo.id}
                className="form-control w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />


            <input type="checkbox" checked={todo.completed} id="wd-array-completed"
                onChange={handleCompletedChange} />
            <label className="form-check-label ms-2" htmlFor="wd-array-completed">
                Assignment Completed
            </label>

            <br /><br /><hr />



            {/**update array property - description  */}
            <h3>Updating an Item Description in an Array</h3>
            <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary float-end">
                Update Todo Description</a>
            <input value={todo.id} className="form-control w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <input value={todo.description} className="form-control w-50 float-start"
                onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
            <br /><br /><hr />

            
            <hr />






        </div>
    );
}
