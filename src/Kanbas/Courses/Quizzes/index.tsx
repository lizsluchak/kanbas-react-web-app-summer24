import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as client from "./client";
import { setQuizzes } from "./reducer";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaCaretDown, FaTrash, FaRocket } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import GreenCheckmark from "../Modules/GreenCheckmark";
import "./QuizEditorTabs.css";

export default function Quizzes() {
    const { cid } = useParams(); // Retrieve courseID
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const currentDate = new Date();


    // State for managing which quiz's context menu is open
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    // State for managing published status of quizzes
    const [publishedStatus, setPublishedStatus] = useState<{ [key: string]: boolean }>({});

    // State for managing modal visibility and selected quiz for deletion
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);

    const fetchQuizzesHandler = async () => {
        const quizzes = await client.findQuizzesByCourse_cROUTE(cid as string);
        dispatch(setQuizzes(quizzes));

        // Initialize published status for each quiz
        const status = quizzes.reduce((acc: any, quiz: any) => {
            acc[quiz._id] = quiz.isPublished || false; // Assuming quizzes have an isPublished property
            return acc;
        }, {});
        setPublishedStatus(status);
    };

    useEffect(() => {
        fetchQuizzesHandler();
    }, [cid]);

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
            fetchQuizzesHandler(); // Refresh quizzes list
            setShowModal(false); // Close modal after deletion
        }
    };

    const confirmDelete = (quizId: string) => {
        setSelectedQuizId(quizId);
        setShowModal(true);
    };

    const handlePublish = (quizId: string) => {
        setPublishedStatus((prevStatus) => ({
            ...prevStatus,
            [quizId]: !prevStatus[quizId],
        }));
    };

    const handleCopy = (quizId: string) => {
        // Implement copying logic here
        console.log(`Copy quiz ${quizId}`);
    };

    const handleSort = (criteria: string) => {
        // Implement sorting logic here
        console.log(`Sort quizzes by ${criteria}`);
    };

    return (
        <div>
            <div id="wd-quizzes">
                <ul id="wd-quizzes-list" className="list-group rounded-0">
                    <li className="list-group-item p-0 mb-5 fs-5 border-light-grey">
                        {/** Quiz List Header -------------------------------------*/}
                        <div
                            className="wd-title p-4 ps-2 list-group-item list-group-item-active"
                            style={{ backgroundColor: "#F5F5F5", color: "#000" }}
                        >
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
                                                <GreenCheckmark />
                                                <IoEllipsisVertical
                                                    className="fs-4"
                                                    onClick={() => toggleMenu(quiz._id)}
                                                    style={{ cursor: "pointer" }}
                                                />
                                                {openMenu === quiz._id && (
                                                    <div className="context-menu" style={{ position: "relative" }}>
                                                        <ul style={{ position: "absolute", right: 0 }}>
                                                            {/* <li onClick={() => handleEdit(quiz._id)}>Edit</li> */}
                                                            <li onClick={() => confirmDelete(quiz._id)}>Delete</li>
                                                            <li onClick={() => handlePublish(quiz._id)}>
                                                                {publishedStatus[quiz._id] ? "Unpublish" : "Publish"}
                                                            </li>
                                                            <li onClick={() => handleCopy(quiz._id)}>Copy</li>
                                                            <li onClick={() => handleSort("name")}>Sort by Name</li>
                                                            <li onClick={() => handleSort("dueDate")}>Sort by Due Date</li>
                                                            <li onClick={() => handleSort("availableDate")}>
                                                                Sort by Available Date
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            {currentUser.role === "FACULTY" && <div>FACULTY!</div>}

            {currentUser.role === "STUDENT" && <div>STUDENT!</div>}

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
    );
}
