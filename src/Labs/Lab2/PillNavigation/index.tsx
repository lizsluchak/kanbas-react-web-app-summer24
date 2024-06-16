import React from "react";
import { useLocation } from "react-router";

{/*--------------------------------------------------------------------------*/
/*-----------------------3.3.17 Navigating with Pills------------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   Pills are another navigation widget listing several links. 
    -   Here's an example of using the Bootstrap Pills to refactor the TOC 
        component and use JavaScript to highlight the Lab we are currently 
        looking at. 
    -   Confirm the TOC highlights the corresponding link as you navigate 
        between the labs.
*/}

export default function TOC2() {
  const { pathname } = useLocation();
  return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a id="wd-a" href="#/Labs" className="nav-link">
                Labs
                </a>
            </li>

            <li className="nav-item">
                <a id="wd-a1" href="#/Labs/Lab1"
                className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
                Lab 1
                </a>
            </li>

            <li className="nav-item">
                <a id="wd-a2" href="#/Labs/Lab2"
                className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
                Lab 2
                </a>
            </li>

            <li className="nav-item">
                <a id="wd-a3" href="#/Labs/Lab3"
                className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
                Lab 3
                </a>
            </li>

            <li className="nav-item">
                <a id="wd-k" href="#/Kanbas" className="nav-link">
                Kanbas
                </a>
            </li>
            
            <li className="nav-item">
                <a id="wd-k" href="https://github.com/jannunzi" className="nav-link">
                My GitHub
                </a>
            </li>
        </ul>
  );
}
