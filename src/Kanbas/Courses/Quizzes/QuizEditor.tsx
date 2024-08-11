import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react"
import "./styles.css";
import * as client from "./client";
import { addQuiz, updateQuiz } from "./reducer";




export default function QuizEditor() {
    const { qid, cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    //useState Hook: add state to functional component
    const [quiz, setQuiz] = useState<any>({
        qid: "New QID",
        title: 'New Quiz for Course: ' + { cid },
        course: { cid },
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
        untilDate: new Date().toISOString().split("T")[0]
    });

    /**
     * Save Quiz Function:
     * If quiz has url id of "New" -> dispatch updateQuiz reducer
     * function, else -> dispatch addQuiz reducer function and then navigate 
     * back to quizzes page.
     */
    const updateQuiz_quizEditor_eHANDLER = async (quiz: any) => {
        if (qid !== 'New') {
            const status = await client.updateQuiz_cROUTE(quiz);
            dispatch(updateQuiz(status));
        } else {
            const newQuiz = await client.createQuiz_cROUTE(quiz)
            dispatch(addQuiz(newQuiz))
        }                                                                           //TODO: can i add course id to default values in reducer?
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    }

    const [active, setActive] = useState('Details');

    const handleClick = (event: any) => {
        setActive(event.target.id);
    };






    //   //useEffect Hook: fetch assignment if editing
    //   useEffect(() => {
    //     if (aid !== 'New') {                                                        //check if aid != New
    //       const current = assignments.find((assignment: any) =>
    //         assignment._id === aid);                                                //find correct assignment to update via matching id
    //       setAssignment(current)                                                    //set state of found assignment                     
    //     }
    //   }, [aid]) //dependencies array - effect will run when aid changes
    interface Field {
        label: string;
        type: "text" | "date" | "time" | "select";
        id: string;
        stateKey: keyof QuizState;
        options?: string[]; // Optional property
    }
    
    interface QuizState {
        title: string;
        description: string;
        type: string;
        date: string;
        time: string;
    }
    const fields: Field[] = [
        { label: "Quiz Name", type: "text", id: "quizTitle1", stateKey: "title" },
        { label: "Quiz Description", type: "text", id: "quizDescription", stateKey: "description" },
        { label: "Quiz Type", type: "select", id: "quizType", stateKey: "type", options: ["QUIZZES", "ASSIGNMENTS", "PROJECTS", "EXAMS"] },
        { label: "Quiz Date", type: "date", id: "quizDate", stateKey: "date" },
        { label: "Quiz Time", type: "time", id: "quizTime", stateKey: "time" },
    ];
    return (                                                                      //return edit assignment form 
        <div id="divA-mother">


            <div>
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

                            {/** full width column------------------------------------------------ */}
                            {quiz &&                                                          //conditionaly render editor page only if assignment is found

                                <div id="king-column"
                                    className=" d-flex flex-column ms-auto p-2 flex-fill">
                                    <div className="mb-3">
                                        <div id="king-column" className="d-flex flex-column ms-auto p-2 flex-fill">
                                            <div className="mb-3">
                                                {/** Quiz Name Field */}
                                                <div className="input-group mb-3">
                                                    <span
                                                        className="input-group-text"
                                                        style={{ minWidth: "185px" }} // Set a fixed width for labels
                                                        id="inputGroup-sizing-name"
                                                    >
                                                        <strong>Quiz Title</strong>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="quizTitle1"
                                                        value={quiz.title}
                                                        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
                                                        aria-label="Quiz Title"
                                                        aria-describedby="inputGroup-sizing-name"
                                                    />
                                                </div>

                                                {/** Quiz Description Field */}
                                                <div className="input-group mb-3">
                                                    <span
                                                        className="input-group-text"
                                                        style={{ minWidth: "185px" }} // Consistent label width
                                                        id="inputGroup-sizing-description"
                                                    >
                                                        <strong>Quiz Instructions</strong>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="quizDescription"
                                                        value={quiz.description}
                                                        onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
                                                        aria-label="Quiz Description"
                                                        aria-describedby="inputGroup-sizing-description"
                                                    />
                                                </div>

                                                {/** Quiz Date Field */}
                                                <div className="input-group mb-3">
                                                    <span
                                                        className="input-group-text"
                                                        style={{ minWidth: "185px" }} // Consistent label width
                                                        id="inputGroup-sizing-date"
                                                    >
                                                        <strong>Quiz Date</strong>
                                                    </span>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        id="quizDate"
                                                        value={quiz.date}
                                                        onChange={(e) => setQuiz({ ...quiz, date: e.target.value })}
                                                        aria-label="Quiz Date"
                                                        aria-describedby="inputGroup-sizing-date"
                                                    />
                                                </div>

                                                {/** Quiz Time Field */}
                                                <div className="input-group mb-3">
                                                    <span
                                                        className="input-group-text"
                                                        style={{ minWidth: "185px" }} // Consistent label width
                                                        id="inputGroup-sizing-time"
                                                    >
                                                        <strong>Quiz Time</strong>
                                                    </span>
                                                    <input
                                                        type="time"
                                                        className="form-control"
                                                        id="quizTime"
                                                        value={quiz.time}
                                                        onChange={(e) => setQuiz({ ...quiz, time: e.target.value })}
                                                        aria-label="Quiz Time"
                                                        aria-describedby="inputGroup-sizing-time"
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        {/** assignment title update */}
                                        <div id="quiz-name" className="row">
                                            <div className="col-12">
                                                <div className="input-group">
                                                    <span className="input-group-text" id="inputGroup-sizing-default">
                                                        <strong>Quiz Name</strong>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="quizTitle1"
                                                        value={quiz.title}
                                                        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
                                                        aria-label="Quiz Title"
                                                        aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </div>

                                                <div className="input-group">
                                                    <span className="input-group-text" id="inputGroup-sizing-default">
                                                        <strong>Quiz Description</strong>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="quizTitle1"
                                                        value={quiz.title}
                                                        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
                                                        aria-label="Quiz Title"
                                                        aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/** assignment description update */}
                                        <div id="quiz-description">
                                            <label htmlFor="quizDescription1"
                                                className="row-sm-2 row-form-label p-2">
                                                <h5><strong>Quiz Description</strong></h5>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="quizDescription1"
                                                rows={10}
                                                value={quiz.description}
                                                onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}>
                                            </textarea>
                                        </div>
                                    </div>


                                    {/** full width row with 2 columns------------------------------ */}
                                    <div>
                                        <div className="d-flex flex-row p-2">

                                            {/** quiz points update */}
                                            <div className="col-5">
                                                <label htmlFor="points"
                                                    className="row-form-label m-2 float-end me-5">
                                                    <h5><strong>Points</strong></h5>
                                                </label>
                                            </div>
                                            <div className="col-7">
                                                <input type="text" className="form-control" id="points" placeholder={`${quiz.points}`} />
                                            </div>
                                        </div>
                                    </div>


                                    {/** assignment group update */}
                                    <div>
                                        <div className="d-flex flex-row p-2">
                                            <div className="col-5">
                                                <label htmlFor="points"
                                                    className="row-form-label m-2 float-end me-5">
                                                    <h5><strong>Assignent Group</strong></h5>
                                                </label>
                                            </div>
                                            <div className="col-7">
                                                <select className="form-select form-control" id="assignmentGroups">
                                                    <option selected>QUIZZES</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    {/** assignment display grade as update */}
                                    <div>
                                        <div className="d-flex flex-row p-2">
                                            <div className="col-5">
                                                <label htmlFor="points"
                                                    className="row-form-label m-2 float-end me-5">
                                                    <h5><strong>Display Grade As</strong></h5>
                                                </label>
                                            </div>
                                            <div className="col-7">
                                                <select className="form-select form-control" id="quizGroups">
                                                    <option selected>Percentage</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/** assignment submission type update */}

                                    <div className="d-flex flex-row p-2">
                                        <div className="col-5">
                                            <label htmlFor="submission-type"
                                                className="row-form-label float-end me-5">
                                                <h5><strong>Submission Type</strong></h5>
                                            </label>
                                        </div>
                                        {/** submission type options box */}
                                        <div className="container col-7 border p-2">
                                            <div className="rounded-2">

                                                <select className="form-select form-control mb-4" id="submission-type">
                                                    <option selected>Online</option>
                                                </select>

                                                <h6 className="fw-bold">Online Entry Options:</h6>

                                                <div className="m-2">
                                                    <td>
                                                        <input type="checkbox" id="wd-text-entry" className="m-2" />
                                                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                                                        <input type="checkbox" id="wd-website-url" className="m-2" />
                                                        <label htmlFor="wd-website-url">Website URL</label><br />

                                                        <input type="checkbox" id="wd-media-recordings" className="m-2" />
                                                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                                                        <input type="checkbox" id="wd-student-annotation" className="m-2" />
                                                        <label htmlFor="wd-student-annotation">Student Annotations</label><br />

                                                        <input type="checkbox" id="wd-file-upload" className="m-2" />
                                                        <label htmlFor="wd-file-upload">File Uploads</label>
                                                    </td>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                    {/** assignment assign to/date update */}
                                    <div>
                                        <div className="d-flex flex-row p-2">
                                            <div className="col-5">
                                                <label htmlFor="points"
                                                    className="row-form-label float-end me-5">
                                                    <h5><strong>Assign</strong></h5>
                                                </label>
                                            </div>

                                            {/** assign update box */}
                                            <div className="container col-7 border p-2">
                                                <div className="rounded-2">
                                                    <div className="mb-3">

                                                        {/** assign to dropdown */}
                                                        <label htmlFor="assignment1"
                                                            className="row-form-label p-1">
                                                            <h6 className="fw-bold">Assign to</h6>
                                                        </label>
                                                        <div>
                                                            <input type="text"
                                                                className="form-control"
                                                                id="assignmentTitle1"
                                                                placeholder="Everyone">
                                                            </input>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/** assignment due date update */}
                                                <div>
                                                    <br></br>
                                                    <label htmlFor="wd-due-date" className="fw-bold">Due</label>
                                                    <br></br>
                                                    <input type="date" className="form-control"
                                                        id="wd-due-date"
                                                        value={quiz.dueDate}
                                                        onChange={(e) => setQuiz({
                                                            ...quiz,
                                                            dueDate: e.target.value
                                                        })} />
                                                    <br />
                                                </div>



                                                {/** row in box */}
                                                <div className="d-flex flex-row">
                                                    <div className="flex-fill">
                                                        {/** available date update */}
                                                        <label htmlFor="wd-avialable-date" className="column-form-label fw-bold">Available from</label>
                                                        <div>
                                                            <input type="date" className="form-control"
                                                                id="wd-available-date"
                                                                value={`${quiz.availableDate}`}
                                                                onChange={(e) => setQuiz({ ...quiz, availableDate: e.target.value })} />
                                                        </div>
                                                    </div>
                                                    {/** available until date update */}
                                                    <div className="flex-fill">
                                                        <label className="column-form-label fw-bold" htmlFor="wd-avialable-until"> Until</label>
                                                        <input type="date" className="form-control"
                                                            id="wd-available-until"
                                                            value={`${quiz.dueDate}`}
                                                            onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr></hr>

                                    {/** full width row ---------------------------------------------*/}
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
                                            {/* <button onClick={() => {
                                handleSaveAssignment(assignment);
                            }}
                                className="btn btn-lg bg-danger text-white m-2"
                                style={{ backgroundColor: '#f8f9fb' }}>
                                Save
                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className={`tab-page ${active === 'tab-2' ? 'active' : ''}`}>
                            <p>Questions Page</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

