import "../styles.css"
import React, { useState } from "react"; // import useState

export default function DateStateVariables() {

    // declare and initialize with today's date
    const [startDate, setStartDate] = useState(new Date());
    
    // utility function to convert date object to YYYY-MM-DD format for HTML date picker
    const dateObjectToHtmlDateString = (date: Date) => {
      return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
        date.getMonth() + 1
      }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
    };
  
    return (

        <div id="wd-date-state-variables">

            <h5 className="lab4-section-definition">2.3.4: Date State Variables</h5>

            <ul>
                <li>The DateStateVariable component illustrates how to work with date state variables.</li>
                <li>The stateDate state variable is initialized to the current date using new Date(), which has the string representation  = "2023-10-09T01:57:28.439Z".</li>
                <li>The dateObjectToHtmlDateString function can convert a Date object into the YYYY-MM-DD format expected by the HTML date input field. </li>
                <li>The function is used to initialize and set the date field's value attribute so it matches the expected format. Changes in date field are handled by the onChange attribute which updates the new date using the setStartDate mutator function.</li>

            </ul>
            <br />

            <div>
                <div id="wd-date-state-variables">
                    {/** display raw date object */}
                    <h3>{JSON.stringify(startDate)}</h3>
                    {/** display in YYYY-MM-DD format for input */}
                    <h3>{dateObjectToHtmlDateString(startDate)}</h3>
                    <input
                        className="form-control"
                        type="date"

                        // set HTML input type date
                        value={dateObjectToHtmlDateString(startDate)}

                        // update when you change the date with the date picker
                        onChange={(e) => setStartDate(new Date(e.target.value))}
                    />
                    <hr />
                </div>

                <hr />
            </div>
            <hr />
        </div>


    );
}