import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import TOC2 from "../Labs/Lab2/PillNavigation";
import "./styles.css"
import ScreenSizeLabel from "../ScreenSizeLabel";


export default function Kanbas() {
    return (
      
      <div id="wd-kanbas">
        <ScreenSizeLabel />

        {/**--------------------------------------------------------------------------*
         * the existance of the div below is to set up flex; it is the row in which 
         * columns will be added; flex is activited by bootstrap class flex:
         * d-flex aka display flex*/}
        <div className="d-flex"> 
          
         {/**--------------------------------------------------------------------------*
         * this div defines a column within flex
         * bg-black: makes column black
         * d-none: makes the block not show
         * d-sm-block: makes kanbasNavigation render when we get to small size
         * */}
          <div className="bg-black d-none d-md-block" style={{height: "2000px"}}> 
            <KanbasNavigation />
        
          </div>


          {/*why do these routes go here?*/}
          <div className="flex-fill p-4"> {/**this div defines a column within flex */}
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="/Account" element={<h2>Account</h2>} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Courses/:id/*" element={<Courses />} />
              <Route path="/Calendar" element={<h2>Calendar</h2>} />
              <Route path="/Inbox" element={<h2>Inbox</h2>} />
            </Routes>
          </div>
      </div>
    </div>

);}




{/* Previous Iterations:

  (1) I dont remember why we stopped using this one:
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:id/*" element={<Courses />} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </td>
        </tr>
      </table>
  (2) We stopped using the below version because it uses table elements
      to layout screens horizontally ~ generally considered a bad practice.
      Instead we switch to implementing it with DIVs and CSS flex instead
      of tables:
            <div id="wd-kanbas">
            <table>
              <tr>
                <td valign="top">
                  <KanbasNavigation />
                </td>

                <td valign="top">
                  <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:id/*" element={<Courses />} />
                    <Route path="Calendar" element={<h1>Calendar</h1>} />
                    <Route path="Inbox" element={<h1>Inbox</h1>} />
                  </Routes>
                </td>
              </tr>
      </table>
    </div>
    
    
    
    
    
*/}

      
  

//   //i had to add this export line.. why?
// export {}
  