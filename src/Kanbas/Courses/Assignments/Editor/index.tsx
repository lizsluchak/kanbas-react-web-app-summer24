import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import "../styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import {useEffect, useState} from "react"


export default function AssignmentEditor() {
  const { aid, cid } = useParams();   //capture course id and assignment id, if there is one
  const dispatch = useDispatch();
  const {assignments} = useSelector((state: any) => state.assignmentsReducer);
  const [assignment, setAssignment] = useState<any>({
    title: 'New Assignment',
    description: "New Description", 
    points: 100, 
    dueDate: "", 
    availableDate: "",
  

 });

 const navigate = useNavigate();
// let assignment = assignments.find((assignment: any) => assignment._id === aid);
  // if (!assignment) {
  //   <
  // }

  const saveAssignment = () => {
    if(aid !== 'New'){
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({...assignment, course: cid}))
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  }

  useEffect(() => {
    if(aid !== 'New') {
      const a = assignments.find((assignment: any) => assignment._id === aid);
      setAssignment(a)
    }
  }, [aid])

  return (
    <div id="divA-mother">


      {/** divB1-full width column------------------------------------------- */}
      <div id="divB1-flex-column" className="d-flex ms-auto p-2">

        {assignment &&
          <div className="flex-column flex-fill">
          <div className="mb-3">
          
            <label htmlFor="assignmentTitle1"
              className="row-sm-2 row-form-label p-1">
              <h5>Assignment Name</h5>
            </label>

            <div>
              <input type="text"
                className="form-control"
                id="assignmentTitle1"
                value = {`${assignment.title}`}
                onChange={(e) => setAssignment({...assignment, title: e.target.value})}>
              </input>
            </div>

            <label htmlFor="assignmentDescription1"
              className="row-sm-2 row-form-label p-2">
               <h5>Assignment Description</h5> 
            </label>

            <div>
              <textarea
                className="form-control"
                id="assignmentDescription1"
                rows={10}
                placeholder={assignment.description}>
              </textarea>
            </div>
    
          </div>


          {/** divB2-row wiht 2 columns---------------------------------------- */}



          <div>
            <div className="d-flex flex-row p-2">
              <div className="col-5">
                <label htmlFor="points"
                  className="row-form-label m-2 float-end me-5">
                  Points
                </label>
              </div>


              <div className="col-7">
                <input type="text" className="form-control" id="assignmentGroups" placeholder={`${assignment.points}`} />



              </div>

            </div>






          </div>

          <div>
            <div className="d-flex flex-row p-2">
              <div className="col-5">
                <label htmlFor="points"
                  className="row-form-label m-2 float-end me-5">
                  Assignment Group
                </label>
              </div>


              <div className="col-7">
                <select className="form-select form-control" id="assignmentGroups">
                  <option selected>ASSIGNMENTS</option>

                </select>
              </div>

            </div>
          </div>



          <div>
            <div className="d-flex flex-row p-2">
              <div className="col-5">
                <label htmlFor="points"
                  className="row-form-label m-2 float-end me-5">
                  Display Grade as
                </label>
              </div>


              <div className="col-7">
                <select className="form-select form-control" id="assignmentGroups">
                  <option selected>Percentage</option>

                </select>
              </div>

            </div>
          </div>


          <div>
            <div className="d-flex flex-row p-2">
              <div className="col-5">
                <label htmlFor="points"
                  className="row-form-label float-end me-5">
                  Submission Type
                </label>
              </div>


              <div className="container col-7 border p-2">
                <div className="rounded-2">


                  <select className="form-select form-control mb-4" id="submission-type">
                    <option selected>Online</option>
                  </select>


                  <h6 className="fw-bold">Online Entry Options:</h6>

                  <div className="m-2">
                    <td>
                      <input type="checkbox" id="wd-text-entry" className="m-2" />
                      <label htmlFor="wd-text-entry">Text Entry</label>
                      <br />

                      <input type="checkbox" id="wd-website-url" className="m-2"/>
                      <label htmlFor="wd-website-url">Website URL</label><br />

                      <input type="checkbox" id="wd-media-recordings" className="m-2"/>
                      <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                      <input type="checkbox" id="wd-student-annotation" className="m-2" />
                      <label htmlFor="wd-student-annotation">Student Annotations</label><br />

                      <input type="checkbox" id="wd-file-upload"  className="m-2"/>
                      <label htmlFor="wd-file-upload">File Uploads</label>


                    </td>
                  </div>

                </div>

              </div>
            </div>
          </div>





          <div>
            <div className="d-flex flex-row p-2">
              <div className="col-5">
                <label htmlFor="points"
                  className="row-form-label float-end me-5">
                  Assign
                </label>
              </div>


              <div className="container col-7 border p-2">
                <div className="rounded-2">



                  <div className="mb-3">
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
                <div>





                  <br></br>
                  <label htmlFor="wd-due-date" className="fw-bold">Due</label>
                  <br></br>
                  <input type="date" className="form-control"
                    id="wd-due-date"
                    value="2024-05-13" /><br />
                    </div>




                  <div className="d-flex flex-row">
                    <div className="flex-fill">
                      <label htmlFor="wd-avialable-from" className="column-form-label fw-bold">Available from</label>


                      <div>

                        <input type="date" className="form-control"
                          id="wd-available-from"
                          value={`${assignment.availableDate}`} />
                      </div>
                    </div>

                    <div className="flex-fill">
                      <label className="column-form-label fw-bold" htmlFor="wd-avialable-until"> Until</label>


                      <input type="date" className="form-control"
                        id="wd-available-until"
                        value={`${assignment.dueDate}`} />
                    </div>





                  </div>






                </div>

              </div>

            </div>

            <hr></hr>
    
          <div className="d-flex flex-row flex-fill justify-content-end">
            <div><button className="btn btn-lg border-secondary m-2" style={{ backgroundColor: '#f8f9fb', textDecoration: "none" }}> <Link to={`/Kanbas/Courses/${cid}/Assignments/`} className="custom-link"> Cancel </Link></button></div>

           <div> <button onClick={saveAssignment} className="btn btn-lg bg-danger text-white m-2" style={{ backgroundColor: '#f8f9fb' }}>
             {/* <Link to={`/Kanbas/Courses/${cid}/Assignments/`} className="custom-link">  </Link> */}
             Save
             </button></div>
          </div>
   
          </div>
        }




      </div>
      </div>



  );
}

