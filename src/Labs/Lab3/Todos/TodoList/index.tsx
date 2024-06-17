import TodoItem from "../TodoItem";
import todos from "./todos.json"
/**
 * 
 * FIX
 */
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ul className="list-group">
       { todos.map((todos) => {
           return(<TodoItem todo={todos}/>);
         })}
     </ul><hr/> 
   </>
 );
}
export default TodoList;