import "../styles.css"
import React, { useState } from "react";

export default function Counter() {

    let count = 7; // create and initialize a reg variable
    const [count2, setCount] = useState(7); //create and initialize state variable
    console.log(count); // print changes of the variable to the console
    console.log(count2); // print changes of the variable to the console


    return (

        <div id="counter">

            <h5 className="lab4-section-definition">2.3.2: Integer State Variables</h5>

            <ul>

                <li>To illustrate the point of the virtual DOM and how changes in state affect changes in the actual DOM, let's implement the simple Counter component as shown below.</li>
                <li> A count variable is initialized and then rendered successfully on the screen. Buttons Up and Down successfully update the count variable as evidenced in the console, but the changes fail to update the DOM as desired.</li>
                <li> This happens because as far as React.js is concerned, there has been no changes to the virtual DOM, and therefore no need to update the actual DOM.</li>

                <li>For the DOM to be updated as expected, we need to tell React.js that changes to a particular variable is indeed relevant to changes in the DOM.</li>
                <li>To do this, use the useState hook to declare the state variable, and update it using the mutator function as shown below. Now changes to the state variable are represented as changes in the DOM.</li>



            </ul>
            <br />

            {/** Version 1: Virtual / Real DOM not affected */}
            <div id="wd-counter-use-state">
                <h2>Counter1: {count}</h2>  {/** render variable */}
                <div>
                    <button
                        onClick={() => { count++; console.log(count); }}
                        id="wd-counter-up-click">
                        Up
                    </button>
                    <button
                        onClick={() => { count--; console.log(count); }}
                        id="wd-counter-down-click">
                        Down
                    </button>
                </div>

                <br />
                {/** Version 2: Virtual / Real DOM affected */}
                <div>
                    <h2>Counter2: {count2}</h2> {/** Render state variable */}
                    <button onClick={() => setCount(count2 + 1)} 


                        id="wd-counter-up-click">Up</button>
                    <button onClick={() => setCount(count2 - 1)}
                        id="wd-counter-down-click">Down</button>

                </div>

            </div>


            <hr />
        </div>


    );
}