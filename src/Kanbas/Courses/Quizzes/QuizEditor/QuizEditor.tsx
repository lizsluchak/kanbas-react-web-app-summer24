import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "../styles.css";
import * as client from "../client";
import { addQuiz, updateQuiz } from "../reducer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import { FaBan, FaCaretDown, FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { FaFilePen, FaPencil } from "react-icons/fa6";
import GreenCheckmark from "../../Modules/GreenCheckmark";
import QuizQuestionsEditor from "./QuizQuestionsEditor";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { Accordion, Card } from 'react-bootstrap';

export default function QuizEditor() {
    // Fetch params
    const { qid, cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetch quizzes from Redux
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    // Create quiz useState hook: add state to functional component
    const [quiz, setQuiz] = useState<any>({
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

    // Quiz question useState hook
    const [quizQuestion, setQuizQuestion] = useState<any>({
        id: quiz.questions.length,
        title: "New Quiz Question Title",
        points: 10,
        quesitonType: "Multiple Choice",
    });

    // State variables
    const [questions, setQuestions] = useState<any[]>(quiz?.questions || []);
    const [editIndex, setEditIndex] = useState<number>(quiz?.questions.length);
    const [newQuestion, setNewQuestion] = useState<any>();
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const [answerChoices, setAnswerChoices] = useState<any>([]);
    const [showEditor, setShowEditor] = useState(false);
    const [title, setTitle] = useState<string>("");
    const [currentQuestion, setCurrentQuestion] = useState<any>();
    const [points, setPoints] = useState<number>(0);
    const [question, setQuestion] = useState<any>();
    const [questionType, setQuestionType] = useState<string>("Multiple Choice");
    const [choices, setChoices] = useState<{ text: string; correct: boolean }[]>([
        { text: "", correct: false },
    ]);

    // Fetch current quiz to edit handler
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
        setIsEditMode(!isEditMode);
    };

    const handlePublishStatus = async (quiz: any) => {
        const updatedQuiz = { ...quiz, published: quiz.published === "No" ? "Yes" : "No" };
        const response = await client.updateQuiz_cROUTE(updatedQuiz);
        return response.data;
    };

    const [active, setActive] = useState('Details');
    const handleClick = (event: any) => setActive(event.target.id);

    const handleSaveQuiz = async (quiz: any) => {
        try {
            if (qid !== 'New') {
                const status = await client.updateQuiz_cROUTE(quiz);
                dispatch(updateQuiz(status));
            } else {
                const newQuiz = await client.createQuiz_cROUTE(qid as string, quiz);
                dispatch(addQuiz(newQuiz));
            }
            handleEditClick();
        } catch (error) {
            console.error("Error updating/adding quiz:", error);
        }
    };

    const handleChoiceChange = (
        index: number,
        field: "text" | "correct",
        value: string | boolean
    ) => {
        const updatedChoices = [...answerChoices];
        if (field === "text" && typeof value === "string") {
            updatedChoices[index].text = value;
        } else if (field === "correct" && typeof value === "boolean") {
            updatedChoices[index].correct = value;
        }
        setAnswerChoices(updatedChoices);
    };

    const handleAddChoice = () => {
        setAnswerChoices([...answerChoices, { text: "", correct: false }]);
    };

    const handleRemoveChoice = (index: number) => {
        const updatedChoices = answerChoices.filter((_: any, i: any) => i !== index);
        setAnswerChoices(updatedChoices);
    };

    const handleAddQuestion = () => {
        const newQuestion = quizQuestion;
        quiz.questions.push(newQuestion);
        setEditIndex(questions.length);
        dispatch(updateQuiz(quiz));
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
        questions: Array<any>;
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
        { label: "One Question At A Time", type: "select", id: "quizOneQuestionAtATime", stateKey: "oneQuestionAtATime", options: ["Yes", "No"] },
        { label: "Webcam Required", type: "select", id: "quizWebcamRequired", stateKey: "webcamRequired" },
        { label: "Lock Questions After Answering", type: "select", id: "quizLockQuestionsAfterAnwsering", stateKey: "lockQuestionsAfterAnswering", options: ["Yes", "No"] },
        { label: "Available Date", type: "date", id: "quizAvailableDate", stateKey: "availableDate" },
        { label: "Due Date", type: "date", id: "quizDueDate", stateKey: "dueDate" },
        { label: "Available Until Date", type: "date", id: "quizAvailableUntilDate", stateKey: "untilDate" },
    ];

    if (isLoading) {
        return <div>Loading...</div>; // Show loading indicator while fetching
    }

    // useEffect(() => {
    //     // Ensure the "Choices" section is rendered when questionType is "Multiple Choice"
    //     if (questionType === 'Multiple Choice' && answerChoices.length === 0) {
    //         setAnswerChoices([{ text: '', correct: false }]);
    //     }
    // }, [questionType]);

    const handleQuestionTypeChange = (type: any) => {
        setQuestionType(type);
        if (type === 'Multiple Choice' && answerChoices.length === 0) {
            setAnswerChoices([{ text: '', correct: false }]);
        }
    };



    return (
        <div id="divA-mother">
            {!isEditMode ? (
                <div>
                    <h4 className="text-center">
                        <button className="btn btn-primary m-2" id="wd-add-new-course-click">
                            Preview Quiz
                        </button>
                        <button className="btn btn-warning" id="wd-update-course-click" onClick={handleEditClick}>
                            <FaPencil className="me-2" />
                            Edit Quiz
                        </button>
                    </h4>
                    <hr />
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
                                                    value={quiz[field.stateKey]}
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
                                                        value={quiz[field.stateKey]}
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
                                                    value={quiz[field.stateKey]}
                                                    onChange={(e) => setQuiz({ ...quiz, [field.stateKey]: e.target.value })}
                                                    aria-label={field.label}
                                                    aria-describedby={`inputGroup-sizing-${field.id}`}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex flex-row flex-fill justify-content-end">
                                <div>
                                    <button className="btn btn-lg border-secondary m-2" style={{ backgroundColor: '#f8f9fb', textDecoration: "none" }}>
                                        <Link to={`/Kanbas/Courses/${cid}/Quizzes/`} className="custom-link">
                                            Cancel
                                        </Link>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleSaveQuiz(quiz)}
                                        className="btn btn-lg bg-success text-white m-2"
                                        style={{ backgroundColor: '#f8f9fb' }}
                                    >
                                        Save
                                    </button>
                                </div>
                                <div>
                                    <button
                                        onClick={() => {
                                            handlePublishStatus(quiz);
                                            handleSaveQuiz(quiz);
                                        }}
                                        className="btn btn-lg bg-danger text-white m-2"
                                        style={{ backgroundColor: '#f8f9fb' }}
                                    >
                                        Save & PUBLISH
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-page ${active === 'tab-2' ? 'active' : ''}`}>
                            <h4><strong>Quiz Questions Editor</strong></h4>

                            <br />






                            <div>
                                <p>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Add Quiz Question:
                                    </button>
                                </p>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body">
                                        <Form>

                                            <Form.Group controlId="questionType">
                                                <Form.Label>Change Question Type</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    value={questionType}
                                                    onChange={(e) => handleQuestionTypeChange(e.target.value)}
                                                >
                                                    <option value="Multiple Choice">Multiple Choice</option>
                                                    <option value="True/False">True/False</option>
                                                    <option value="Fill in the Blanks">Fill in the Blanks</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group controlId="questionTitle" className="mt-3">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter question title"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="questionPoints" className="mt-3">
                                                <Form.Label>Points</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter points"
                                                    value={points}
                                                    onChange={(e) => setPoints(Number(e.target.value))}
                                                />
                                            </Form.Group>

                                            {questionType === 'Multiple Choice' && (
                                                <Form.Group controlId="questionChoices" className="mt-3">
                                                    <Form.Label>Choices</Form.Label>
                                                    <Button className="m-3" variant="secondary" onClick={handleAddChoice}>
                                                        <FaPlus className="me-2" /> Add Choice
                                                    </Button>
                                                    {answerChoices.map((choice: any, index: any) => (
                                                        <InputGroup className="mb-2" key={index}>
                                                            <InputGroup.Radio
                                                                name="correctChoice"
                                                                checked={choice.correct}
                                                                onChange={() => handleChoiceChange(index, 'correct', true)}
                                                            />
                                                            <Form.Control
                                                                type="text"
                                                                value={choice.text}
                                                                onChange={(e) =>
                                                                    handleChoiceChange(index, 'text', e.target.value)
                                                                }
                                                                placeholder={`Choice ${index + 1}`}
                                                            />
                                                            <Button variant="danger" onClick={() => handleRemoveChoice(index)}>
                                                                <FaTrash />
                                                            </Button>
                                                        </InputGroup>
                                                    ))}
                                                    
                                                </Form.Group>
                                            )}

                                            {questionType === 'True/False' && (
                                                <Form.Group controlId="questionTrueFalse" className="mt-3">
                                                    <Form.Label>Answer</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        value={question}
                                                        onChange={(e) => setQuestion(e.target.value)}
                                                    >
                                                        <option value="True">True</option>
                                                        <option value="False">False</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            )}

                                            {questionType === 'Fill in the Blanks' && (
                                                <Form.Group controlId="questionFillBlanks" className="mt-3">
                                                    <Form.Label>Question</Form.Label>
                                                    <ReactQuill
                                                        theme="snow"
                                                        value={question}
                                                        onChange={setQuestion}
                                                        placeholder="Enter the question text with blanks"
                                                    />
                                                </Form.Group>
                                            )}
                                        </Form>


                                    </div>
                                </div>


                            </div>



                            <br />
                            <br />
                            <div>
                                <div className="d-flex">
                                    <div className="w-100">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <h3 className="list-group-item-heading"><strong>{quiz.title}: Current Quiz Questions</strong></h3>


                                            </li>

                                            {quizzes
                                                .filter((quiz: any) => quiz.course === cid)
                                                .flatMap((quiz: any) =>
                                                    quiz.questions.map((question: any, index: number) => (
                                                        <li key={question._id} className="list-group-item">
                                                            <div>
                                                                <h5>{question.question}</h5> {/* Title */}
                                                            </div>

                                                            <div>
                                                                <p>Answer Choices: {question.answerChoices.join(', ')}</p> {/* Answer Choices */}
                                                            </div>
                                                            <div>
                                                                <p>Points: {question.points}</p> {/* Points */}
                                                            </div>
                                                        </li>
                                                    )))
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
