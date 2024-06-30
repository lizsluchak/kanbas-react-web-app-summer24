import ModulesControls from "./ModuleControls";
import CourseStatus from "../Home/Status";
import ModuleDataTable from "./Module Data Table";
import React, { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database";


export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const [modules, setModules] = useState<any[]>(db.modules);
  const addModule = () => {
    setModules([ ...modules, { _id: new Date().getTime().toString(),
                                     name: moduleName, course: cid, lessons: [] } ]);
    setModuleName("");
  };

  return (
    <div id="wd-modules" className="d-flex">

      <div className="d-flex flex-column flex-fill">
        <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule} />
        <ModuleDataTable modules={modules} />
      </div>

      <div className="d-none d-lg-block m-3">
        <CourseStatus />
      </div>

    </div>




  );
}


