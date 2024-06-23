import "../styles.css"
import React, { useState } from "react"; // import useState

export default function ObjectStateVariables() {

    // declare and initialize object state with mult fields
    const [person, setPerson] = useState({ name: "Peter", age: 24 });

    return (

        <div id="wd-object-state-variables">

            <h5 className="lab4-section-definition">2.3.6: Object State Variables</h5>

            <ul>
                <li>The ObjectStateVariable component below demonstrates how to work with object state variables.</li>
                <li>We declare person object state variable with initial property values name and age. The object is rendered on the screen using JSON.stringify to see the changes in real time.</li> 
                <li>Two value of two input fields are initialized to the object's person.name string property and the object's person.age number property. As the user types in the input fields, the onChange attribute passes the events to update the object's property using the setPerson mutator functions. The object is updated by creating new objects copied from the previous object value using the spreader operator (...person), and then overriding the name or age property with the target.value.</li>
                
            </ul>
            <br />


            <div>
                {/** display raw JSON */}
                <pre>{JSON.stringify(person, null, 2)}</pre>
                <input
                    //initialize input field with an object's field value
                    value={person.name}
                    //update field as user types. copy old object, override specific field with new value
                    onChange={(e) => setPerson({ ...person, name: e.target.value })}
                />
                <input
                    value={person.age}
                    // update field as user types. copy old object, override specific field with new value

                    onChange={(e) => setPerson({
                        ...person,
                        age: parseInt(e.target.value)
                    })}
                />
                <hr />
            </div>






            <hr />
        </div>


    );
}