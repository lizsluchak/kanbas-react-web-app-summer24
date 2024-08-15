import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaPlus, FaTrash } from "react-icons/fa";
import "../../Quizzes/styles.css"
import { useParams } from "react-router";
import * as client from "../client";
import { useDispatch } from "react-redux";
import { addQuestionToQuiz } from "../reducer";

// Define the interface for props
interface MultipleChoiceQuestionEditorProps {
  show: boolean;
  handleClose: () => void;
  saveQuestion: (question: {
    id: number,
    title: string;
    points: number;
    questionType: string;
    question: string;
    answerChoices:[];
  }) => void;
}

// Define the component using the props interface
export default function MultipleChoiceQuestionEditor({
  show,
  handleClose,
  saveQuestion,
}: MultipleChoiceQuestionEditorProps) {
    const { qid, cid } = useParams();
    const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [points, setPoints] = useState<number>(0);
  const [questionType, setQuestionType] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [answerChoices, setAnswerChoices] = useState<any>([]);
  const dispatch = useDispatch();

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
  const saveQuizQuestions = async (updatedQuestions: any[]) => {
    if (!qid) {
        console.error("Quiz ID is undefined.");
        return;
    }
    try {
       const updatedQuestion = [ question ]
        const response = await client.addQuestionToQuiz_cROUTE(qid as string, question); // Pass the correct quiz ID
        dispatch(addQuestionToQuiz(response));
    } catch (error) {
        console.error("Error saving quiz questions:", error);
    }
};

  const handleSave = () => {
    const newQuestion = {
        id,
      title,
      points,
      questionType,
      question,
      answerChoices,
    };
    saveQuestion(newQuestion);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Multiple Choice Question Editor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            {answerChoices.map((choice : any, index : any) => (
              <InputGroup className="mb-2" key={index}>
                <InputGroup.Radio
                  name="correctChoice"
                  checked={choice.correct}
                  onChange={() =>
                    handleChoiceChange(index, "correct", true)
                  }
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => saveQuestion({
    id: id,
    title: title,
    points: points,
    questionType: questionType,
    question: question,
    answerChoices: answerChoices,
})}>
          Save/Update Question
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
