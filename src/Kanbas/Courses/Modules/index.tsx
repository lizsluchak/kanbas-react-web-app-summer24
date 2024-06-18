import ModulesControls from "./ModuleControls";
import CourseStatus from "../Home/Status";
import ModuleDataTable from "./Module Data Table";
import { Route, Routes, useParams, useLocation} from "react-router"; //took off 
// import { * } from "../../Database/courses.json";
import * as db from "../../Database";


export default function Modules() {
  const { cid } = useParams();
  console.log("Course ID:", cid);
  console.log("hello")

  // const course = db.find((c) => course._id === cid);
  
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div id="wd-modules" className="d-flex">


      <div className="d-flex flex-column flex-fill">
  
        <ModulesControls />
        <ModuleDataTable />
      </div>

      <div className="d-none d-lg-block m-3">
        <CourseStatus />
      </div>

    </div>




  );
}
