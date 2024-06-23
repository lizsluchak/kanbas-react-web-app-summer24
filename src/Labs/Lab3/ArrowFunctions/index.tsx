const subtract = (a: number, b: number) => {
    return a - b;
  };

  /**
   * A new version of JavaScript was introduced in 2015 and is officially 
   * referred to as ECMAScript 6 or ES6. A new syntax for declaring functions 
   * was introduced which is less verbose and provides tons of new features 
   * we'll explore throughout this course. This function syntax is often ;
   * referred to as arrow functions. Similar to lambdas. 
   */
  export default function ArrowFunctions() {
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);
    return (
      <div id="wd-arrow-functions">
        <h4>New ES6 arrow functions</h4>
        threeMinusOne = {threeMinusOne}   <br />
        subtract(3, 1) = {subtract(3, 1)} <hr />
      </div>
  );}
  