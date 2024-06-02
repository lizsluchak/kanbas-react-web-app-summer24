import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";


export default function Courses() {
    return (
      <div id="wd-courses">
        <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" /> 
          Course 1234</h2>
        <hr />

        <div className="d-flex">
          {/**
           * 4.1 Responsive Design
           * When the screen is too narrow, like when viewed on a phone screen, 
           * we need to hide the KanbasNavigation sidebar. We can use Bootstrap 
           * Display Property class d-none to hide the sidebar by default, and 
           * then use d-md-block to show the sidebar when the window reaches 
           * the medium width screen size. Add Bootstrap Display Property as 
           * shown below and confirm the KanbasNavigation sidebar is hidden 
           * when the screen is small and then appears as you widen the screen.
           */}
          <div className="d-none d-md-block">
            <CoursesNavigation />
          </div>
    
          <div className="flex-fill">
            <Routes>
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            </Routes>
          </div>
        </div>
      </div>

  );}





  //i had to add this export line.. why?
export {}

/* Iteration Graveyard:
  - Version 1: Dead because uses table elements, and can replace with div 
    elements and flex..
      <div id="wd-courses">
          <h2>Course 1234</h2>
          <hr />
        <table>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>

            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />

                  <Route path="Modules" element={<Modules />} />
                  <Route path="Assignments" element={<Assignments />} />
                  <Route path="Assignments/:id" element={<AssignmentEditor />} />

              </Routes>
            </td>

          

          </tr>
        </table>
        </div>
    );}

*/
