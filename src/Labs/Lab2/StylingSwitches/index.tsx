{/*--------------------------------------------------------------------------*/
/*------------------------3.3.12 Styling Switches----------------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   Checkboxes can be styled to look like switches with Bootstrap classes 
        .form-check and .form-switch. To practice with Bootstrap form switches, 
        copy the HTML code below to the end of index.tsx, and save. 
    -   Refresh the browser and confirm it looks similar to image shown.
*/}


export default function StylingSwitches() {
    return (

    <div id="wd-css-styling-switches">
        <h3>Switches</h3>
        <div className="form-check form-switch">
            <input className="form-check-input" 
                type="checkbox" 
                id="switch1" />
            <label className="form-check-label" 
                htmlFor="switch1">
                Default switch checkbox input
            </label>
        </div>
        
        <div className="form-check form-switch">
            <input className="form-check-input" 
                type="checkbox"
                id="switch2" 
                checked />
            <label className="form-check-label" 
                htmlFor="switch2">
                Checked switch checkbox input
            </label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" 
                type="checkbox"
                id="switch3" 
                disabled />
            <label className="form-check-label" 
                htmlFor="switch3">
                Disabled switch checkbox input
            </label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" 
                type="checkbox"
                id="switch4" 
                checked disabled />
            <label className="form-check-label" 
                htmlFor="switch4">
                Disabled checked switch checkbox input
            </label>
        </div>
    </div>

 );
}
