import "../styles.css"
import React, { useState } from "react"; // import useState

export default function ArrayStateVariables() {
    // declare array state
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    // event handler appends random number at end of array
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };

    // event handler removes element by index
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };

    return (

        <div>
            <div id="wd-array-state-variables">

                <h5 className="lab4-section-definition">2.3.7: Array State Variables</h5>

                <ul>

                    <li>The ArrayStateVariable component below demonstrates how to work with array state variables.</li>
                    <li>An array of integers, if declared as a state variable, use functions addElement and deleteElement to add and remove elements to and from the array.</li>
                    <li>We render the array as a map of line items in an unordered list.</li>
                    <li>We render the array's value and a Delete button for each element. Clicking the Delete button calls the deleteElement function which passes the index of the element we want to remove.</li>
                    <li>The deleteElement function computes a new array filtering out the element by its position and updating the array state variable to contain a new array without the element we filtered out.</li>
                    <li>Clicking the Add Element button invokes the addElement function which computes a new array with a copy of the previous array spread at the beginning of the new array, and adding a new random element at the end of the array.</li>


                </ul>
                <br />

                <div id="wd-array-state-variables">
                    <div className = "container">
                        <div className = "col-2" >

                        

                    {/* button calls addElement to append to array */}
                    <button className="btn btn-success p-3 m-2" onClick={addElement}>Add Element</button>

                    {/** iterate over array items */}
                    {array.map((item, index) => (

                        <table className="table table-bordered border-secondary" >
                            <tbody>
                                <tr>
                                    <td scope="row " key={index}>
                                        {/** render items value */}
                                        <div className="">
                                        {item}
                                        {/** button to delete element by its index */}
                                        <button onClick={() => deleteElement(index)}
                                            id="wd-delete-element-click" className="btn btn-danger">
                                            Delete</button>

                                        </div>
                                       
                                    </td>
                                   


                                </tr>
                            </tbody>
                        </table>

                    ))}
                    </div>
                    </div>













                </div>





             
            </div>
            <br/>
            <br/>
            </div>


            );
}


//   {/* button calls addElement to append to array
//                 <button className="btn btn-success" onClick={addElement}>Add Element</button>
//                 <ul>
//                     {/** iterate over array items */}
//                     {array.map((item, index) => (
//                         <li key={index} className="border-">
//                             {/** render items value */}
//                             {item}
//                             {/** button to delete element by its index */}
//                             <button onClick={() => deleteElement(index)}
//                                 id="wd-delete-element-click" className="btn btn-danger">
//                                 Delete</button>
//                         </li>
//                     ))}