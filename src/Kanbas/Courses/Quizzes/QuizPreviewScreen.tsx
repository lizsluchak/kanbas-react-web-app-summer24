import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Form, Button } from "react-bootstrap";
import * as client from "./client"; // Assume client is your API client

export default function QuizPreviewScreen() {
    const { qid } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState<any>(null);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [score, setScore] = useState<number | null>(null);
    const [lastAttempt, setLastAttempt] = useState<any>(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            const fetchedQuiz = await client.findQuizById_cROUTE(qid as string);
            setQuiz(fetchedQuiz);
            
            // const previousAttempt = await client.getLastAttemptByUser(qid); // Assume this fetches the last attempt for the user
            // if (previousAttempt) {
            //     setAnswers(previousAttempt.answers);
            //     setLastAttempt(previousAttempt);
            // }
        };

        fetchQuiz();
    }, [qid]);

    const handleAnswerChange = (questionId: number, answer: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer,
        }));
    };

    const handleSubmit = async () => {
        // Calculate score based on correct answers
        let calculatedScore = 0;
        quiz.data.forEach((question: any) => {
            const correctAnswer = question.answerChoices.find((choice: any) => choice.correct === "true");
            if (answers[question.questionId] === correctAnswer?.text) {
                calculatedScore += question.points;
            }
        });

        setScore(calculatedScore);

        // Save answers to the database
        // await client.saveQuizAttempt(qid, answers, calculatedScore);
    };

    const handleEditQuiz = () => {
        navigate(`/edit-quiz/${qid}`);
    };

    if (!quiz) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>{quiz.title}</h3>
            {lastAttempt && (
                <div>
                    <p>Last attempt: {new Date(lastAttempt.date).toLocaleString()}</p>
                    <p>Your score: {lastAttempt.score}</p>
                </div>
            )}

            <Form>
                {quiz.data.map((question: any) => (
                    <div key={question.questionId} className="mb-4">
                        <h5>{question.question}</h5>
                        {question.answerChoices.map((choice: any) => (
                            <Form.Check 
                                key={choice.text} 
                                type="radio" 
                                label={choice.text} 
                                name={`question-${question.questionId}`} 
                                checked={answers[question.questionId] === choice.text}
                                onChange={() => handleAnswerChange(question.questionId, choice.text)}
                            />
                        ))}
                    </div>
                ))}
            </Form>

            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            {score !== null && <p>Your score: {score}</p>}

            <Button variant="secondary" onClick={handleEditQuiz}>Edit Quiz</Button>
        </div>
    );
}
