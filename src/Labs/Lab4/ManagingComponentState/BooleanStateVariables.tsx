import "../styles.css"
import React, { useState } from "react"; // import useState

export default function BooleanStateVariables() {



    const [done, setDone] = useState(true); // declare and initialize boolean state variable
    return (

        <div id="wd-boolean-state-variables">

            <h5 className="lab4-section-definition">2.3.3: Boolean State Variables</h5>

            <ul>

                <li>The useState hook works with all JavaScript data types and structures including booleans, integers, strings, numbers, arrays, and objects.</li>
                <li>The exercise below illustrates using the useState hook with boolean state variables: the variable is used to hide or show a DIV as well as render a checkbox as checked or not. </li>
                <li>Also note the use of onChange in the checkbox to set the value of state variable.</li>

            
            <br />

            <div id="wd-boolean-state-variables">
                {/** render content based on value of boolean state variable */}
                <p>{done ? "Done" : "Not done"}</p>
                
                <label className="form-control">
                    {/** change state variable value when handling events like clicking a checkbox */}
                    <input type="checkbox" checked={done}
                        onChange={() => setDone(!done)} /> Done
                </label>
                    {/** Render content based on value */}
                    {done && <div className="alert alert-success">
                    Yay! you are done</div>}
            </div>
            </ul>




            <hr />
        </div>


    );
}