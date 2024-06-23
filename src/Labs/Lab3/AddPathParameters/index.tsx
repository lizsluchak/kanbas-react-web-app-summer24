/**
 * The URL can also be used to encode parameters when navigating between screens. Components can parse parameters from the path using the useParams React.js hook. The Add component below is parsing parameters a and b from the path and calculating the arithmetic addition of the parameters.
 * 
 * Path parameter names such as a and b, are declared in the path attribute of the Route component for the target screen. For instance the Route component below uses the colon character to declare parameters a and b. The first link encodes values 1 and 2 for parameters a and b, wheres as the second link encodes values 3 and 4 for parameters a and b. Import PathParameters component in your Lab3 component and confirm clicking the first link, the URL matches the Route and renders the Add component with parameters a=1 and b=2 and so it renders 1 + 2 = 3. Confirm clicking the second link sets a=3 and b=4 and so it renders 3 + 4 = 7. Add '/*' to the Lab3 route in the Labs component as shown below on the right.
 */

import React from "react";
import { useParams } from "react-router-dom";
export default function AddPathParameters() {
  const { a, b } = useParams();
  return (
    <div id="wd-add"> 
    <h4>Add Path Parameters</h4>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </div>
  );
}
