import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

export default function HandlingUserEvents() {
    // implement callback function
    function sayHello() {
        alert("Hello");
    }

    return (

        <div id="handling-user-events">
            <br />
            <h4 className="lab4-intro-definition">2.2: Handling User Events</h4>
            <ol>
                <li><ClickEvent /></li>
                <li><PassingDataOnEvent /></li>
                <li><PassingFunctions theFunction={sayHello} /> </li> {/** pass callback function as a parameter */}
                <li><EventObject /></li>
            </ol>



        </div>


    );
}