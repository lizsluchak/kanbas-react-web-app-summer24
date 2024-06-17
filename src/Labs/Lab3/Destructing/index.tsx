/**
While the spreader operator is used to expand an iterable object into the list of arguments, the destructing operator is used to unpack values from arrays, or properties from objects, into distinct variables. In the example below we declare object person and array numbers. These can be unpacked, or destructed, into new variables or constants by an object's property name or an array's item position. The curly brackets around constants name and age, destruct the object person on the right side of the assignment, and assigns the properties of the same name into the new constants. The constants name and age end up having the values of person.name and person.age respectively. Essentially it is the equivalent to
const name = person.name
const age = person.age

While object destructing is based on the names of the properties, destructing arrays is based on the positions of the items. In the example below, we declare the numbers array and then use the square brackets to destruct the array into new constants first, second, and third. These new constants end up with the values of numbers[0], numbers[1], and numbers[2]. Essentially it is equivalent to
const first = numbers[0]
const second = numbers[1]
const third = numbers[2]
*/

export default function Destructing() {
    const person = { name: "John", age: 25 };
    const { name, age } = person;
    // const name = person.name
    // const age = person.age
    const numbers = ["one", "two", "three"];
    const [ first, second, third ] = numbers;
    return (
      <div id="wd-destructing">
        <h2>Destructing</h2>
        <h3>Object Destructing</h3>
        const &#123; name, age &#125; =
              &#123; name: "John", age: 25 &#125;<br /><br />
        name = {name}<br />
        age = {age}
        <h3>Array Destructing</h3>
        const [first, second, third] = ["one","two","three"]<br/><br/>
        first = {first}<br />
        second = {second}<br />
        third = {third}<hr />
      </div>
    );
   }
   