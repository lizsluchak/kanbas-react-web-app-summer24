import { BsGripVertical } from "react-icons/bs";

import { useParams } from "react-router";

import AssignmentControlButtons from "../AssignmentControlButtons";
import { FaCaretDown } from "react-icons/fa";

import * as db from "../../../Database";
import { FaFilePen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./styles.css"


export default function AssignmentDataTable() {
    const { cid } = useParams(); //capture parameter -> courseId
    return (
        <div id="wd-assignments">
                <ul id="wd-assignments-list" className="list-group rounded-0">
                    <li className="list-group-item p-0 mb-5 fs-5 border-light-grey">
                        {/** Table Header */}
                        <div className="wd-title p-4 ps-2 list-group-item list-group-item-active" style={{ backgroundColor: "#F5F5F5", color: "#000" }}>
                            <button className="p-2" style={{ all: 'unset', cursor: 'pointer' }}>
                                <BsGripVertical className="me-2 fs-3" />
                                <FaCaretDown />
                                <strong> ASSIGNMENTS </strong>
                            </button>
                            <AssignmentControlButtons />
                        </div>

                        <div>
                            <ul id="wd-modules" className="list-group rounded-0 p-0 m-0" style={{ borderLeft: '10px solid green' }}>
                                {db.assignments
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
                                                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                                    className="custom-link">
                                                        <h4 className="fw-bold">{assignment._id}: {assignment.title}</h4>
                                                    </Link>
                                                    <p></p>
                                                    <p><span style={{ fontWeight: 550, color: 'darkred' }}>Multiple Modules</span> |  
                                                    <span style={{ fontWeight: 550 }}> Not avaiable until </span>
                                                    {assignment.availableDate ? assignment.availableDate: " n/a "} 
                                                    at {assignment.availableTime ? assignment.availableTime: " -- "} | 
                                                    <span style={{ fontWeight: 550 }}> Due </span> 
                                                    {assignment.dueDate ? assignment.dueDate: " n/a "} 
                                                     at {assignment.dueTime ? assignment.dueTime: " -- "} | {assignment.points ? assignment.points + " pts": " n/a "}
                                                    </p>
        
                                                    </div>
                                                    
                                                    
                                                </div>
                                                {/* <div className="d-flex align-items-center">
                                                    <ModuleControlButtons
                                                    moduleId={module._id}
                                                    deleteModule={deleteModule}/>
                                            
                                                </div> */}
                                              
                                            </div>
                                            </li>
                                    ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
 
    );
}