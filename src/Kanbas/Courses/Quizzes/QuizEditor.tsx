import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react"
import "./styles.css";
import * as client from "./client";
import { addQuiz, updateQuiz } from "./reducer";




export default function QuizEditor() {
    const { qid, cid } = useParams();                                             //capture course id and assignment id from url
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);        //get assignments from redux store 
    const dispatch = useDispatch();                                               //instantiate dispatch for redux actions
    const navigate = useNavigate();                                               //instantiate navigate for routing


    //useState Hook: add state to functional component
    const [quiz, setQuiz] = useState<any>({                                       //initalize object state variable, assignment, with type `any`
        qid: "New QID",
        title: 'New Quiz for Course: ' + { cid },                                              //set default state 
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
     * Save Assignment Function:
     * If assignment has url id of "New" -> dispatch updateAssignment reducer
     * function, else -> dispatch addAssignment reducer function and then navigate 
     * back to assignments page.
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

    const [active, setActive] = useState('tab-1');

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


    return (                                                                      //return edit assignment form 
        <div id="divA-mother">

<div>
      <div className="container">
        <div className="tabs">
          <button
            className={`tab-button ${active === 'tab-1' ? 'active' : ''}`}
            id="tab-1"
            onClick={handleClick}
          >
            Tab 1
          </button>
          <button
            className={`tab-button ${active === 'tab-2' ? 'active' : ''}`}
            id="tab-2"
            onClick={handleClick}
          >
            Tab 2
          </button>
          <button
            className={`tab-button ${active === 'tab-3' ? 'active' : ''}`}
            id="tab-3"
            onClick={handleClick}
          >
            Tab 3
          </button>
        </div>
        <div className="tabs-content">
          <div className={`tab-page ${active === 'tab-1' ? 'active' : ''}`}>
            <p>This is page 1</p>
          </div>
          <div className={`tab-page ${active === 'tab-2' ? 'active' : ''}`}>
            <p>This is page 2</p>
          </div>
          <div className={`tab-page ${active === 'tab-3' ? 'active' : ''}`}>
            <p>This is page 3</p>
          </div>
        </div>
      </div>
    </div>

            {/** full width column------------------------------------------------ */}
            {quiz &&                                                          //conditionaly render editor page only if assignment is found
                <div id="king-column"
                    className=" d-flex flex-column ms-auto p-2 flex-fill">
                    <div className="mb-3">

                        {/** assignment title update */}
                        <div id="assignment-name">
                            <label htmlFor="assignmentTitle1"
                                className="row-sm-2 row-form-label p-1">
                                <h5><strong>Assignment Name</strong></h5>
                            </label>
                            <input type="text"
                                className="form-control"
                                id="assignmentTitle1"
                                value={`${quiz.title}`}
                                onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}>
                            </input>
                        </div>

                        {/** assignment description update */}
                        <div id="assignment-description">
                            <label htmlFor="assignmentDescription1"
                                className="row-sm-2 row-form-label p-2">
                                <h5><strong>Assignment Description</strong></h5>
                            </label>
                            <textarea
                                className="form-control"
                                id="assignmentDescription1"
                                rows={10}
                                value={quiz.description}
                                onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}>
                            </textarea>
                        </div>
                    </div>


                    {/** full width row with 2 columns------------------------------ */}
                    <div>
                        <div className="d-flex flex-row p-2">

                            {/** assignment points update */}
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
                                    <option selected>ASSIGNMENTS</option>
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
                                <select className="form-select form-control" id="assignmentGroups">
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
    );
}

