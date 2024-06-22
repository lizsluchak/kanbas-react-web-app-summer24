import ModulesControls from "./ModuleControls";
import CourseStatus from "../Home/Status";
import ModuleDataTable from "./Module Data Table";


export default function Modules() {
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


