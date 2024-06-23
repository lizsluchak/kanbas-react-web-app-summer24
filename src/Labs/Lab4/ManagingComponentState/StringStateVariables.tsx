import "../styles.css"
import React, { useState } from "react"; // import useState

export default function StringStateVariables() {



    const [firstName, setFirstName] = useState("John"); // declare and initialize state variable
    return (

        <div id="wd-boolean-state-variables">

            <h5 className="lab4-section-definition">2.3.4: String State Variables</h5>

            <ul>
                <li>The StringStateVariables exercise below illustrates using useState with string state variables.</li>
                <li>The input field's value is initialized to the firstName state variable.</li>
                <li>The onChange attribute invokes the setFirstName mutator function to update the state variable.</li>
                <li>The e.target.value contains the value of the input field and is used to update the current value of the state variable.</li>


            </ul>
            <br />

            <div>
                {/** render string state variable */}
                <p>{firstName}</p>
                <input
                    className="form-control"
                    // init a text input field with the state variable
                    value={firstName}
                    //// update the state variable at each key stroke
                    onChange={(e) => setFirstName(e.target.value)} />
                <hr />
            </div>





            <hr />
        </div>


    );
}