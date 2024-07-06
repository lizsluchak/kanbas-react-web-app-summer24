// Webdev A1.2.3 Creating The Labs Component: Labs React.js Component - Combines all Labs

// Notes:
// (1)  Components can import other components to aggregate the code snippets
//      of the components into larger, more complex HTML content. Here the
//      Labs component imports the Lab1 component as the first of a
//      set of assignments that will be implemented in later assignments.
//      The Lab1 function is invoked with the HTML syntax <Lab1/>
//      which is replaced by HTML the function returns implemented in the
//      Lab1 function
//tailwind

import { Route, Routes, Navigate } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Kanbas from "../Kanbas";
// import TOC2 from "./Lab2/PillNavigation";
import TOC from "./TOC";
import "../index.css"
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";


export default function Labs() {
    return(
      // The application state can then be shared with the entire Web 
      // application by wrapping it with a Provider component that makes the 
      // state data in the store available to all components within the 
      // Provider's body.
      // Components within the body of the Provider can then select the state 
      // data they want using the useSelector hook as shown below. 
      // Add the HelloRedux component to ReduxExamples and confirm it renders as shown below.
      <Provider store={store}>

        <div id="wd-labs" className="container-fluid">
        
        <h1>Welcome to Web Dev: Summer 2024 CS5610 </h1>
        <h2>Elisabeth Sluchak</h2>
        
 
        <TOC />
        
        
       {/*why are these routes here, where is github link*/}

      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
        <Route path="Lab5/*" element={<Lab5 />} />
        <Route path="Kanbas/*" element={<Kanbas />} />
      </Routes>

        </div>

        </Provider>

    );

}
