import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaCaretDown } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as db from "../../Database";
import { assignments } from "../../Database";
import { Route, Routes, useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams(); //retrieve courseID
  console.log(cid);
  const aid = assignments.find((assignment) => assignment.course === cid);
  // const assignments = db.assignments; //load in assignment database
  const { pathname } = useLocation();



  return (
    <div id="wd-assignments">
      <AssignmentControls />

      <div id="wd-assignments-list" className="list-group rounded-0">
        <li className="list-group-item p-0 mb-5 fs-5 border-gray" >
          <div className="wd-title p-4 ps-2 list-group-item list-group-item-active" style={{ backgroundColor: "#ffe6e6", color: "#000" }}>
            <a style={{ all: 'unset', cursor: 'pointer' }}>
              <BsGripVertical className="me-2 fs-3" />
              <FaCaretDown />
              <strong> ASSIGNMENTS </strong>
            </a>
            <AssignmentControlButtons />
          </div>


          <ul className="wd-lessons list-group rounded-0" style={{ borderLeft: '10px solid green' }}>
            {db.assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => 
          
                (

                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

                  <div className="wd-title p-3 ps-2">
                    
                    
                  
                    <BsGripVertical className="me-2 fs-3" />
                    <FaFilePen className="text-success me-4 fs-3" />
                    
                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    

                    {assignment._id}: {assignment.title}
                    </Link>

                    <ModuleControlButtons />
                   
                  </div>
                  {assignment.lessons && (
                    <ul className="wd-lessons list-group rounded-0">
                      {assignment.map((lesson: any) => (
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
        </li>
      </div>
    </div>
  );

}











{/* <li className="wd-lesson list-group-item list-group-item-active p-3 ps-1 d-flex flex-row" >
            <div className="d-flex flex-row justify-content-between align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaFilePen className="text-success me-4 fs-3" />
            </div>

            <div className="ms-3 d-flex flex-column flex-fill">
              <a id="wd-assignment-title"
                  href="#/Kanbas/Courses/1234/Assignments/051324"
                  className="m-1"
                  style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                   <h4><strong>A1</strong></h4> </a>
              <div className="d-flex flex-row">
                <p className="m-1 text-danger">Multiple Modules</p>
                <p className="m-1">|</p>
                <p className="m-1"><strong>Not available until</strong></p>
                <p className="m-1">May 6 at 12:00am |</p>
              </div>
              <div className="d-flex flex-row">
                <p className="m-1"><strong>Due</strong></p>
                <p className="m-1">May 13 at 11:59pm | 100 pts</p>
              </div>
            </div>
            <div className="d-flex flex-row ms-auto align-items-center">
              <LessonControlButtons />
            </div>
          </li>

          <li className="wd-lesson list-group-item list-group-item-active p-3 ps-1 d-flex flex-row">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaFilePen className="text-success me-4 fs-3" />
            </div>

            <div className="ms-3 d-flex flex-column flex-fill">
            <a id="wd-assignment-title"
                  href="#/Kanbas/Courses/1234/Assignments/052024"
                  className="m-1"
                  style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                   <h4><strong>A2</strong></h4> </a>
              <div className="d-flex flex-row">
                <p className="m-1 text-danger">Multiple Modules</p>
                <p className="m-1">|</p>
                <p className="m-1"><strong>Not available until</strong></p>
                <p className="m-1">May 13 at 12:00am |</p>
              </div>
              <div className="d-flex flex-row">
                <p className="m-1"><strong>Due</strong></p>
                <p className="m-1">May 20 at 11:59pm | 100 pts</p>
              </div>
            </div>
            <div className="d-flex flex-row ms-auto align-items-center">
              <LessonControlButtons />
            </div>
          </li>

          <li className="wd-lesson list-group-item list-group-item-active p-3 ps-1 d-flex flex-row">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaFilePen className="text-success me-4 fs-3" />
            </div>

            <div className="ms-3 d-flex flex-column flex-fill">
            <a id="wd-assignment-title"
                  href="#/Kanbas/Courses/1234/Assignments/052724"
                  className="m-1"
                  style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                   <h4><strong>A3</strong></h4> </a>
              <div className="d-flex flex-row">
                <p className="m-1 text-danger">Multiple Modules</p>
                <p className="m-1">|</p>
                <p className="m-1"><strong>Not available until</strong></p>
                <p className="m-1">May 20 at 12:00am |</p>
              </div>
              <div className="d-flex flex-row">
                <p className="m-1"><strong>Due</strong></p>
                <p className="m-1">May 27 at 11:59pm | 100 pts</p>
              </div>
            </div>
            <div className="d-flex flex-row ms-auto align-items-center">
              <LessonControlButtons />
            </div>
          </li>
        </ul>
      </li>
    </div>
  </div>
);
} */}
