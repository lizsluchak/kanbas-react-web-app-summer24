import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons"
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (

      <div id="wd-assignments">
        
        <div id="wd-assignment-controls-bar">
          
          <div>
            <AssignmentControls />
          </div>

          
          <div className="bg-info">

            <ul id="wd-assignments" className="list-group rounded-0">
    
    
              <li className="list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-red">
                  <BsGripVertical className="me-2 fs-3" />
                  Week 1
                  <ModuleControlButtons />
                </div>
                <ul className="wd-lessons list-group rounded-0">
                  <li className="wd-lesson list-group-item p-3 ps-1">
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
                <ul className="wd-lessons list-group rounded-0">
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
            
            
            <h3 id="wd-assignments-title">
              ASSIGNMENTS 40% of Total <button>+</button>
            </h3>

            <ul id="wd-assignment-list">
              <li className="wd-assignment-list-item">
                <a className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A1 - ENV + HTML
                  </a>
                  <div>Multiple Modules | <b>Not available until </b> May 6 at 12:00am |</div>
                  <div><b>Due </b>May 13 at 11:59pm | 100 pts</div>
            </li>

            <li className="wd-assignment-list-item">
              {/* Complete On Your Own */}
              <a className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A2 - CSS + BOOTSTRAP
                  </a>
                  <div>Multiple Modules | <b>Not available until </b> May 13 at 12:00am |</div>
                  <div><b>Due </b>May 20 at 11:59pm | 100 pts</div>
            </li>

            <li className="wd-assignment-list-item">
              {/* Complete On Your Own */}
              <a className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A3 - JAVASCRIPT + REACT
                  </a>
                  <div>Multiple Modules | <b>Not available until </b> May 20 at 12:00am |</div>
                  <div><b>Due </b>May 27 at 11:59pm | 100 pts</div>
            </li>
            </ul>

          </div>


          </div>
          </div>

        

);

}
