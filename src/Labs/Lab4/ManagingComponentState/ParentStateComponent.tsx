import "../styles.css"
import React, { useState } from "react"; // import useState
import ChildStateComponent from "./ChildStateComponent"; //import child component

export default function ParentStateComponent() {
    const [counter, setCounter] = useState(123); // initialize counter & set counter as use state variables

    return (

        <div>
            <div id="wd-parent-state-component">
                <h5 className="lab4-section-definition">2.3.8: Sharing State Between Components</h5>
                <ul>
                    <li>State can be shared between components by passing references to state variables and/or functions that update them. The example below demonstrates a ParentStateComponent sharing counter state variable and setCounter mutator function with ChildStateComponent by passing it references to counter and setCounter as attributes.</li>
               
                <br />
                <div>
                
                    <h2>Parent State Counter {counter}</h2>
                    {/** counter & set counter use-state variable references shared w ChildStateComponent by passing as params */}
                    <ChildStateComponent
                        counter={counter} //counter = state variable; setcounter = mutator function
                        setCounter={setCounter} /> 
                  
                </div>
                </ul>


                <br />
                <br />
                <hr />
            </div>
        </div>


    );
}
