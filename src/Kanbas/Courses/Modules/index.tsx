
import { Route, Routes, useParams, useLocation} from "react-router"; //took off 
// import { * } from "../../Database/courses.json";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";


export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules; 
  console.log("Course ID:", cid);
  console.log("hello")

  // const course = db.find((c) => course._id === cid);
  
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <ul id="wd-modules" className="list-group rounded-0">
      {modules
        .filter((module: any) => module.course === cid)
        .map((module: any) => (
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            {module.name}
            <ModuleControlButtons />
          </div>
          {module.lessons && (
            <ul className="wd-lessons list-group rounded-0">
              {module.lessons.map((lesson: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  {lesson.name}
                  <LessonControlButtons />
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
);
}




// return (
//   <div id="wd-modules" className="d-flex">


//     <div className="d-flex flex-column flex-fill">

//       <ModulesControls />
//       <ModuleDataTable />
//     </div>

//     <div className="d-none d-lg-block m-3">
//       <CourseStatus />
//     </div>

//   </div>




// );