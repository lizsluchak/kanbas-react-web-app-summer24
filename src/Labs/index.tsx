// Webdev A1.2.3 Creating The Labs Component: Labs React.js Component - Combines all Labs

// Notes:
// (1) Components can import other components to aggregate the code snippets
//      of the components into larger, more complex HTML content. Here the
//      Labs component imports the Lab1 component as the first of a
//      set of assignments that will be implemented in later assignments.
//      The Lab1 function is invoked with the HTML syntax <Lab1/>
//      which is replaced by HTML the function returns implemented in the
//      Lab1 function

import Lab1 from "./Lab1";


export default function Labs() {
    return(
        <div id="wd-labs">

            <h1>Labs</h1>
            <Lab1 />

        </div>
    );
}
