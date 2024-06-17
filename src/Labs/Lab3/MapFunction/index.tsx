/**
 An array's map function can iterate over an array's values, apply a function to each value, and collate all the results in a new array. The first example below iterates over the numberArray1 and calls the square function for each element. The square function was declared earlier in this document and it accepts a parameter and returns the square of the parameter. The map function collates all the squares into a new array called squares as shown below. The second example does the same thing, but uses a function that calculates the cubes of all numbers in the same numberArray1 array. To practice with map, implement a new component called MapFunction based on the code below. Import this new component in WorkingWithArrays and confirm the browser renders as shown.
 */

export default function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;
    const todos = ["Buy milk", "Feed the pets"];
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map((a) => a * a * a);
    return (
      <div id="wd-map-function">
        <h4>Map Function</h4>
        squares = {squares} <br />
        cubes = {cubes} <br />
        Todos:
        <ol>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ol> <hr/>
      </div>
    );
  }
  