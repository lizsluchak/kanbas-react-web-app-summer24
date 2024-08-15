import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateQuiz } from "../reducer"; // Adjust the path if needed
import * as client from "../client"; // Adjust the path if needed
import { FaPlus, FaTrash } from "react-icons/fa";
import MultipleChoiceQuestionEditor from "./MultipleChoiceQuestionEditor"; // Adjust the path if needed
import { Form, InputGroup, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function QuizQuestionsEditor() {
    const { qid, cid } = useParams();
    const dispatch = useDispatch();

    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const quiz = quizzes.find((q: any) => q.qid === qid);

    const [questions, setQuestions] = useState<any[]>(quiz?.questions || []);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [newQuestion, setNewQuestion] = useState<any>(null);
    const [answerChoices, setAnswerChoices] = useState<any>([]);
    const [showEditor, setShowEditor] = useState(false);
    const [title, setTitle] = useState<string>("");
    const [points, setPoints] = useState<number>(0);
    const [question, setQuestion] = useState<string>("");
    const [choices, setChoices] = useState<{ text: string; correct: boolean }[]>([
        { text: "", correct: false },
    ]);

    const handleOpenEditor = () => setShowEditor(true);
    const handleCloseEditor = () => setShowEditor(false);

    // const handleAddQuestion = () => {
    //     console.log("Add New Question button clicked");

    //     const defaultQuestion = {
    //         id: new Date().getTime(),
    //         type: "Multiple Choice",
    //         text: "",
    //         options: [],
    //         correctAnswer: "",
    //         points: 0,
    //     };
    //     setNewQuestion(defaultQuestion);
    //     setEditIndex(questions.length);
    //     console.log("New question initialized:", defaultQuestion);
    // };

    const handleSaveQuestion = () => {
        const updatedQuestions = [...questions];
        if (newQuestion) {
            updatedQuestions.push(newQuestion);
        } else if (editIndex !== null) {
            updatedQuestions[editIndex] = { ...questions[editIndex] };
        }

        setQuestions(updatedQuestions);
        setEditIndex(null);
        setNewQuestion(null);
        saveQuizQuestions(updatedQuestions);
    };

    const handleEditQuestion = (index: number) => {
        setEditIndex(index);
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
        setNewQuestion(null);
    };

    const handleQuestionChange = (key: string, value: any) => {
        if (newQuestion) {
            setNewQuestion({ ...newQuestion, [key]: value });
        } else if (editIndex !== null) {
            const updatedQuestions = [...questions];
            updatedQuestions[editIndex] = { ...updatedQuestions[editIndex], [key]: value };
            setQuestions(updatedQuestions);
        }
    };

    const saveQuizQuestions = async (updatedQuestions: any[]) => {
        try {
            const updatedQuiz = { ...quiz, questions: updatedQuestions };
            const response = await client.updateQuiz_cROUTE(updatedQuiz);
            dispatch(updateQuiz(response));
        } catch (error) {
            console.error("Error saving quiz questions:", error);
        }
    };

    const totalPoints = questions.reduce((total, q) => total + q.points, 0);

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
        const updatedChoices = answerChoices.filter((_ : any, i : any) => i !== index);
        setAnswerChoices(updatedChoices);
      };
    //   const saveQuizQuestions = async (updatedQuestions: any[]) => {
    //     if (!qid) {
    //         console.error("Quiz ID is undefined.");
    //         return;
    //     }
    //     try {
    //        const updatedQuestion = [ question ]
    //         const response = await client.addQuestionToQuiz_cROUTE(qid as string, question); // Pass the correct quiz ID
    //         dispatch(addQuestionToQuiz(response));
    //     } catch (error) {
    //         console.error("Error saving quiz questions:", error);
    //     }
    // };

    return (
        <div>
            <h4><strong>Quiz Questions Editor</strong></h4>
            <div>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary">
                        <FaPlus className="me-2 align-middle" />
                        New Question
                    </button>

                    <Form>
                        <Form.Group controlId="questionTitle">
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
                        <Form.Group controlId="questionText" className="mt-3">
                            <Form.Label>Question</Form.Label>
                            <ReactQuill
                                theme="snow"
                                value={question}
                                onChange={setQuestion}
                                placeholder="Enter the question text"
                            />
                        </Form.Group>
                        <Form.Group controlId="questionChoices" className="mt-3">
                            <Form.Label>Choices</Form.Label>
                            {answerChoices.map((choice: any, index: any) => (
                                <InputGroup className="mb-2" key={index}>
                                    <InputGroup.Radio
                                        name="correctChoice"
                                        checked={choice.correct}
                                        // onChange={() =>
                                        //     setAnswerChoices(index, "correct", true)
                                        // }
                                    />
                                    <Form.Control
                                        type="text"
                                        value={choice.text}
                                        onChange={(e) =>
                                            handleChoiceChange(index, "text", e.target.value)
                                        }
                                        placeholder={`Choice ${index + 1}`}
                                    />
                                    <Button variant="danger" onClick={() => handleRemoveChoice(index)}>
                                        <FaTrash />
                                    </Button>
                                </InputGroup>
                            ))}
                            <Button variant="secondary" onClick={handleAddChoice}>
                                <FaPlus className="me-2" /> Add Choice
                            </Button>
                        </Form.Group>
                    </Form>

                </div>
            </div>

            {/*<button className="primary" onClick={handleOpenEditor}>
                        Add Multiple Choice Question
                    </button>

                    <MultipleChoiceQuestionEditor
                        show={showEditor}
                        handleClose={handleCloseEditor}
                        saveQuestion={handleSaveQuestion}
                    />
                </div>
                <p>Total Points: {totalPoints}</p>
            </div>

            <div className="flex-fill">
                <ul id="wd-modules" className="list-group rounded-0">
                    {quizzes
                        .filter((quiz: any) => quiz.course === cid)
                        .flatMap((quiz: any) =>
                            quiz.questions.map((question: any) => (
                                <li key={question.id} className="list-group-item p-0 mb-5 fs-5 border-gray">
                                    <div>
                                        <h5>{question.title}</h5>
                                        <p><strong>Points:</strong> {question.points}</p>
                                        <p><strong>Type:</strong> {question.questionType}</p>
                                        <p><strong>Question:</strong> {question.question}</p>
                                        <p><strong>Answer Choices:</strong></p>
                                        <ul>
                                            {question.answerChoices.map((choice: string, index: number) => (
                                                <li key={index}>{choice}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))
                        )
                    }
                </ul>
            </div>

            {questions.map((question, index) => (
                <div key={question.id} className="question-item">
                    {editIndex === index ? (
                        <div>
                            <input
                                type="text"
                                value={question.text}
                                onChange={(e) => handleQuestionChange("text", e.target.value)}
                                placeholder="Enter question text"
                            />
                            <select
                                value={question.type}
                                onChange={(e) => handleQuestionChange("type", e.target.value)}
                            >
                                <option value="Multiple Choice">Multiple Choice</option>
                                <option value="True/False">True/False</option>
                                <option value="Fill in the Blanks">Fill in the Blanks</option>
                            </select>
                            <input
                                type="number"
                                value={question.points}
                                onChange={(e) => handleQuestionChange("points", parseInt(e.target.value))}
                                placeholder="Points"
                            />
                            <button onClick={handleSaveQuestion}>Save</button>
                            <button onClick={handleCancelEdit}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <p>{question.text} ({question.points} points)</p>
                            <button onClick={() => handleEditQuestion(index)}>Edit</button>
                        </div>
                    )}
                </div>
            ))}

            {newQuestion && (
                <div className="question-item">
                    <input
                        type="text"
                        value={newQuestion.text}
                        onChange={(e) => handleQuestionChange("text", e.target.value)}
                        placeholder="Enter question text"
                    />
                    <select
                        value={newQuestion.type}
                        onChange={(e) => handleQuestionChange("type", e.target.value)}
                    >
                        <option value="Multiple Choice">Multiple Choice</option>
                        <option value="True/False">True/False</option>
                        <option value="Fill in the Blanks">Fill in the Blanks</option>
                    </select>
                    <input
                        type="number"
                        value={newQuestion.points}
                        onChange={(e) => handleQuestionChange("points", parseInt(e.target.value))}
                        placeholder="Points"
                    />
                    <button onClick={handleSaveQuestion}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                </div>
            )} */}
        </div>
    );
}
