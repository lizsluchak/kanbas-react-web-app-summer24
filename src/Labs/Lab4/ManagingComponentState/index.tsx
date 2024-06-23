import UseStateHook from "./UseStateHook"; // import useState

import BooleanStateVariables from "./BooleanStateVariables";
import Counter from "./Counter";
import StringStateVariables from "./StringStateVariables";
import DateStateVariables from "./DateStateVariables";
import ObjectStateVariables from "./ObjectStateVariables";
import ArrayStateVariables from "./ArrayStateVariables";




export default function ManagingComponentState() {


    
    return (

        <div id="managing-component-state">

            <br />
            <h4 className="lab4-intro-definition ">2.3: Managing Component State</h4>
            <ul>
                <li>Web applications implemented with React.js can be considered as a set of functions that transform a set of data structures into an equivalent user interface.</li>
                <li>The collection of data structures and values are often referred to as an application state. </li>
                <li>So far we have explored React.js applications that transform a static data set, or state, into a static user interface.</li> 
                <li>We will now consider how the state can change over time as users interact with the user interface and how these state changes can be represented in a user interface.</li>
                <li>Users interact with an application by clicking, dragging, and typing with their mouse and keyboard, filling out forms, clicking buttons, and scrolling through data.</li>
                <li>As users interact with an application they create a stream of events that can be handled by a set of event handling functions, often referred to as controllers.</li>
                <li>Controllers handle user events and convert them into changes in the application’s state.</li>
                <li>Applications render application state changes into corresponding changes in the user interface to give users feedback of their interactions.</li> 
                <li>In Web applications, user interface changes consist of changes to the DOM.</li> 
            </ul>
            <br />
            <ul>
                <UseStateHook />
                <Counter />
                <BooleanStateVariables />
                <StringStateVariables />
                <DateStateVariables />
                <ObjectStateVariables />
                <ArrayStateVariables />
            </ul>
            
            


        </div>


    );
}
   
           

