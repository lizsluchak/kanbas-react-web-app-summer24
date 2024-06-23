import { useState } from "react"; // import useState


export default function EventObject() {
  const [event, setEvent] = useState(null); // initialize event
  const handleClick = (e: any) => { // on click receive event
    e.target = e.target.outerHTML; // replace target with HTML to avoid circular reference
    delete e.view;
    setEvent(e); // set event object so it can be destroyed
  };

    return (

    <div id="wd-event-object">


      <h5 className="lab4-section-definition">2.2.4: The Event Object</h5>
            <ul>
                <li>When an event occurs, JavaScript collects several pieces of information about when the event occurred, formats it in an event object and passes the object to the event handler function. </li>
                <li>The event object contains information such as a timestamp of when the event occurred, where the mouse was on the screen, and the DOM element responsible for generating the event.</li>
                <li>The example below:</li>
                    <ol>
                        <li> Declares event handler function handleClick that accepts an event object e parameter </li>
                        <li> Removes the view property and replaces the target property to avoid circular references </li>
                        <li> Stores the event object in variable event. </li>
                        <li>The component then renders the JSON representation of the event on the screen.</li>

                        
                    </ol> 
            </ul>
      <button onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
    </div>
  );}


