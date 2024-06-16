import React from "react";

export default function AssignmentEditor() {
  return (
    <div id="divA-mother">


      {/** divB1-full width column------------------------------------------- */}
      <div id="divB1-flex-column" className="d-flex ms-auto p-2">
        <div className="flex-column flex-fill">
          <div className="mb-3">
            <label htmlFor="assignment1"
              className="row-sm-2 row-form-label p-1">
              <h5>Assignment Name</h5>
            </label>

            <div>
              <input type="text"
                className="form-control"
                id="assignmentTitle1"
                placeholder="A1">

              </input>
            </div>

            <label htmlFor="assignmentDescription1"
              className="row-sm-2 row-form-label p-1">
            </label>

            <div>
              <textarea
                className="form-control"
                id="assignmentTitle1"
                rows={10}
                placeholder="The assignment is available online Submit a 
                      link to the landing page of your Web application running on Netlify. the The landing page should include the following: Your full name and section links to each of the lab assignments, link to the Kanbas application, Links to all relevant source code respositories. The kanbas application should include a link to navigate back to the landing page.
                      ">
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
                <input type="text" className="form-control" id="assignmentGroups" placeholder="100" />



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
                      <input type="checkbox" id="wd-text-entry" />
                      <label htmlFor="wd-text-entry">Text Entry</label>
                      <br />

                      <input type="checkbox" id="wd-website-url" />
                      <label htmlFor="wd-website-url">Website URL</label><br />

                      <input type="checkbox" id="wd-media-recordings" />
                      <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                      <input type="checkbox" id="wd-student-annotation" />
                      <label htmlFor="wd-student-annotation">Student Annotations</label><br />

                      <input type="checkbox" id="wd-file-upload" />
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
                          value="2024-05-06" />
                      </div>
                    </div>

                    <div className="flex-fill">
                      <label className="column-form-label fw-bold" htmlFor="wd-avialable-until"> Until</label>


                      <input type="date" className="form-control"
                        id="wd-available-until"
                        value="2024-05-20" />
                    </div>





                  </div>






                </div>

              </div>

            </div>

            <hr></hr>
    
          <div className="d-flex flex-row flex-fill justify-content-end">
            <button className="btn btn-lg border-secondary m-2" style={{ backgroundColor: '#f8f9fb' }}>Cancel</button>
            <button className="btn btn-lg bg-danger text-white m-2">Save</button>
          </div>
   
          </div>





      </div>
      </div>




      

  );
}

