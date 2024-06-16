import React from "react";
{/*--------------------------------------------------------------------------*/
/*--------------------3.3.13 Styling Range and Sliders-----------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   Range input fields render as sliders. To practice with Bootstrap 
        sliders, copy the HTML code below to the end of index.tsx, and save. 
    -   Refresh the browser and confirm it looks similar to image shown.

*/}

export default function BootstrapSliders() {
    return(
    <div id="wd-css-styling-range-and-sliders">
        <h3>Range</h3>
        <label htmlFor="range1" className="form-label">
            Example range
        </label>
        <input type="range" 
            className="form-range"
            min="0" 
            max="5" 
            step="0.5" 
            id="range1" />
    </div>
    );
}
