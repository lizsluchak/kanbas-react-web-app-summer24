export default function AssignmentEditor() {
    return (
      <div id="divA-mother">
        
        
        {/** divB1-full width column------------------------------------------- */}
        <div id="divB1-flex-column" className="d-flex ms-auto bg-black">
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
            <div className="bg-secondary">
              <div className="bg-danger d-flex flex-row">
                <div className="col-5">
                    <label htmlFor="points"
                        className="col-form-label float-end me-5">
                        Points
                    </label>
                </div>

                <div className="col-7">
                <input type="text" 
                            className="form-control"
                            id="points" 
                            value="100" />
                </div>

            </div>
            
          
            </div>

            <div className="bg-secondary">
              <div className="bg-danger d-flex flex-row">
                <div className="col-5">
                    <label htmlFor="points"
                        className="row-form-label float-end me-5">
                        Assignment Group
                    </label>
                </div>
      

                <div className="col-7">
                <input type="text" 
                            className="form-control"
                            id="points" 
                            value="100" />
                </div>

            </div>
            </div>



            <div className="bg-secondary">
              <div className="bg-danger d-flex flex-row">
                <div className="col-5">
                    <label htmlFor="points"
                        className="row-form-label float-end me-5">
                        Display Grade as
                    </label>
                </div>
      

                <div className="col-7">
                <input type="text" 
                            className="form-control"
                            id="points" 
                            value="100" />
                </div>

            </div>
            </div>


            <div className="bg-secondary">
              <div className="bg-danger d-flex flex-row">
                <div className="col-5">
                    <label htmlFor="points"
                        className="row-form-label float-end me-5">
                        Submission Type
                    </label>
                </div>
      

                <div className="col-7">
                <input type="text" 
                            className="form-control"
                            id="points" 
                            value="100" />
                </div>

            </div>
            </div>




            <div className="bg-secondary">
              <div className="bg-danger d-flex flex-row">
                <div className="col-5">
                    <label htmlFor="points"
                        className="row-form-label float-end me-5">
                        Assign
                    </label>
                </div>
      

                <div className="col-7">
                <input type="text" 
                            className="form-control"
                            id="points" 
                            value="100" />
                </div>

            </div>
            </div>


            </div>

    
        </div>

      


      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h4>Assignment Name</h4></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
        The assignment is available online Submit a 
link to the landing page of your Web application running on Netlify. the The landing page should include the following: Your full name and section links to each of the lab assignments, link to the Kanbas application, Links to all relevant source code respositories. The kanbas application should include a link to navigate back to the landing page.

        </textarea>
        <br />

        <table>
        <br></br>
          <tr>
            <td align="center">
              <label htmlFor="wd-points">Points</label>
            </td>

            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

            <br></br>

          <tr>      
            <td>
              <label htmlFor="wd-group">Assignment Group</label>
            </td>

            <td>
            <select id="wd-group">

            <option selected value="ASSIGNMENTS">
                ASSIGNMENTS</option>
            </select>
            </td>
          </tr>

          <br></br>
          <tr>      
            <td>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>

            <td>
            <select id="wd-display-grade-as">

            <option selected value="PERCENTAGE">
                Percentage</option>
            </select>
            </td>
          </tr>


          <br></br>
          <tr>      
            <td>
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>

            <td>
            <select id="wd-submission-type">
            <option selected value="PERCENTAGE">
                Online</option>
            </select>
        
            </td>
          </tr>

          <tr><td></td>
          <td>
            <p></p>
          <label htmlFor="wd-submission-type">Online Entry Options</label> <br></br>
          <input type="checkbox" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotations</label><br/>

            <input type="checkbox" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>


          </td>

    
          </tr>

          <br></br>

          <tr>      
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>

            <td>
           
            <input type="text" id="wd-text-entry" value="Everyone"/>
            </td>
          </tr>



          <tr>      
            <td></td>
            <br></br>
              <label htmlFor="wd-due-date">Due</label>
              <br></br>
              <input type="date"
      id="wd-due-date"
      value="2024-05-13"/><br/>
          

          <br></br>
              <label htmlFor="wd-avialable-from">Available from</label>
            
              <label htmlFor="wd-avialable-until"> Until</label>
              <br></br>
              <input type="date"
      id="wd-available-from"
      value="2024-05-06"/>

<input type="date"
      id="wd-available-until"
      value="2024-05-20"/>

          </tr>


        
        </table>
        <hr></hr>
        <body>
        <div>
        <button>Cancel</button>
        <button>Save</button>
        </div>
        </body>
      </div>




      </div>
      
  );}
  
