import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    //create state variable that holds default values for the form below
    //eventually we will fetch initial data from server instead and populate
    //here to modify it with UI
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

      const [module, setModule] = useState({
        id: "1", 
        name: "NodeJS Module",
        description: "Test module to practice with client",
        course: "webdev"
      });
      const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    
    


  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>

      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         //encode title in url that updates the title
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
            //updates remote object
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />

      <h4>Retrieving Objects On My Own</h4>
      <a id="wd-retrieve-modules" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>


    </div>
);}
