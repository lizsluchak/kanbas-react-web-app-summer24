/**
 * -    Up to this point we have been discussing primitive datatypes such as 
 *      strings, numbers, and booleans. These can be combined into complex 
 *      datatypes such as arrays and objects. 
 * -    Arrays can group together several values into a single variable. Arrays 
 *      can group together values of different datatypes, e.g., number arrays, 
 *      string arrays, and even a mix and match of datatypes in the same array. 
 * -    Not that you would ever want to actually do that.
 * -    Note that the arrays render without the commas. This feature will come 
 *      in handy when the array items are HTML elements.
 */
export default function SimpleArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let htmlArray1 = [<li>Buy milk</li>, <li>Feed the pets</li>];
    let variableArray1 = [ functionScoped, blockScoped, constant1,
                           numberArray1, stringArray1 ];
    return (
      <div id="wd-simple-arrays">
        <h4>Simple Arrays</h4>
        numberArray1 = {numberArray1}     <br />
        stringArray1 = {stringArray1}     <br />
        variableArray1 = {variableArray1} <br />
        Todo list:
        <ol>{htmlArray1}</ol>
        <hr />
      </div>
    );
  }
  