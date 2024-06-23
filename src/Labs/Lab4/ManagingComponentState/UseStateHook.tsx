import "../styles.css"

export default function UseStateHook() {



    return (

        <div id="use-state-hook">

            <h5 className="lab4-section-definition">2.3.1: Use State Hook</h5>
            <ul>
                <li><span className="lab4-section-definition">Syntax: </span>const [stateVariable, setStateVariable] = useState(initialStateValue);</li>
                <ul>
                    <li><span className="lab4-section-definition">Use State Hook:</span> is used to declare state variables that we want to affect the DOM rendering.</li>
                    <li>The useState hook takes as argument the initial value of a state variable and returns an array whose first item consists of the initialized state variable, and the second item is a mutator function that allows updating the state variable.</li>
                    <li> The array destructor syntax is commonly used to bind these items to local constants as shown above. The mutator function not only changes the value of the state variable, but it also notifies React.js that it should check if the state has caused changes to the virtual DOM and therefore make changes to the actual DOM. The following exercises introduce various use cases of the useState.</li>
                </ul>

                <li>Updating the DOM with JavaScript is slow and can degrade the performance of Web applications.</li>
                <li>React.js optimizes the process by creating a virtual DOM, a more compact and efficient version of the real DOM. When React.js renders something on the screen, it first updates the virtual DOM, and then converts these changes into updates to the actual DOM.</li>
                <li> To avoid unnecessary and slow updates to the DOM, React.js only updates the real DOM if there have been changes to the virtual DOM. </li>
                <li>We can participate in this process of state change and DOM updates by using the useState hook. </li>


            </ul>
            <hr/>

            



        </div>


    );
}