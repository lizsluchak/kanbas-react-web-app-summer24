import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import * as client from "./client";
import { addQuiz, setQuizzes, updateQuiz, deleteQuiz } from "./reducer";
import { BsGripVertical, BsPlus, BsSlashCircle } from "react-icons/bs";
import { FaCaretDown, FaTrash, FaRocket, FaSlash, FaStopCircle, FaBan } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCircleHalfStroke, FaFilePen, FaPencil, FaRegCircleStop } from "react-icons/fa6";
import { Link } from "react-router-dom";
import GreenCheckmark from "../Modules/GreenCheckmark";
import "../Quizzes/QuizEditor/QuizEditorTabs.css";
import axios from 'axios';

export default function Quizzes() {
    //tools
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //fetch params
    const { cid, qid } = useParams();

    //redux state variables
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    //quiz variables
    const currentDate = new Date();

    // local state variables 
    const [openMenu, setOpenMenu] = useState<string | null>(null); //for managing which quiz's context menu is open
    const [showModal, setShowModal] = useState<boolean>(false);     // State for managing modal visibility and selected quiz for deletion
    const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);

    const fetchQuizzesHandler = async () => {
        const quizzes = await client.findQuizzesByCourse_cROUTE(cid as string);
        dispatch(setQuizzes(quizzes));

    };

    useEffect(() => {
        fetchQuizzesHandler();

    }, []);



    const getAvailabilityStatusHandler = (availableDate: Date, availableUntilDate: Date) => {
        if (currentDate < availableDate) {
            return `Not available until ${availableDate}`;
        } else if (currentDate > availableUntilDate) {
            return "Closed";
        } else {
            return "Available";
        }
    };

    const toggleMenu = (quizId: string) => {
        setOpenMenu(openMenu === quizId ? null : quizId);
    };

    // const handleEdit = (quizId: string) => {
    //     history.push(`/Kanbas/Courses/${cid}/Quizzes/QuizEditor/${quizId}`);
    // };

    const handleDelete = async () => {
        if (selectedQuizId) {
            await client.deleteQuiz_cROUTE(selectedQuizId); // Assuming this function exists
            dispatch(deleteQuiz(selectedQuizId)); 
            fetchQuizzesHandler(); // Refresh quizzes list
            setShowModal(false); // Close modal after deletion

        }
    };

    const confirmDelete = (quizId: string) => {
        setSelectedQuizId(quizId);
        setShowModal(true);
    };



    const handleCopy = (quizId: string) => {
        // Implement copying logic here
        console.log(`Copy quiz ${quizId}`);
    };

    const handleSort = (criteria: string) => {
        // Implement sorting logic here
        console.log(`Sort quizzes by ${criteria}`);
    };

    const handleDeleteQuiz = async (quizId: string) => {
        const response = await client.deleteQuiz_cROUTE(quizId);
        fetchQuizzesHandler();
        return response.data;
    };

    const handlePublishStatus = async (quiz: any) => {
        // Create a shallow copy of the quiz object
        const updatedQuiz = { ...quiz };
    
        // Toggle the published status
        if (updatedQuiz.published === "No") {
            updatedQuiz.published = "Yes";
        } else if (updatedQuiz.published === "Yes") {
            updatedQuiz.published = "No";
        }
    
        // Send the updated quiz object to the server
        const response = await client.updateQuiz_cROUTE(updatedQuiz);
        
        // Refresh the list of quizzes
        fetchQuizzesHandler();
        
        return response.data;
    };





    return (
        <div>
            {currentUser.role === "FACULTY" && (
                <div id="wd-quizzes">
                    <ul id="wd-quizzes-list" className="list-group rounded-0">
                        <li className="list-group-item p-0 mb-5 fs-5 border-light-grey">
                            {/** Quiz List Header -------------------------------------*/}
                            <div
                                className="wd-title p-4 ps-2 list-group-item list-group-item-active"
                                style={{ backgroundColor: "#F5F5F5", color: "#000" }}>
                                <button className="p-2" style={{ all: "unset", cursor: "pointer" }}>
                                    <FaCaretDown />
                                    <strong> Your Created Quizzes for {cid} </strong>
                                </button>
                                <button className="p-2 float-end btn btn-md btn-danger" style={{ cursor: "pointer" }}
                                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/QuizEditor/New`)}>
                                    + Quiz
                                </button>
                            </div>

                            {/** Dynamically Rendered Quiz List ------------------------*/}
                            <div>
                                <ul
                                    id="wd-quizzes"
                                    className="list-group rounded-0 p-0 m-0"
                                    style={{ borderLeft: "10px solid green" }}
                                >
                                    {quizzes
                                        .filter((quiz: any) => quiz.course === cid)
                                        .map((quiz: any) => (
                                            <li key={quiz._id} className="wd-module list-group-item border-light-gray">
                                                <div className="wd-title p-3 ps-2 d-flex align-items-center">
                                                    <div className="d-flex align-items-center me-3">
                                                        <FaRocket className="text-success me-2 fs-3" />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <div className="flex-column">
                                                            <Link
                                                                to={`/Kanbas/Courses/${cid}/Quizzes/QuizEditor/${quiz._id}`}
                                                                className="custom-link"
                                                            >
                                                                <h4 className="fw-bold">{quiz.title}</h4>
                                                            </Link>

                                                            <p>
                                                                <span style={{ fontWeight: 550, color: "darkred" }}>
                                                                    {getAvailabilityStatusHandler(
                                                                        quiz.availableDate,
                                                                        quiz.availableUntilDate
                                                                    )}
                                                                </span>{" "}
                                                                |<span style={{ fontWeight: 550 }}> Due </span>
                                                                {quiz.dueDate ? quiz.dueDate : " n/a "} at{" "}
                                                                {quiz.dueTime ? quiz.dueTime : " -- "} |{" "}
                                                                {quiz.points ? quiz.points + " pts" : " n/a "} |
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/** End Row Buttons for each Assignment */}
                                                    {quiz.published === "No" && (
                                                        <FaBan className="me-3 text-danger" />
                                                    )}{
                                                        quiz.published === "Yes" && (
                                                            <GreenCheckmark />
                                                        )
                                                    }




                                                    <div className="dropdown show d-inline float-end">
                                                        <a id="wd-publish-all-btn" className="dropdown btn"
                                                            type="button" data-bs-toggle="dropdown">
                                                            <IoEllipsisVertical
                                                                className="fs-3"
                                                            // onClick={() => toggleMenu(quiz._id)}
                                                            // style={{ cursor: "pointer" }}
                                                            />

                                                        </a>

                                                        <div className="dropdown-menu">

                                                            <Link to={`/Kanbas/Courses/${cid}/Quizzes/QuizEditor/${quiz._id}`} className="dropdown-item m-2" >
                                                                <FaPencil className="me-3" />

                                                                <strong>EDIT: {quiz.title}</strong></Link>


                                                            <a id="wd-publish-modules-only-button" className="dropdown-item m-2" onClick={() => handleDeleteQuiz(quiz._id)}>
                                                                <FaTrash className="me-3" />
                                                                <strong>DELETE: {quiz.title}</strong>
                                                            </a>

                                                            {/* Create two more items with IDs wd-unpublish-all-modules-and-items and
              wd-unpublish-modules-only with labels Unpublish all modules and items
              and Unpublish modules only */}

                                                            <a id="wd-unpublish-modules-and-items" className="dropdown-item" onClick={() => handlePublishStatus(quiz)}>

                                                                {quiz.published === "No" && (
                                                                    <div>
                                                                        <GreenCheckmark />
                                                                        <strong>PUBLISH: {quiz.title}</strong>

                                                                    </div>

                                                                )} {quiz.published == "Yes" && (

                                                                    <div>

                                                                        <FaBan className="me-3 text-danger" />
                                                                        <strong>UNPUBLISH: {quiz.title}</strong>

                                                                    </div>
                                                                )}


                                                            </a>





                                                        </div>
                                                    </div>
















                                                </div>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </li>
                    </ul>

                </div>
            )} {currentUser.role === "STUDENT" && (
                <div>
                    <div id="wd-quizzes">
                        <ul id="wd-quizzes-list" className="list-group rounded-0">
                            <li className="list-group-item p-0 mb-5 fs-5 border-light-grey">
                                {/** Quiz List Header -------------------------------------*/}
                                <div
                                    className="wd-title p-4 ps-2 list-group-item list-group-item-active"
                                    style={{ backgroundColor: "#F5F5F5", color: "#000" }}>
                                    <button className="p-2" style={{ all: "unset", cursor: "pointer" }}>
                                        <FaCaretDown />
                                        <strong> Assignment Quizzes </strong>
                                    </button>

                                </div>

                                {/** Dynamically Rendered Quiz List ------------------------*/}
                                <div>
                                    <ul
                                        id="wd-quizzes"
                                        className="list-group rounded-0 p-0 m-0"
                                        style={{ borderLeft: "10px solid green" }}
                                    >
                                        {quizzes
                                            .filter((quiz: any) => quiz.course === cid && quiz.published === "Yes")
                                            .map((quiz: any) => (
                                                <li key={quiz._id} className="wd-module list-group-item border-light-gray">
                                                    <div className="wd-title p-3 ps-2 d-flex align-items-center">
                                                        <div className="d-flex align-items-center me-3">
                                                            <FaRocket className="text-success me-2 fs-3" />
                                                        </div>

                                                        <div className="flex-grow-1">
                                                            <div className="flex-column">
                                                                <Link
                                                                    to={`/Kanbas/Courses/${cid}/Quizzes/QuizEditor/${quiz._id}`}
                                                                    className="custom-link"
                                                                >
                                                                    <h4 className="fw-bold">{quiz.title}</h4>
                                                                </Link>

                                                                <p>
                                                                    <span style={{ fontWeight: 550, color: "darkred" }}>
                                                                        {getAvailabilityStatusHandler(
                                                                            quiz.availableDate,
                                                                            quiz.availableUntilDate
                                                                        )}
                                                                    </span>{" "}
                                                                    |<span style={{ fontWeight: 550 }}> Due </span>
                                                                    {quiz.dueDate ? quiz.dueDate : " n/a "} at{" "}
                                                                    {quiz.dueTime ? quiz.dueTime : " -- "} |{" "}
                                                                    {quiz.points ? quiz.points + " pts" : " n/a "} |
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/** End Row Buttons for each Assignment */}
                                                        <GreenCheckmark />
                                                        <IoEllipsisVertical
                                                            className="fs-4"
                                                            onClick={() => toggleMenu(quiz._id)}
                                                            style={{ cursor: "pointer" }}
                                                        />

                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        {/* Modal for confirming deletion */}
                        {showModal && (
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close" onClick={() => setShowModal(false)} style={{ cursor: "pointer" }}>
                                        &times;
                                    </span>
                                    <p>Are you sure you want to delete this quiz?</p>
                                    <button onClick={handleDelete}>Yes, Delete</button>
                                    <button onClick={() => setShowModal(false)}>Cancel</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>











            )}


        </div>
    );
}
