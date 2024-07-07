import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {

    /**
     * Component State Variable for Assignment:
     * 
     * Currently sets default values here, in future will pull them from server
     */
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

    /**
     * Component State Variable for Module
     */
    const [module, setModule] = useState({
        id: "1",
        name: "NodeJS Module",
        description: "Test module to practice with client",
        course: "webdev"
    });
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

    const handleCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAssignment({ ...assignment, completed: e.target.checked });
    };




    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            {/**get assignment button */}
            <a id="wd-retrieve-assignments" className="btn btn-primary m-2"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            {/**get module button */}
            <h5>Retrieving Objects On My Own</h5>
            <a id="wd-retrieve-modules" className="btn btn-primary m-2"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr />

            <h4>Retrieving Properties</h4>
            {/**get assignment property - title button */}
            <a id="wd-retrieve-assignment-title" className="btn btn-primary m-2"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>
            <h5>Retrieving Properties On My Own - Module Name</h5>
            {/**get module property - name button */}
            <a id="wd-retrieve-module-name" className="btn btn-primary m-2"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Name
            </a><hr />

            <h4>Modifying Properties</h4>
            {/**modify assignment propery - string */}
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                //encode title in url that updates the title
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <label htmlFor="wd-assignment-title"
                className="row-sm-2 row-form-label p-1">
                <h5><strong>Update Assignment Title</strong></h5>
            </label>
            <input className="form-control w-75" id="wd-assignment-title"
                value={assignment.title} onChange={(e) =>
                    //updates remote object
                    setAssignment({ ...assignment, title: e.target.value })} />
            <br />

            <h5>Modifying Properties On My Own</h5>
            {/**modify module property - name  */}
            <label htmlFor="wd-module-name"
                className="row-sm-2 row-form-label p-1">
                <h5><strong>Update Module Name</strong></h5>
            </label>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name
            </a>

            <input className="form-control w-75" id="wd-module-name"
                value={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <hr />

            {/**modify assignment score propery - number  */}
            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <label htmlFor="wd-assignment-score"
                className="row-sm-2 row-form-label p-1">
                <h5><strong>Update Assignment Score</strong></h5>
            </label>
            <input className="form-control w-75" id="wd-assignment-score"
                type="number" value={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
            <hr />

            {/* Modify assignment completed property - boolean */}

            <a
                id="wd-update-assignment-completed"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <h5>
                <strong>Update Assignment Completion</strong>
            </h5>

            <input
                type="checkbox"
                id="wd-assignment-completed"
                checked={assignment.completed}
                onChange={handleCompletedChange} />
            <label className="form-check-label ms-2" htmlFor="wd-assignment-completed">
                Assignment Completed
            </label>
            <hr/>
            <br/>

            {/**modify module property - description  */}
            <label htmlFor="wd-module-description"
                className="row-sm-2 row-form-label p-1">
                <h5><strong>Update Module Description</strong></h5>
            </label>
            <a id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Description
            </a>

            <textarea className="form-control w-75" id="wd-module-description"
                value={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })} />
            <hr />










        </div>
    );
}
