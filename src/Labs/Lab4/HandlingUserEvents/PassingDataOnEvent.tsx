// function expects a and b
const add = (a: number, b: number) => {
    alert(`${a} + ${b} = ${a + b}`);
};

export default function PassingDataOnEvent() {
    return (

        <div id="wd-passing-data-on-event">
            <h5 className="lab4-section-definition">2.2.2: Passing Data when Handling Events</h5>
            <ul>
                <li>When handing an event, sometimes we need to pass parameters to the function handling the event. </li>
                <li>Make sure to wrap the function call in a closure as shown below. The example below calls add(2, 3) when the button is clicked, passing arguments a and b as 2 and 3.</li>
                <li>If you do not wrap the function call inside a closure, you risk creating an infinite loop.</li>
            </ul>

            
            {/** Use arrow syntax */}
            <button onClick={() => add(2, 3)}
                // Not this syntax: onClick={add(2, 3)} -- otherwise you risk an infinite loop  
                className="btn btn-primary"
                id="wd-pass-data-click">
                Pass 2 and 3 to add()
            </button>
            <hr />
        </div>
    );
}