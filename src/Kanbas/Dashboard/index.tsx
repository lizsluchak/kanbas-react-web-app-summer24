import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
export default function Dashboard() {

  //create courses state variable and initalize with database's courses
  const [courses, setCourses] = useState(db.courses); 
  
  // create a course object with default values
  const course: any = {
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image_url: "/images/reactjs.jpg", description: "New Description"
  };

  // create addNewCourse event handler that sets courses as copy of current
  // courses state array add course at the end of the array overriding _id
  // to current time stamp
  const addNewCourse = () => {
    const newCourse = { ...course,    //... is object spread operator, it creates a shallow copy of the course object, spreading its properties into a new object
                        _id: new Date().getTime().toString() }; // override id with current date and adds new course to array
    setCourses([...courses, { ...course, ...newCourse }]); //updates courses state variable by calling setCourses with new array just created
  };

  return (

    //root div
    <div id="wd-dashboard" className="p-4" > 

      {/** Static Header */}
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr />

      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
      </h5><hr />


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

