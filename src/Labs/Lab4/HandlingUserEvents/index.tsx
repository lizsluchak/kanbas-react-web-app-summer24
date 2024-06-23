import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

export default function HandlingUserEvents() {
    // implement callback function
    function sayHello() {
        alert("Hello");
      }
    
    return (

        <div id="handling-user-events">
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} /> {/** pass callback function as a parameter */}
           

        </div>


    );
}