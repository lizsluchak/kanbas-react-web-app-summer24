
export default function Lab4Introduction() {
    return (

        <div id="lab4-introduction">
            <h4 className="definition">Lab 4 Introduction:</h4>
            <ul>
                <li>In this assignment we are going to practice working with application and component level state</li>
                <li>We will be using the <span><a id="wd-redux-library" href="https://redux.js.org/" target="_blank">Redux state management library</a></span> to handle application state, and use React.js state and effect hooks to manage component state.    </li>

                <li><span className="definition">State:</span> is the collection of data values stored in the various constants, variables and data structures in an application. </li>
                <ul>
                    <li><span className="definition">Application State:</span> is data that is relevant across the entire application or a significant subset of related components. </li>
                    <ul>
                        <li>If information is relevant across several or most components, then it should live in the application state. </li>
                        <li> For instance, the information about the currently logged in user could be stored in a profile, e.g., username, first name, last name, role, logged in, etc., and it might be relevant across the entire application.</li>
                    </ul>
                    <li><span className="definition">Component State:</span> is data that is only relevant to a specific component or a small set of related components. </li>
                    <ul>
                        <li>If information is relevant only in one component, or a small set of related components, then it should live in the component state. </li>
                        <li>On the other hand, filling out shipping information might only be relevant while checking out, but not relevant anywhere else, so shipping information might best be stored in the ShippingScreen or Checkout components in the component's state. </li>
                    </ul>
                </ul>
            </ul>
        </div>


    );




}

