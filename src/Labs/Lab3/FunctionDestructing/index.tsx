/**
 * 
The destructing objects syntax is very popular in React.js, especially when passing parameters to functions. In the example below we declare two functions add and subtract using the new arrow function syntax. The add function takes two arguments a and b and returns the sum of the arguments. The subtract function takes a single object argument with properties a and b with values 4 and 2. In the argument list declaration, subtract uses object destructing to declare constants a and b which unpacks the values 4 and 2 from the object argument with properties of the same name. To practice function destructing, copy the code below into a FunctionDestructing component, import it into the Lab3 component, and confirm it renders as shown below on the right.
 */


export default function FunctionDestructing() {
    const add = (a: number, b: number) => a + b;
    const sum = add(1, 2);
    const subtract = ({ a, b }: { a: number; b: number }) => a - b;
    const difference = subtract({ a: 4, b: 2 });
    return (
        <div id="wd-function-destructing">
            <h2>Function Destructing</h2>
            const add = (a, b) =&gt; a + b;<br />
            const sum = add(1, 2);<br />
            const subtract = (&#123; a, b &#125;) =&gt; a - b;<br />
            const difference = subtract(&#123; a: 4, b: 2 &#125;);<br />
            sum = {sum}<br />
            difference = {difference} <hr />
        </div>
    );
}

