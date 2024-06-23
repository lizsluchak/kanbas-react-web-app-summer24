import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import "../styles.css"

export default function HandlingUserEvents() {
    // implement callback function
    function sayHello() {
        alert("Hello");
    }

    return (

        <div id="handling-user-events">
            <br />
            <h4 className="lab4-intro-definition ">2.2: Handling User Events</h4>
            <br />
            <ol>
                <ClickEvent />
                <PassingDataOnEvent />
                <PassingFunctions theFunction={sayHello} />  {/** pass callback function as a parameter */}
                <EventObject />
            </ol>


        </div>


    );
}