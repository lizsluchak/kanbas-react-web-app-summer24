import React from "react";
export default function AssignmentGroupsEdit() {
    return (
        <div>
        <div className="d-flex flex-row">
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

    );
}