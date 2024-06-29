import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";


/**
 * 
 * @returns
 * 
 * 
 */
{/** TODO: new courses are not saved on refresh - need to link them to DB*/ }
export default function Dashboard() {

  //create courses state variable and initalize with database's courses
  const [courses, setCourses] = useState(db.courses);

  // convert course into a state variable so we can change it and force a redraw of UI
  const [course, setCourse] = useState<any>({

    // create a course object with default values
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image_url: "/images/reactjs.jpg", description: "New Description"

  });

  // create addNewCourse event handler that sets courses as copy of current
  // courses state array add course at the end of the array overriding _id
  // to current time stamp
  const addNewCourse = () => {
    const newCourse = {
      ...course,    //... is object spread operator, it creates a shallow copy of the course object, spreading its properties into a new object
      _id: new Date().getTime().toString()
    }; // override id with current date and adds new course to array
    setCourses([...courses, { ...course, ...newCourse }]); //updates courses state variable by calling setCourses with new array just created
  };

  // add deleteCourse event handler accepting
  // ID of course to remove by filtering out
  // the course by its ID
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  // updateCourse: 
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };



  return (
    <div id="wd-dashboard" className="p-4" >
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr />
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />


      {/* New Course Input Form Elements:
          onChange attribute used to update field via setCourse mutator function */}
      <input value={course.name} className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />

      <input value={course.number} className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />

      <label htmlFor="wd-new-course-start-date" className="p-2">New Start Date</label>
      <input type="date" className="form-control" id="wd-new-course-start-date" value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />

      <label htmlFor="wd-new-course-end-date" className="p-2">New End Date</label>
      <input type="date" className="form-control" id="wd-due-date" value={course.endDate}
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <textarea value={course.description} className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
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
                        {course.number}: {course.name}</span>
                      <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 50, overflow: "hidden" }}>
                        {course.description} </p>
                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                      <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </button>
                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault(); // prevent default navigates to course screen
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </button>


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

