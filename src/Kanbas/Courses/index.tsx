import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Route, Routes, useParams, useLocation} from "react-router"; //took off Navigate
import { FaAlignJustify } from "react-icons/fa6";
import Quizzes from "./Quizzes";
import Grades from "./Grades";
import { courses } from "../Database";
// import { Link } from "react-router-dom";


export default function Courses() {
  const { cid } = useParams();
  console.log("Course ID:", cid);
  console.log("hello")
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1"/>
        {/**name of course disapears */}
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
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
      
            <div className="flex-fill p-4">
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="Quizzes" element={<Quizzes />} />
                <Route path="Grades" element={<Grades />} />
              </Routes>
            </div>
        </div>
     
    </div>
  );
}








// export default function Courses() {
//     return (
//       <div id="wd-courses">
//         {/**ClassName="text-danger" makes header red; then we add icon via
//          * FaAlignJustify + ClassName="padding classes"; some padding for 
//          * the icon*/}
//         <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" /> 
//           Course 1234</h2>
//         <hr />

//         <div className="d-flex">
//           {/**
//            * 4.1 Responsive Design
//            * When the screen is too narrow, like when viewed on a phone screen, 
//            * we need to hide the KanbasNavigation sidebar. We can use Bootstrap 
//            * Display Property class d-none to hide the sidebar by default, and 
//            * then use d-md-block to show the sidebar when the window reaches 
//            * the medium width screen size. Add Bootstrap Display Property as 
//            * shown below and confirm the KanbasNavigation sidebar is hidden 
//            * when the screen is small and then appears as you widen the screen.
//            */}
//             <div className="d-none d-md-block">
//               <CoursesNavigation />
//             </div>
      
//             <div className="flex-fill p-4">
//               <Routes>
//                 <Route path="Home" element={<Home />} />
//                 <Route path="Modules" element={<Modules />} />
//                 <Route path="Assignments" element={<Assignments />} />
//                 <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//                 <Route path="Quizzes" element={<Quizzes />} />
//                 <Route path="Grades" element={<Grades />} />
//               </Routes>
//             </div>
//         </div>
//       </div>
//     );
// }




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
