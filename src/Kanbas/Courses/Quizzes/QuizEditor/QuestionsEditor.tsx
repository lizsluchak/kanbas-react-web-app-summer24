
import { useEffect, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import * as client from "../client";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import { FaPlus, FaTrash } from "react-icons/fa";


export default function QuestionsEditor() {
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
        title: "",
        points: null,
        quesitonType: "Multiple Choice",
        question: "New Quiz Question",
        answerChoices: [{
            options: [],
            correct: [],
        }],
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

    const handleQuestionTypeChange = (type: any) => {
        setQuestionType(type);
        if (type === 'Multiple Choice' && answerChoices.length === 0) {
            setAnswerChoices([{ text: '', correct: false }]);
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


    return (
        <div>
            <div>hello</div>


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
        </div>
    )




}