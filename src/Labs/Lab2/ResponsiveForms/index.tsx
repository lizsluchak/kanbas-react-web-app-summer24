
import React from "react";
{/*--------------------------------------------------------------------------*/
/*-----------------------3.3.15 Making Forms Responsive----------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   Forms can be configured to display either horizontally or vertically 
        depending on the size of the containing element. To practice with 
        Bootstrap responsive forms, copy the HTML code below to the end of 
        index.tsx, and save. 
    -   Refresh the browser and confirm it looks similar to image shown. 
    -   Resize the window to show how the form changes layout as the window 
        resizes.
*/}

export default function ResponsiveForms() {
    return(
        <div>
            {/*Example 1*/}
            <div id="wd-css-responsive-forms-1">
                <h3>Responsive forms</h3>

                <div className="mb-3 row">
                    <label htmlFor="email1"
                        className="col-sm-2 col-form-label">
                        Email
                    </label>
                    
                    <div className="col-sm-10">
                        <input type="text" 
                            className="form-control"
                            id="email1" 
                            value="email@example.com" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="password1"
                        className="col-sm-2 col-form-label">
                        Password
                    </label>
                    
                    <div className="col-sm-10">
                        <input type="password" 
                            id="password1"
                            className="form-control" />
                    </div>
                </div>
                
                <div className="mb-3 row">
                    <label htmlFor="textarea2"
                        className="col-sm-2 col-form-label">
                        Bio
                    </label>
                    
                    <div className="col-sm-10">
                        <textarea className="form-control"
                            id="textarea2" 
                            rows={3}>
                        </textarea>
                    </div>
                </div>
            </div>

            {/*Example 2*/}
            <div id="wd-css-responsive-forms-2">
                <h3>Responsive forms</h3>
                
                <form>
                    <div className="row mb-3">
                        <label htmlFor="r1" 
                            className="col-sm-2 col-form-label">
                            Email 
                        </label>
                    
                        <div className="col-sm-10">
                            <input type="email" 
                                className="form-control" 
                                id="r1" />
                        </div> 
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="r2" 
                            className="col-sm-2 col-form-label">
                            Password 
                        </label>
                        
                        <div className="col-sm-10">
                            <input type="password" 
                                className="form-control" 
                                id="r2" />
                        </div>
                    </div>

                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">
                            Radios</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio"
                                name="gridRadios" id="r3" value="option1" checked />
                                <label className="form-check-label" htmlFor="r3">
                                First radio </label> </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio"
                                name="gridRadios" id="r4" value="option2" />
                                <label className="form-check-label" htmlFor="r4">
                                Second radio </label> </div>
                            <div className="form-check disabled">
                                <input className="form-check-input" type="radio"
                                name="gridRadios" id="r5" value="option3" disabled />
                                <label className="form-check-label" htmlFor="r5">
                                Third disabled radio </label> </div>
                        </div>
                    </fieldset>

                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" 
                                    id="r6" />
                                <label className="form-check-label" htmlFor="r6">
                                Example checkbox </label> 
                            </div>
                        </div>
                    </div>

                    <button type="submit" 
                        className="btn btn-primary">
                        Sign in 
                    </button>
                </form>
            </div>
        </div>

    );
}