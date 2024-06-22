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
import AssignmentDataTable from "./AssignmentTable";

export default function Assignments() {
  const { cid } = useParams(); //retrieve courseID
  // console.log(cid);
  // const assignment = assignments.find((assignment) => assignment.course === cid);
  // const assignments = db.assignments; //load in assignment database
  // const { pathname } = useLocation();



  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <AssignmentDataTable />
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
