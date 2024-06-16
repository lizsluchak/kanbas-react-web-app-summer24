import React from "react";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

{/*--------------------------------------------------------------------------*/
/*------------------------------3.2 React Icons------------------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   React icons is a CSS library that aggregates icons from various 
        sources including Fontawesome, Bootstrap, and Heroicons. 
    -   Install React icons from the root of your project as shown below. 
    -   The icons are made available as React.js components you can import 
        and use as tags within your HTML code. 
*/}

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4">
      <h3>React Icons Sampler</h3>
      
      <div className="d-flex">
        <VscAccount className="fs-3 text" />
        <AiOutlineDashboard className="fs-3 text" />
        <FaBookBible className="fs-3 text" />
        <FaCalendar className="fs-3 text" />
        <FaEnvelopeOpenText className="fs-3 text" />
        <FaRegClock className="fs-3 text" />
      </div>
    </div>
  );
}


