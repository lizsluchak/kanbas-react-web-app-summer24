import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "../styles.css";
import * as client from "../client";
import { addQuiz, updateQuiz } from "../reducer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import { FaBan, FaEdit } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "../../Modules/GreenCheckmark";
import QuestionsEditor from "./QuestionsEditor";

export default function QuizEditor() {
    //fetch params
    const { qid, cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //fetch quizzes from redux
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    //create quiz useState Hook: add state to functional component
    const [quiz, setQuiz] = useState<any>({                           //initalize object state variable, assignment, with type `any`
        qid: `${qid}`,
        title: `New Quiz for Course ${cid}`,
        course: `${cid}`,
        description: "New Description",
        points: "",
        assignTo: "Everyone",
        assignmentGroup: "QUIZZES",
        quizType: "Graded Quiz",
        shuffleAnwsers: "Yes",
        timeLimit: "20 Minutes",
        multipleAttemps: "1",
        showCorrectAnwsers: "No",
        accessCode: "",
        oneQuestionAtATime: "Yes",
        webcamRequired: "No",
        lockQuestionsAfterAnwsering: "No",
        displayGradeAs: "Percentage",
        dueDate: new Date().toISOString().split("T")[0],
        availableDate: new Date().toISOString().split("T")[0],
        availableTime: "12:00am",
        dueTime: "11:59pm",
        untilDate: new Date().toISOString().split("T")[0],
        published: "No",
        questions: [],
    });

    const [isLoading, setIsLoading] = useState(true); // Track loading state

    const fetchCurrentQuiz = async () => {
        if (qid !== 'New') {
            try {
                const current = await client.findQuizById_cROUTE(qid as string);
                console.log("current quiz:", current);
                if (current) {
                    setQuiz(current);
                } else {
                    console.warn(`Quiz with qid ${qid} not found.`);

                }
            } catch (error) {
                console.error("Error fetching quiz:", error);

            } finally {
                setIsLoading(false); // Set loading to false
            }
        } else {

            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchCurrentQuiz();
    }, [qid]);

    const [isEditMode, setIsEditMode] = useState<boolean>(qid === 'New'); // Automatically in edit mode if creating a new quiz
    const handleEditClick = () => {
        if (isEditMode) {
            setIsEditMode(false);
        } else {
            setIsEditMode(true); // Enable edit mode

        }

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



        return response.data;
    };



    const [active, setActive] = useState('Details');

    const handleClick = (event: any) => {
        setActive(event.target.id);
    };

    const handleSaveQuiz = async (quiz: any) => {
        try {
            if (qid !== 'New') {
                console.log("save quiz called and not a new quiz");
                const status = await client.updateQuiz_cROUTE(quiz);
                dispatch(updateQuiz(status));
            } else {
                console.log("save quiz called and new quiz");
                const newQuiz = await client.createQuiz_cROUTE(qid as string, quiz);
                dispatch(addQuiz(newQuiz));
            }
            handleEditClick();
            // navigate(`/Kanbas/Courses/${cid}/Quizzes`);
        } catch (error) {
            console.error("Error updating/adding quiz:", error);
        }
    };

    interface Field {
        label: string;
        type: "text" | "date" | "time" | "select" | "wysiwyg";
        id: string;
        stateKey: keyof QuizState;
        options?: string[];
    }

    interface QuizState {
        qid: string;
        title: string;
        course: string;
        description: string;
        points: string;
        assignTo: string;
        assignmentGroup: string;
        quizType: string;
        shuffleAnwsers: string;
        timeLimit: string;
        multipleAttempts: string;
        showCorrectAnwsers: string;
        accessCode: string;
        oneQuestionAtATime: string;
        webcamRequired: string;
        lockQuestionsAfterAnswering: string;
        displayGradeAs: string;
        dueDate: Date;
        availableDate: Date;
        availableTime: string;
        dueTime: string;
        untilDate: Date;
        published: string;
    }

    const fields: Field[] = [
        { label: "Quiz Title", type: "text", id: "quizTitle", stateKey: "title" },
        { label: "Quiz Instructions", type: "wysiwyg", id: "quizDescription", stateKey: "description" },
        { label: "Assigned To", type: "select", id: "quizAssignedTo", stateKey: "assignTo", options: ["Everyone"] },
        { label: "Quiz Type", type: "select", id: "quizType", stateKey: "quizType", options: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"] },
        { label: "Points", type: "text", id: "quizPoints", stateKey: "points" },
        { label: "Assignment Group", type: "select", id: "quizAssignmentGroup", stateKey: "assignmentGroup", options: ["QUIZZES", "ASSIGNMENTS", "PROJECTS", "EXAMS"] },
        { label: "Shuffle Anwsers", type: "select", id: "quizShuffleAnswsers", stateKey: "shuffleAnwsers", options: ["Yes", "No"] },
        { label: "Time Limit", type: "select", id: "quizTimeLimit", stateKey: "timeLimit", options: ["20 Minutes", "30 Minutes", "Unlimited"] },
        { label: "Multiple Attempts", type: "select", id: "quizMultipleAttempts", stateKey: "multipleAttempts", options: ["Yes", "No"] },
        { label: "Show Correct Anwsers", type: "select", id: "quizShowCorrectAnwsers", stateKey: "showCorrectAnwsers", options: ["No", "Yes, at end of quiz", "Yes, immediately"] },
        { label: "Access Code", type: "text", id: "quizAccessCode", stateKey: "accessCode" },
        { label: "One Question At A Time", type: "select", id: "quizOneQuestionAtATime", stateKey: "oneQuestionAtATime" },
        { label: "Webcam Required", type: "select", id: "quizWebcamRequired", stateKey: "webcamRequired" },
        { label: "Lock Questions After Answering", type: "select", id: "quizLockQuestionsAfterAnwsering", stateKey: "lockQuestionsAfterAnswering", options: ["Yes", "No"] },
        { label: "Available Date", type: "date", id: "quizAvailableDate", stateKey: "availableDate" },
        { label: "Due Date", type: "date", id: "quizDueDate", stateKey: "dueDate" },
        { label: "Avaialbe Until Date", type: "date", id: "quizAvailableUntilDate", stateKey: "untilDate" },
   
    ];

    if (isLoading) {
        return <div>Loading...</div>; // Show loading indicator while fetching
    }

    return (
        <div id="divA-mother">
            {!isEditMode ? (
                <div>
                    <h4 className="text-center">
                        <button className="btn btn-primary m-2"
                            id="wd-add-new-course-click"
                        > Preview Quiz </button>
                        <button className="btn btn-warning"
                            id="wd-update-course-click" onClick={handleEditClick}>
                            <FaPencil className="me-2" />
                            Edit Quiz
                        </button></h4><hr />

                    {/* Render the quiz details here when not in edit mode */}
                    <div>
                        <h3>
                            <strong>
                                {quiz.title}
                                {quiz.published === "Yes" && <GreenCheckmark />}
                                {quiz.published === "No" && <FaBan className="me-3 text-danger" />}
                            </strong>
                        </h3>
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-md-6 text-end">
                                    <p><strong>Quiz Type</strong></p>
                                    <p><strong>Points</strong></p>
                                    <p><strong>Assignment Group</strong></p>
                                    <p><strong>Shuffle Answers</strong></p>
                                    <p><strong>Time Limit</strong></p>
                                    <p><strong>Multiple Attempts</strong></p>
                                    <p><strong>View Responses</strong></p>
                                    <p><strong>Show Correct Answers</strong></p>
                                    <p><strong>Access Code</strong></p>
                                    <p><strong>One Question At A Time</strong></p>
                                    <p><strong>Webcam Required</strong></p>
                                    <p><strong>Lock Questions After Answering</strong></p>
                                    <p><strong>Due Date</strong></p>
                                    <p><strong>Available Date</strong></p>
                                    <p><strong>Until Date</strong></p>
                                </div>
                                <div className="col-md-6 text-start">
                                    <p>{quiz.quizType || "N/A"}</p>
                                    <p>{quiz.points || "N/A"}</p>
                                    <p>{quiz.assignmentGroup || "N/A"}</p>
                                    <p>{quiz.shuffleAnswers ? "Yes" : "No"}</p>
                                    <p>{quiz.timeLimit || "N/A"}</p>
                                    <p>{quiz.multipleAttempts ? "Yes" : "No"}</p>
                                    <p>Always</p>
                                    <p>{quiz.showCorrectAnswers ? "Yes" : "No"}</p>
                                    <p>{quiz.accessCode || "None"}</p>
                                    <p>{quiz.oneQuestionAtATime ? "Yes" : "No"}</p>
                                    <p>{quiz.webcamRequired ? "Yes" : "No"}</p>
                                    <p>{quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</p>
                                    <p>{quiz.dueDate || "N/A"}</p>
                                    <p>{quiz.availableDate || "N/A"}</p>
                                    <p>{quiz.untilDate || "N/A"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>







            ) : (

                <div className="container">
                    <div className="tabs">
                        <button
                            className={`tab-button ${active === 'Details' ? 'active' : ''}`}
                            id="Details"
                            onClick={handleClick}
                        >
                            Details
                        </button>
                        <button
                            className={`tab-button ${active === 'Questions' ? 'active' : ''}`}
                            id="tab-2"
                            onClick={handleClick}
                        >
                            Questions
                        </button>
                    </div>
                    <div className="tabs-content">
                        <div className={`tab-page ${active === 'Details' ? 'active' : ''}`}>
                            <p>Details page</p>


                            <div id="king-column" className="form-container">
                                <div className="form-group">
                                    {fields.map((field) => (
                                        <div className="input-group mb-3" key={field.id}>
                                            <span className="input-group-text fixed-width-label" id={`inputGroup-sizing-${field.id}`}>
                                                <strong>{field.label}</strong>
                                            </span>
                                            {field.type === "select" && field.options ? (
                                                <select
                                                    className="form-control"
                                                    id={field.id}
                                                    value={quiz[field.stateKey]} // Assume value is never null here
                                                    onChange={(e) => setQuiz({ ...quiz, [field.stateKey]: e.target.value })}
                                                    aria-label={field.label}
                                                    aria-describedby={`inputGroup-sizing-${field.id}`}
                                                >
                                                    {field.options.map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : field.type === "wysiwyg" ? (
                                                <div className="form-control" style={{ padding: 0, height: 'auto' }}>
                                                    <ReactQuill
                                                        theme="snow"
                                                        value={quiz[field.stateKey]} // Assume value is never null here
                                                        onChange={(value) => setQuiz({ ...quiz, [field.stateKey]: value })}
                                                        aria-label={field.label}
                                                        aria-describedby={`inputGroup-sizing-${field.id}`}
                                                        style={{ height: '150px', border: 'none' }}
                                                    />
                                                </div>
                                            ) : (
                                                <input
                                                    type={field.type}
                                                    className="form-control"
                                                    id={field.id}
                                                    value={quiz[field.stateKey]} // Assume value is never null here
                                                    onChange={(e) => setQuiz({ ...quiz, [field.stateKey]: e.target.value })}
                                                    aria-label={field.label}
                                                    aria-describedby={`inputGroup-sizing-${field.id}`}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr></hr>

                            <div className="d-flex flex-row flex-fill justify-content-end">
                                <div>
                                    <button className="btn btn-lg border-secondary m-2"
                                        style={{
                                            backgroundColor: '#f8f9fb',
                                            textDecoration: "none"
                                        }}>
                                        <Link to={`/Kanbas/Courses/${cid}/Quizzes/`}
                                            className="custom-link">
                                            Cancel
                                        </Link>
                                    </button>
                                </div>

                                <div>
                                    <button onClick={() => {
                                        handleSaveQuiz(quiz);
                                    }}
                                        className="btn btn-lg bg-success text-white m-2"
                                        style={{ backgroundColor: '#f8f9fb' }}>
                                        Save
                                    </button>
                                </div>

                                <div>
                                    <button onClick={() => {

                                        handlePublishStatus(quiz);
                                        handleSaveQuiz(quiz);
                                        console.log(quiz); 


                                    }}
                                        className="btn btn-lg bg-danger text-white m-2"
                                        style={{ backgroundColor: '#f8f9fb' }}>
                                        Save & PUBLISH
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-page ${active === 'tab-2' ? 'active' : ''}`}>
                            <p>Questions Page</p>
                            <QuestionsEditor />
                        </div>
                    </div>
                </div>




            )




            }

        </div>
    );
}
