import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as client from "./client"; 
import { setQuizzes } from "./reducer";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaCaretDown, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import GreenCheckmark from "../Modules/GreenCheckmark";


export default function Quizzes() {
    const { cid } = useParams(); //retrieve courseID
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);



    const fetchQuizzes_eHANDLER = async () => {
        const quizzes = await client.findQuizzesByCourse_cROUTE(cid as string);
        dispatch(setQuizzes(quizzes));
      };
      useEffect(() => {
        fetchQuizzes_eHANDLER();
      }, []);

    return (
        <div>

<div id="wd-quizzes">
      {/* <AssignmentListControls assignmentName="A101" assignmentId="24" /> */}


      <div id="wd-quizzes">
        <ul id="wd-quizzes-list" className="list-group rounded-0">
          <li className="list-group-item p-0 mb-5 fs-5 border-light-grey">

            {/** Quiz List Header -------------------------------------*/}
            <div className="wd-title p-4 ps-2 list-group-item list-group-item-active" style={{ backgroundColor: "#F5F5F5", color: "#000" }}>
              <button className="p-2" style={{ all: 'unset', cursor: 'pointer' }}>
                <BsGripVertical className="me-2 fs-3" />
                <FaCaretDown />
                <strong> QUIZZES </strong>
              </button>
              <div className="float-end">
                <button className="btn btn-md rounded-5 me-4" style={{ borderColor: '#adb5bd' }}>40% of Total</button>
                <BsPlus className="me-3" />
                <IoEllipsisVertical />
              </div>
            </div>

            {/** Dyamically Rendered Quiz List ------------------------*/}
            <div>
              <ul id="wd-modules" className="list-group rounded-0 p-0 m-0" style={{ borderLeft: '10px solid green' }}>
                {/* pull assignments from redux state managment*/}
                {quizzes
                  .filter((quiz: any) => quiz.course === cid)
                  .map((quiz: any) => (
                    <li key={quiz._id} className="wd-module list-group-item border-light-gray">
                      <div className="wd-title p-3 ps-2 d-flex align-items-center">

                        <div className="d-flex align-items-center me-3">
                          <BsGripVertical className="me-2 fs-3" />
                          <FaFilePen className="text-success me-2 fs-3" />
                        </div>

                        <div className="flex-grow-1">
                          <div className="flex-column">

                            <Link to={`/Kanbas/Courses/${cid}/Quizzes/QuizEditor/${quiz._id}`}
                              className="custom-link">
                              <h4 className="fw-bold">{quiz.title}</h4>
                            </Link>

                            <p><span style={{ fontWeight: 550, color: 'darkred' }}>Multiple Modules</span> |
                              <span style={{ fontWeight: 550 }}> Not avaiable until </span>
                              {quiz.availableDate ? quiz.availableDate : " n/a "}
                              at {quiz.availableTime ? quiz.availableTime : " -- "} |
                              <span style={{ fontWeight: 550 }}> Due </span>
                              {quiz.dueDate ? quiz.dueDate : " n/a "}
                              at {quiz.dueTime ? quiz.dueTime : " -- "} | {quiz.points ? quiz.points + " pts" : " n/a "}
                            </p>
                          </div>



                        </div>
                        {/** End Row Buttons for each Assignment------a word*/}
                        <FaTrash />
                   
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

            <div>
                {currentUser.role === "FACULTY" && (
                    <div>
                        FACULTY!

                    </div>


                )}
            </div>

            <div>
                {currentUser.role === "STUDENT" && (
                    <div>
                        STUDENT!

                    </div>


                )}
            </div>






        </div>





    );
}