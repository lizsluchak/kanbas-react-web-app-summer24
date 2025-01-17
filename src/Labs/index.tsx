// Webdev A1.2.3 Creating The Labs Component: Labs React.js Component - Combines all Labs

// Notes:
// (1)  Components can import other components to aggregate the code snippets
//      of the components into larger, more complex HTML content. Here the
//      Labs component imports the Lab1 component as the first of a
//      set of assignments that will be implemented in later assignments.
//      The Lab1 function is invoked with the HTML syntax <Lab1/>
//      which is replaced by HTML the function returns implemented in the
//      Lab1 function

import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Kanbas from "../Kanbas";


export default function Labs() {
    return(
        <div id="wd-labs">
    
        <h1>Welcome to Web Dev: Summer 2024 CS5610 </h1>

        <h2>Elisabeth Sluchak</h2>
   
            <h1>Labs</h1>
            <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
        <Route path="Kanbas" element={<Kanbas />} />
       
  
      </Routes>


        </div>

    );

}
