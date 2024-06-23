
const hello = () => { // declare a function to handle the event
    alert("Hello World!");
};
const lifeIs = (good: string) => { // declare a function to handle the event
    alert(`Life is ${good}`);
};
export default function ClickEvent() {
    return (

        <div id="lab4-clickEvent">
            <h5 className="lab4-section-definition">2.2.1: Handling Click Events</h5>
            <ul>
                <li>The onClick attribute can be used to declare a function that handles clicks. The example below calls function hello when you click the Click Hello button</li>
            </ul>

            <div id="wd-click-event">
                {/** Configure the function call */}
                <button onClick={hello} id="wd-hello-world-click">  
                    Hello World!</button>

                {/** Wrap in function if you need to pass parameters */}
                <button onClick={() => lifeIs("Good!")}
                    id="wd-life-is-good-click">
                    Life is Good!</button>

                {/** Wrap in {} if you need more than one line of code */}
                <button onClick={() => {
                    {/** calling hello() */}
                    hello();
                    {/** calling lifeIs() */}
                    lifeIs("Great!");
                    }} id="wd-life-is-great-click">
                    Life is Great!
                </button>
                <hr />
            </div>



        </div>


    );
}