import { useEffect, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import * as client from "../client";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import { FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addQuestionToQuiz, addQuiz, updateQuestionInQuiz, updateQuiz } from "../reducer";

export default function QuestionsEditor() {
    const { qid, cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetch quizzes from Redux
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    // Create quiz useState hook
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
        data: [],
    });

    // Quiz question useState hook
    const [quizQuestion, setQuizQuestion] = useState<any>({
        questionId: 999,
        title: "New",
        points: 10,
        questionType: "Multiple Choice",
        question: "New Quiz Question",
        answerChoices: [{ text: "", correct: "" }],
    });

    // State variables
    const [questions, setQuestions] = useState<any[]>(quiz?.data || []);
    const [editIndex, setEditIndex] = useState<number>(quiz?.data.length);
    const [newQuestion, setNewQuestion] = useState<any>();
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const [answerChoices, setAnswerChoices] = useState<any>(quizQuestion.answerChoices);
    const [showEditor, setShowEditor] = useState(false);
    const [title, setTitle] = useState<string>(quizQuestion.title);
    const [currentQuestion, setCurrentQuestion] = useState<any>(quizQuestion);

    const [questionId, setQuestionId] = useState<number>(quizQuestion.questionId);
    const [points, setPoints] = useState<number>(quizQuestion.points);
    const [question, setQuestion] = useState<any>(quizQuestion.question);
    const [questionType, setQuestionType] = useState<string>(quizQuestion.questionType);

    useEffect(() => {
        if (questionId !== 999) {
            fetchCurrentQuiz();
            console.log("questionId", questionId);
        } else {
            setIsLoading(false);
        }
    }, [qid]);

    const fetchCurrentQuiz = async () => {
        try {
            const current = await client.findQuizById_cROUTE(qid as string);
            if (current) {
                setQuiz(current);
                setQuestions(current.data);
            }
        } catch (error) {
            console.error("Error fetching quiz:", error);
        } finally {
            setIsLoading(false); // Set loading to false
        }
    };

    const handleQuestionTypeChange = (type: string) => {
        setQuestionType(type);
        if (type === "Multiple Choice" && answerChoices.length === 0) {
            setAnswerChoices([{ text: "", correct: false }]);
        }
    };

    const handleChoiceChange = (
        index: number,
        field: "text" | "correct",
        value: string | boolean
    ) => {
        setAnswerChoices((prevChoices: any) => {
            // Create a new array with the same elements
            const updatedChoices = [...prevChoices];

            // Create a new object for the specific choice being updated
            const updatedChoice = { ...updatedChoices[index], [field]: value };

            // Replace the old choice object with the new one
            updatedChoices[index] = updatedChoice;

            return updatedChoices;
        });
    };

    const handleAddChoice = () => {
        setAnswerChoices([...answerChoices, { text: "", correct: false }]);
        console.log(answerChoices); 
    };

    const handleRemoveChoice = (index: number) => {
        const updatedChoices = answerChoices.filter((_: any, i: any) => i !== index);
        setAnswerChoices(updatedChoices);
    };

    const handleSaveQuestion = async (quizQuestion: any) => {
        console.log("handle save called");
        console.log("quizQuestion", quizQuestion); // Log the structure
        
        try {
            // Clone the quiz object to avoid direct mutation
            const updatedQuiz = { ...quiz };
    
            if (quizQuestion.title !== "New") {
                // Find the index of the question to be updated
                const questionIndex = updatedQuiz.data.findIndex((q: any) => q.questionId === quizQuestion.questionId);
                
                if (questionIndex !== -1) {
                    // Update the existing question
                    updatedQuiz.data[questionIndex] = quizQuestion;
                } else {
                    console.error("Question not found in the quiz data.");
                    return;
                }
            } else {
                // Ensure the questionId is serializable
                const newQuestion = { 
                    ...quizQuestion, 
                    title: updatedQuiz.data.length.toString(), 
                    questionId: new Date().getTime().toString() // Serialize the questionId as an ISO string
                };
                
                console.log("newQuestion", newQuestion);
                updatedQuiz.data.push(newQuestion);
                console.log("updated Quiz", updatedQuiz);
            }
    
            // Log updated quiz data for debugging
            console.log("updated quiz.data", updatedQuiz.data);
    
            // Use the existing updateQuiz_cROUTE to save the quiz
            const status = await client.updateQuiz_cROUTE(updatedQuiz);
            dispatch(updateQuiz(status));
        } catch (error) {
            console.error("Error saving question", error);
        }
    };

    // const handleEditClick = () => {
    //     setIsEditMode(!isEditMode);
    // };

    if (isLoading) {
        return <div>Loading...</div>; // Show loading indicator while fetching
    }

    return (
        <div>
            <h4>
                <strong>Quiz Questions Editor</strong>
            </h4>

            <br />

            <div>
                <p>
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
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

                            {questionType === "Multiple Choice" && (
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
                                                onChange={() => handleChoiceChange(index, "correct", true)}
                                            />
                                            <Form.Control
                                                type="text"
                                                value={choice.text}
                                                onChange={(e) =>
                                                    handleChoiceChange(index, "text", e.target.value)
                                                }
                                                placeholder={`Choice ${index + 1}`}
                                            />
                                            <Button
                                                variant="danger"
                                                onClick={() => handleRemoveChoice(index)}
                                            >
                                                <FaTrash />
                                            </Button>
                                        </InputGroup>
                                    ))}

                                    <hr />
                                    <div className="d-flex flex-row flex-fill justify-content-end">

                                        <div>
                                            <button
                                                onClick={()=>handleSaveQuestion(quizQuestion)}
                                                className="btn btn bg-success text-white m-2"
                                            >
                                                Save
                                            </button>

                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseExample"
                                                aria-expanded="false"
                                                aria-controls="collapseExample"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </Form.Group>
                            )}

                            {questionType === "True/False" && (
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

                            {questionType === "Fill in the Blanks" && (
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
                    <br/>
                    <br/>
                    <br/>
                    </div>
                    </div>

                    <div>
                        <div className="d-flex">
                            <div className="w-100">
                                <ul className="list-group">
                                    <li className="list-group-item bg-secondary">
                                        <h3 className="list-group-item-heading p-2"><strong>{quiz.title}: Current Quiz Questions</strong></h3>

                                    </li>

                                    {quizzes
                                        .filter((quiz: any) => quiz.course === cid)
                                        .flatMap((quiz: any) =>
                                            quiz.data.map((question: any, index: number) => (
                                                <li key={question._id} className="list-group-item">
                                                    <div>
                                                        <h5>{question.question}</h5> {/* Title */}
                                                    </div>
                                                    <div>
                                                    Answer Choices: {question.answerChoices.map((a: any) => a.text).join(', ')} {/* Answer Choices */}
                                                    </div>
                                                    <div>
                                                        Points: {question.points} {/* Points */}
                                                    </div>
                                                </li>
                                            )))
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
               
            
        </div>
    );
}
