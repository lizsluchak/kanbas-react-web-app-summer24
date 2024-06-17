/**
 * 
The filter function can look for elements that meet a criteria and collate them into a new array. For instance, the example below is looking through the numberArray1 array for all values that are greater than 2. Then we look for all even numbers and then for all odd numbers. All the results are stored in corresponding arrays with appropriate names. To practice, implement a new component called FilterFunction based on the code below. Import this new component in Lab3 and confirm the browser renders as shown.
 */

export default function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];
    const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
    const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
    const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
    return (
      <div id="wd-filter-function">
        <h4>Filter Function</h4>
        numbersGreaterThan2 = {numbersGreaterThan2}  <br />
        evenNumbers = {evenNumbers}    <br />
        oddNumbers = {oddNumbers}      <hr />
      </div>
  );}
  