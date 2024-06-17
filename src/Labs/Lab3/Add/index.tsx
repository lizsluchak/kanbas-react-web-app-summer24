/**
 * 
React components can be parameterized by using the familiar HTML attribute syntax, which passes attribute values to the component's function as an object map parameter. The following Add component can receive properties a and b deconstructed from the attributes of its equivalent HTML attributes syntax. Implement the Add component below and confirm that passing it a=3 and b=4 results in a + b = 7. Note that the values of a and b are descructed from the object parameter in the Add function parameter list.

 */
export default function Add({ a, b }: { a: number; b: number }) {
    return (
      <div id="wd-add">
        <h4>Add</h4>
        a = {a}
        b = {b}         
        <br />
        a + b = {a + b} 
        <hr />
      </div>
    );
  }
  