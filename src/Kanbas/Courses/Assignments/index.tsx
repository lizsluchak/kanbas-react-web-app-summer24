//external
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

//internal files/components
import AssignmentListControls from "./AssignmentListControls";
import "./styles.css"

//icons
import { FaCaretDown, FaTrash } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deleteAssignment } from "./reducer";
import DeleteAssignmentButton from "./DeleteAssignmentButton";



/**
 * Root Assignment Screen Component:
 * 
 * 
 * @returns Assignment list for selected course
 */
export default function Assignments() {
  const { cid } = useParams(); //retrieve courseID
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const dispatch = useDispatch();

  const handleDeleteAssignment = (assignment: any) => {
    const remove = window.confirm(`Delete assignment ${assignment.title}?`)
    if (remove) {
      dispatch(deleteAssignment(assignment._id));
    }
  }

  return (
    <div id="wd-assignments">
      <AssignmentListControls assignmentName="A101" assignmentId="24" />


      <div id="wd-assignments">
        <ul id="wd-assignments-list" className="list-group rounded-0">
          <li className="list-group-item p-0 mb-5 fs-5 border-light-grey">

            {/** Assignment List Header -------------------------------------*/}
            <div className="wd-title p-4 ps-2 list-group-item list-group-item-active" style={{ backgroundColor: "#F5F5F5", color: "#000" }}>
              <button className="p-2" style={{ all: 'unset', cursor: 'pointer' }}>
                <BsGripVertical className="me-2 fs-3" />
                <FaCaretDown />
                <strong> ASSIGNMENTS </strong>
              </button>
              <div className="float-end">
                <button className="btn btn-md rounded-5 me-4" style={{ borderColor: '#adb5bd' }}>40% of Total</button>
                <BsPlus className="me-3" />
                <IoEllipsisVertical />
              </div>
            </div>

            {/** Dyamically Rendered Assignment List ------------------------*/}
            <div>
              <ul id="wd-modules" className="list-group rounded-0 p-0 m-0" style={{ borderLeft: '10px solid green' }}>
                {/* pull assignments from redux state managment*/}
                {assignments
                  .filter((assignment: any) => assignment.course === cid)
                  .map((assignment: any) => (
                    <li key={assignment._id} className="wd-module list-group-item border-light-gray">
                      <div className="wd-title p-3 ps-2 d-flex align-items-center">

                        <div className="d-flex align-items-center me-3">
                          <BsGripVertical className="me-2 fs-3" />
                          <FaFilePen className="text-success me-2 fs-3" />
                        </div>

                        <div className="flex-grow-1">
                          <div className="flex-column">

                            <Link to={`/Kanbas/Courses/${cid}/Assignments/AssignmentEditor/${assignment._id}`}
                              className="custom-link">
                              <h4 className="fw-bold">{assignment.title}</h4>
                            </Link>

                            <p><span style={{ fontWeight: 550, color: 'darkred' }}>Multiple Modules</span> |
                              <span style={{ fontWeight: 550 }}> Not avaiable until </span>
                              {assignment.availableDate ? assignment.availableDate : " n/a "}
                              at {assignment.availableTime ? assignment.availableTime : " -- "} |
                              <span style={{ fontWeight: 550 }}> Due </span>
                              {assignment.dueDate ? assignment.dueDate : " n/a "}
                              at {assignment.dueTime ? assignment.dueTime : " -- "} | {assignment.points ? assignment.points + " pts" : " n/a "}
                            </p>
                          </div>



                        </div>
                        {/** End Row Buttons for each Assignment------a word*/}
                        <FaTrash className="text-danger me-3 mb-1" onClick={() => handleDeleteAssignment(assignment)} />
                   
                        <GreenCheckmark />
                        <IoEllipsisVertical className="fs-4" />


                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>



    </div>
  );

}









