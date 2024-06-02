{/*--------------------------------------------------------------------------*/
/*-----------------------3.3.16 Navigating with Tabs-------------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   Bootstrap provides several common navigation widgets such as tabs, 
        menus, and pills. Let's take a look at tabs first. To practice with 
        Bootstrap tabs, copy the HTML code below to the end of index.tsx, and 
        save. Refresh the browser and confirm it looks similar to image shown.
*/}

export default function TabNavigation() {
    return (

    <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>

            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>

        </ul>
    </div>

 );
}