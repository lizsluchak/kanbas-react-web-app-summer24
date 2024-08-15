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

    const [showEditor, setShowEditor] = useState(false);
    const [title, setTitle] = useState<string>("");
    const [points, setPoints] = useState<number>(0);
    const [question, setQuestion] = useState<string>("");
    const [choices, setChoices] = useState<{ text: string; correct: boolean }[]>([
        { text: "", correct: false },
    ]);

    const handleOpenEditor = () => setShowEditor(true);
    const handleCloseEditor = () => setShowEditor(false);

    const handleAddQuestion = () => {
        console.log("Add New Question button clicked");

        const defaultQuestion = {
            id: new Date().getTime(),
            type: "Multiple Choice",
            text: "",
            options: [],
            correctAnswer: "",
            points: 0,
        };
        setNewQuestion(defaultQuestion);
        setEditIndex(questions.length);
        console.log("New question initialized:", defaultQuestion);
    };

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

    return (
        <div>
            <h4><strong>Quiz Questions Editor</strong></h4>
            <div>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary" onClick={handleAddQuestion}>
                        <FaPlus className="me-2 align-middle" />
                        New Question
                    </button>

                    <button className="primary" onClick={handleOpenEditor}>
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
            )}
        </div>
    );
}
