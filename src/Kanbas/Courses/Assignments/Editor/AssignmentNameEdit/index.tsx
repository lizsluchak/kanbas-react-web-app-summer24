import React from "react";
export default function AssignmentNameEdit() {
    return (
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
      </div>

    );
}