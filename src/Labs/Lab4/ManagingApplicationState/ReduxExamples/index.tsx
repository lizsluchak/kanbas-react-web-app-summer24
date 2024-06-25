

import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
  return (
    <div id="wd-array-state-variables">
  
      <br />
      <div>
        <h2>Redux Examples:</h2>
        <br />
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <TodoList />
      </div>
      </div>
      );
};
