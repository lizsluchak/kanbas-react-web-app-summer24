import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Form, InputGroup, Button } from "react-bootstrap";
import * as client from "./client";
import QuizPreviewScreen from "./QuizPreviewScreen";

export default function TakeQuiz() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { cid, qid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [currentQuiz, setCurrentQuiz] = useState<any>();

    const fetchCurrentQuiz = async () => {
        const quizData = await client.findQuizById_cROUTE(qid as string);
        setCurrentQuiz(quizData);
    };

    useEffect(() => {
        fetchCurrentQuiz();
    }, []);

    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <h3>The big knowledge test!</h3>
                <p>How good is your general knowledge?</p>
            </div>

            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#quiz" role="tab" aria-controls="quiz" aria-selected="true">Quiz</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#result" role="tab" aria-controls="results" aria-selected="false">Result</a>
                </li>
            </ul>

            <div className="tab-content">
            <div className="tab-pane fade show active" id="quiz" role="tabpanel" aria-labelledby="quiz-tab">
        <QuizPreviewScreen />
    {currentQuiz && currentQuiz.data ? (
        <ul className="list-group list-group-flush p-3">
            {currentQuiz.data.map((question: any, index: number) => (
                <li className="list-group-item p-5" key={index}>
                    <h6><strong>{`Question ${index + 1}: `}</strong></h6>
                    <h5>{question.question}</h5>

                    
                    <p>{`Points: ${question.points}`}</p>
                    <ul className="list-group">
                        {question.answerChoices.map((choice: any, choiceIndex: number) => (
                            <li className="list-group-item" key={choiceIndex}>
                                <label>
                                    <input
                                    className="m-2"
                                        type="radio"
                                        name={`question-${index}`}
                                        value={choice.text}
                                    />
                                    {choice.text}
                                </label>

                                
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
            
        </ul>
        
    ) : (
        <p>Loading quiz...</p>
    )}
</div>




                <div className="tab-pane fade" id="result" role="tabpanel" aria-labelledby="result-tab">
                    <h3>Result</h3>
                    <div className="card">
                        <div className="card-body">
                            <p id="result">No result.</p>
                            <button type="button" className="btn btn-success">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
