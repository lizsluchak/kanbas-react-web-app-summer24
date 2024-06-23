/**
An array's find function can search for an item in an array and return the element it finds. The find function takes a function as an argument that serves as a predicate. The predicate should return true if the element is the one you're looking for. The predicate function is invoked for each of the elements in the array and when the function returns true, the find function stops because it has found the element that it was looking for. To practice, implement a new component called FindFunction based on the code below. Import this new component in JavaScript and confirm the browser renders as shown.
 */
export default function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2", "string3"];
    const four = numberArray1.find((a) => a === 4);
    const string3 = stringArray1.find((a) => a === "string3");
    return (
      <div id="wd-find-function">
        <h4>Find Function</h4>
        four = {four} <br />
        string3 = {string3} <hr />
      </div>
  );}
  