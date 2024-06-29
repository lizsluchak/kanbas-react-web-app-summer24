import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
export default function Dashboard() {
  // const courses = db.courses;
  const [courses, setCourses] = useState(db.courses); //create courses state variable and initalize with database's courses
  return (

    //root div
    <div id="wd-dashboard" className="p-4" > 

      {/** Static Header */}
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      {/** Dyanmically Rendered Course Offerings */}
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          
          {courses.map((course) => (
      
              <div key={course._id} id="wd-dashboard-course" className="col" style={{ width: "300px" }}>
              <div className="card">

              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                <div className="card rounded-3 overflow-hidden">

                  <img src={course.image_url} style={{ height: "200px" }} />
                  <div className="card-body">

                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                      {course._id}: {course.name}
                    </span>

                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 50, overflow: "hidden" }}>
                      {course.description}
                    </p>

                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>

                  </div>
                </div>
              </Link>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

