import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
console.log(REMOTE_SERVER);

/**
 * Meanwhile, in the React.js Web application, let's create a React.js 
 * component to test the new routes from our Web application. 
 * Web applications that interact with server applications are often 
 * referred to as client applications since they are the client in an 
 * application built using a client server architecture. Create the 
 * component below that declares state variables a and b, encodes the 
 * values in hyperlinks, and when you click them, server responds with the 
 * addition or subtraction of the parameters. Note that the name of the 
 * component is arbitrary. The fact that it is called the same as the routes 
 * in the server is a coincidence. Also helps us keep track of which UI 
 * components on the client are related to the server resources. On your own, 
 * create links that invoke the multiply and divide routes you implemented 
 * earlier. Import the new component in your Lab5 component and confirm that 
 * clicking the links generates the expected response. Confirm all the routes 
 * work when you click the links in the browser.
 */
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div>
      <h3>Path Parameters</h3>

      <input className="form-control mb-2" id="wd-path-parameter-a" type="number" value={a}
             onChange={(e) => setA(e.target.value)}/>
      <input className="form-control mb-2" id="wd-path-parameter-b" type="number" value={b}
             onChange={(e) => setB(e.target.value)}/>

      <a className="btn btn-primary me-2" id="wd-path-parameter-add"
         href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>
         Add {a} + {b}
      </a>
      <a className="btn btn-danger me-2" id="wd-path-parameter-subtract" 
         href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}>
         Substract {a} - {b}
      </a>
      <a className="btn btn-success me-2" id="wd-path-parameter-multiply" 
         href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}>
         Multiply {a} * {b}
      </a>
      <a className="btn btn-info" id="wd-path-parameter-divide" 
         href={`${REMOTE_SERVER}/lab5/divide/${a}/${b}`}>
         Divide {a} / {b}
      </a>



      <hr />
    </div>
  );
}
