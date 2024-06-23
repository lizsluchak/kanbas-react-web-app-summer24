/**
 * 
The spread operator (...) is used to expand, or copy an iterable object or array into another object or array. In the example below we declare array arr1 and then copy its content (spread) into array arr2. The resulting array arr2 contains the contents of arr1, followed by the rest of the items already declared in arr2. The spread operator can also be applied to objects as illustrated in the following example. Below, obj1 declares an object with three properties a, b, and c. We then spread obj1 onto obj2 so that obj2 ends up with the properties from both obj1 and obj2. When declaring obj3, we first spread obj1 and then declare b with a value of 4. Since obj1 also has a property called b with a value of 2, there is a collision of properties in obj3. The collision is resolved by keeping the last declaration overriding any previous values, so obj3.b ends up being 4. To practice the spread operator, create the Spreading component as shown below, import it in the Lab3 component and confirm it renders as shown below.
 */
export default function Spreading() {
    const arr1 = [ 1, 2, 3 ];
    const arr2 = [ ...arr1, 4, 5, 6 ];
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
    const obj3 = { ...obj1, b: 4 };
    return (
      <div id="wd-spreading">
        <h2>Spread Operator</h2>
        <h3>Array Spread</h3>
        arr1 = { JSON.stringify(arr1) }  <br />
        arr2 = { JSON.stringify(arr2) }  <br />
        <h3>Object Spread</h3>
        { JSON.stringify(obj1) }         <br />
        { JSON.stringify(obj2) }         <br />
        { JSON.stringify(obj3) }         <br />  <hr />
      </div>);
   }
   