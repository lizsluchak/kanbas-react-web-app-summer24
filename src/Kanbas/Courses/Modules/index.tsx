import ModulesControls from "./ModuleControls";
import CourseStatus from "../Home/Status";
import React, { useState } from "react";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";


export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer); // retrieve modules state variables
  const dispatch = useDispatch(); // get dispatch to call reducer functions

  return (
    <div id="wd-modules" className="d-flex">

      <div className="d-flex flex-column flex-fill">
        <ModulesControls setModuleName={setModuleName} moduleName={moduleName}
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }}

        />


        <div className="flex-fill">
          <ul id="wd-modules" className="d-flex list-group rounded-0" >
            {modules
              .filter((module: any) => module.course === cid)
              .map((module: any) => (

                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

                  <div className="wd-title p-3 ps-3 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />

                    {/** instead of showing name all the time, use conditional logic to regulate:
                     * if editing module name == false -> render module name
                     * if editing module name == true bc clicked edit pencil -> show module name in textbox
                     */}
                    {!module.editing && module.name}
                    {module.editing && (
                      <input className="form-control w-50 d-inline-block"

                        onChange={(e) => // on change in textbox, update module
                          dispatch(updateModule({ ...module, name: e.target.value }))}

                        onKeyDown={(e) => { // on enter key, eiting field is set to false to hide input field
                          if (e.key === "Enter") {
                            dispatch(updateModule({ ...module, editing: false }));
                          }
                        }}

                        value={module.name} />
                    )}



                    <ModuleControlButtons 
                      moduleId={module._id}
                      deleteModule={(moduleId) => {
                        // wrap reducer functions with dispatch
                        dispatch(deleteModule(moduleId));
                      }}
                      // wrap reducer functions with dispatch
                      editModule={(moduleId) => dispatch(editModule(moduleId))}
                    />

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


