import React from "react";
import Math, { add, subtract, multiply, divide } from "../Math";
import * as Matematica from "../Math";


/**To demonstrate how the functions can be imported in several ways, create the DestructingImports component below. The component implements a table we're going to fill out with three different ways we can import the functions from the Math library we implemented above. First, the functions can be imported as the single Math object that contains references to all the functions as import Math from "./Math". Then we can access each of the functions through the Math instance as Math.add(), Math.subtract(), etc. An alternative way to import the functions as a single object is using the import * as NAME from "./Math", where NAME is a custom local object name, e.g., Matematica. We can then using the object's name to invoke the functions as Matematica.add(), Matematica.subtract(), etc. Finally, the functions can be imported individually by destructing the exported functions as import {add, subtract, multiply, divide} from "./Math". */


export default function DestructingImports() {
    return (
        <div id="wd-destructuring-imports">
            <h2>Destructing Imports</h2>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Math</th>
                        <th>Matematica</th>
                        <th>Functions</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Math.add(2, 3) = {Math.add(2, 3)}</td>
                        <td>Matematica.add(2, 3) =
                            {Matematica.add(2, 3)}</td>
                        <td>add(2, 3) = {add(2, 3)}</td>
                    </tr>
                    <tr>
                        <td>Math.subtract(5, 1) = {Math.subtract(5, 1)}</td>
                        <td>Matematica.subtract(5, 1) =
                            {Matematica.subtract(5, 1)}</td>
                        <td>subtract(5, 1) = {subtract(5, 1)}</td>
                    </tr>

        
                </tbody>
            </table>
            <hr />
        </div>
    );
}

