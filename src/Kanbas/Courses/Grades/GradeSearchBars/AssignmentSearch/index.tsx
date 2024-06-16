import React from "react";
import { FaSearch } from "react-icons/fa";

export default function AssignmentSearch() {
  return (


    <div className="p-3">
      <label htmlFor="searchStudents" className="form-label" style={{ textDecoration: "none", fontWeight: "bold" }}>Assignment Names </label>

      <div className="input-group mb-3">

        <span className="input-group-text bg-white border-end-0"><FaSearch /></span>
        <input type="text" placeholder="Search..."
          className="border-start-0 form-control" />
      </div>

    </div>





  );
}