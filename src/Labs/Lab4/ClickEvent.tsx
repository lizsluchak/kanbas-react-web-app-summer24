
const hello = () => {
    alert("Hello World!");
};
const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};
export default function ClickEvent() {
    return (

        <div id="lab4-clickEvent">
            <h5 className="definition">2.2.1: Handling Click Events</h5>
            <ul>
                <li>The onClick attribute can be used to declare a function that handles clicks. The example below calls function hello when you click the Click Hello button</li>
            </ul>

            <div id="wd-click-event">
                <h2>Click Event</h2>
                <button onClick={hello} id="wd-hello-world-click">
                    Hello World!</button>
                <button onClick={() => lifeIs("Good!")}
                    id="wd-life-is-good-click">
                    Life is Good!</button>
                <button onClick={() => {
                    hello();
                    lifeIs("Great!");
                }} id="wd-life-is-great-click">
                    Life is Great!
                </button>
                <hr />
            </div>



        </div>


    );
}