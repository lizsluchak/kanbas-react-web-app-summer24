import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterReducer";


export default function CounterRedux() {
  // The CounterRedux component below can then select the count state from the store using the useSelector hook. 
  const { count } = useSelector((state: any) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-counter-redux">
      <h5 className="lab4-section-definition">2.4.2: Hello World Redux/Reducer</h5>

      <ul>
        <li>To practice with Redux, let's reimplement the Counter component using Redux:</li>
        <ol>
          <li>First create counterReducer responsible for maintaining the counter's state</li>
          <li>Initialize the state variable count to 0 </li>
          <li> Reducer function increment and decrement can update the state variable by manipulating their state parameter that contain state variables as shown below.</li>
          <li>Add the counterReducer to the store as shown below to make the counter's state available to all components within the body of the Provider.</li>
          <li>The CounterRedux component below can then select the count state from the store using the useSelector hook.</li>
          <li>To invoke the reducer function increment and decrement use a dispatch function obtained from a useDispatch function as shown below.</li>
        </ol> 


      </ul>
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}
        id="wd-counter-redux-increment-click"> Increment </button>
      <button onClick={() => dispatch(decrement())}
        id="wd-counter-redux-decrement-click"> Decrement </button>
      <hr />
    </div>
  );
}
