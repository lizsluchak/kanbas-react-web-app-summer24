/**
 In most languages arrays are immutable, whereas in JavaScript we can easily add or remove elements from the array. The push() function appends an element at the end of an array. The splice() function can remove/add an element anywhere in the array. 
 */
export default function AddingAndRemovingToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let todoArray = [<li>Buy milk</li>, <li>Feed the pets</li>];
    numberArray1.push(6); // adding new items
    stringArray1.push("string3");
    todoArray.push(<li>Walk the dogs</li>);
    numberArray1.splice(2, 1); // remove 1 item starting at 2
    stringArray1.splice(1, 1);
    return (
      <div id="wd-adding-removing-from-arrays">
        <h4>Add/remove to/from arrays</h4>
        numberArray1 = {numberArray1} <br />
        stringArray1 = {stringArray1} <br />
        Todo list:
        <ol>{todoArray}</ol>
        <hr />
      </div>
  );}
  