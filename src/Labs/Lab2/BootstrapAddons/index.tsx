import React from "react";
{/*--------------------------------------------------------------------------*/
/*---------------------------3.3.14 Styling Addons---------------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   Addons decorate input fields to give some context on the type and 
        formate of the information to type in the input field.
*/}


export default function BootstrapAddons() {
    return(

        <div id="wd-css-styling-addons">
            <h3>Addons</h3>
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <span className="input-group-text">0.00</span>
                <input type="text" 
                    className="form-control" />
            </div>
            <div className="input-group">
                <input type="text" 
                    className="form-control" />
                <span className="input-group-text">$</span>
                <span className="input-group-text">0.00</span>
            </div>
        </div>

    );
}