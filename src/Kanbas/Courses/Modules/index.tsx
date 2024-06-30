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
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");

  /**
   * Add Module Function
   */
  const addModule = () => {
    setModules([...modules, {
      _id: new Date().getTime().toString(),
      name: moduleName, course: cid, lessons: []
    }]);
    setModuleName("");
  };

  /**
   * Delete Module Function  
   * @param moduleId 
   */
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };

  /**
   * Edit Module Function
   * Set module's editing flag to true so that we can display the input field
   * to edit's name
   * @param moduleId 
   */
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };

  /**
   * Update Module Function
   * Update any fields of a module
   * @param module 
   */
  const updateModule = (module: any) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
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
                    {!module.editing && module.name}
                    {module.editing && (
                      <input className="form-control w-50 d-inline-block"
                        onChange={(e) => updateModule({ ...module, name: e.target.value })}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            updateModule({ ...module, editing: false });
                          }
                        }}
                        value={module.name} />
                    )}

                    

                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={deleteModule}
                      editModule={editModule} />

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


