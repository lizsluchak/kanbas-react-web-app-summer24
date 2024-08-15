import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaPlus, FaTrash } from "react-icons/fa";
import "../../Quizzes/styles.css"

// Define the interface for props
interface MultipleChoiceQuestionEditorProps {
  show: boolean;
  handleClose: () => void;
  saveQuestion: (question: {
    title: string;
    points: number;
    question: string;
    choices: { text: string; correct: boolean }[];
  }) => void;
}

// Define the component using the props interface
export default function MultipleChoiceQuestionEditor({
  show,
  handleClose,
  saveQuestion,
}: MultipleChoiceQuestionEditorProps) {
  const [title, setTitle] = useState<string>("");
  const [points, setPoints] = useState<number>(0);
  const [question, setQuestion] = useState<string>("");
  const [choices, setChoices] = useState<{ text: string; correct: boolean }[]>([
    { text: "", correct: false },
  ]);

  const handleChoiceChange = (
    index: number,
    field: "text" | "correct",
    value: string | boolean
  ) => {
    const updatedChoices = [...choices];
    if (field === "text" && typeof value === "string") {
      updatedChoices[index].text = value;
    } else if (field === "correct" && typeof value === "boolean") {
      updatedChoices[index].correct = value;
    }
    setChoices(updatedChoices);
  };

  const handleAddChoice = () => {
    setChoices([...choices, { text: "", correct: false }]);
  };

  const handleRemoveChoice = (index: number) => {
    const updatedChoices = choices.filter((_, i) => i !== index);
    setChoices(updatedChoices);
  };

  const handleSave = () => {
    const newQuestion = {
      title,
      points,
      question,
      choices,
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
            {choices.map((choice, index) => (
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
        <Button variant="primary" onClick={handleSave}>
          Save/Update Question
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
