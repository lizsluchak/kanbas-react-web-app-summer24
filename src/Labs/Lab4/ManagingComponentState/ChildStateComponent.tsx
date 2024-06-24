import "../styles.css"
import React, { useState } from "react"; // import useState

export default function ChildStateComponent({ counter, setCounter }:
    {
        counter: number;
        setCounter: (counter: number) => void; // why void????
    }) {
    return (
        <div id="wd-child-state">
            <h3>Child State Counter {counter}</h3>
            <button onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click">
                Increment</button>
            <button onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click">
                Decrement</button>
            <hr />
        </div>



    );
}