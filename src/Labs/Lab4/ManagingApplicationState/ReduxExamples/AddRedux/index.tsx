import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();
  return (
    <div>
    <div>
      <h5 className="lab4-section-definition">2.4.4: Passing Data to Reducers</h5>

      <ul>
        <li>Now let's explore how the user interface can pass data to reducer functions.</li>
        <li>Create a reducer that can keep track of the arithmetic addition of two parameters.</li>
        <li>When we call add reducer function below, the parameters are encoded as an object into a payload property found in the action parameter passed to the reducer function.</li>
        <li>Functions can extract parameters a and b as action.payload.a and action.payload.b and then use the parameters to update the sum state variable.</li>


      </ul>
      </div>

      <div className="w-25" id="wd-add-redux">
        <h1>Add Redux</h1>
        <h2>{a} + {b} = {sum}</h2>
        <input type="number" value={a}
          onChange={(e) => setA(parseInt(e.target.value))}
          className="form-control" />
        <input type="number" value={b}
          onChange={(e) => setB(parseInt(e.target.value))}
          className="form-control" />
        <button className="btn btn-primary" id="wd-add-redux-click"
          onClick={() => dispatch(add({ a, b }))}>
          Add Redux </button>
        <hr />
      </div>
      </div>
      );
}
