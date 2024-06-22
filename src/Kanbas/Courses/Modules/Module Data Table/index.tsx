import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../ModuleControlButtons";
import LessonControlButtons from "../ModuleControlButtons";
import { useParams, useLocation} from "react-router";
import { modules } from "../../../Database";


export default function ModuleDataTable() {
  const { cid } = useParams(); //capture parameter -> courseId
    return(<div className="flex-fill">
  {/* <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        Week 1
        <ModuleControlButtons />
      </div>
      <ul className="wd-lessons list-group rounded-0" style={{ borderLeft: '10px solid green' }}>
        <li className="wd-lesson list-group-item p-3 ps-1 d-flex flex-row" >
        <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES
          <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Introduction to the course
          <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          Learn what is Web Development
          <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          LESSON 1
          <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          LESSON 2
          <LessonControlButtons />
        </li>
      </ul>
    </li>

    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" />
        Week 2
        <ModuleControlButtons />
      </div>
      <ul className="wd-lessons list-group rounded-0" style={{ borderLeft: '10px solid green' }}>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES
          <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          LESSON 1
          <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          LESSON 2
          <LessonControlButtons />
        </li>
      </ul>
    </li>
  </ul>
  </div> */}

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