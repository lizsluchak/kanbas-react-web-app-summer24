

// function passed in as a parameter
export default function PassingFunctions(
    { theFunction }: { theFunction: () => void }) {
    return (
        <div>
            <h5 className="lab4-section-definition">2.2.3: Passing Functions as Parameters</h5>
            <ul>
                <li>In JavaScript, functions can be treated as any other constant or variable, including passing them as parameters to other functions. </li>
                <li>The example below passes function sayHello to component PassingFunctions. When the button is clicked, sayHello is invoked. </li>
            </ul>
            
            {/* invoking function with no arguments */}
            <button onClick={theFunction} className="btn btn-primary">
                Invoke the Function
            </button>
            <hr />
        </div>
    );
}
           
