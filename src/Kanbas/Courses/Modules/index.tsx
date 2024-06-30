import ModulesControls from "./ModuleControls";
import CourseStatus from "../Home/Status";

import React, { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";


export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const [modules, setModules] = useState<any[]>(db.modules);


  //add module function
  const addModule = () => {
    setModules([...modules, {
      _id: new Date().getTime().toString(),
      name: moduleName, course: cid, lessons: []
    }]);
    setModuleName("");
  };

  //delete modules function
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };


  return (
    <div id="wd-modules" className="d-flex">

      <div className="d-flex flex-column flex-fill">
        <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule} />


        <div className="flex-fill">
          <ul id="wd-modules" className="d-flex list-group rounded-0" >
            {modules
              .filter((module: any) => module.course === cid)
              .map((module: any) => (

                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

                  <div className="wd-title p-3 ps-3 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    {module.name}

                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={deleteModule} />

                  </div>

                  <div style={{ borderLeft: '10px solid green' }}>
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
                  </div>

                </li>

              ))}

          </ul>
        </div>
      </div>

      <div className="d-none d-lg-block m-3">
        <CourseStatus />
      </div>

    </div>




  );
}


