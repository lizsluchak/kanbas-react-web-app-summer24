import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import TOC2 from "../Labs/Lab2/PillNavigation";
import "./styles.css"


export default function Kanbas() {
    return (
      
      <div id="wd-kanbas">
        <div className="d-flex h-100"> 
          
          <div className="list-item d-none d-sm-block bg-black">
            <KanbasNavigation />
          </div>


          {/*why does this go here?*/}
          <div className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:cid/*" element={<Courses />} />
              {/* <Route path="Calendar/:cid/*" element={<Calendar />} />*/}
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
  