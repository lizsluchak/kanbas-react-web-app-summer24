import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../ModuleControlButtons";
import LessonControlButtons from "../ModuleControlButtons";
import { useParams, useLocation } from "react-router";
import { modules } from "../../../Database";


export default function ModuleDataTable() {
  const { cid } = useParams(); //capture parameter -> courseId
  return (
    
    <div className="flex-fill">

      <ul id="wd-modules" className="d-flex list-group rounded-0" >
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (

            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

              <div className="wd-title p-3 ps-3 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModuleControlButtons />
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

  );
}