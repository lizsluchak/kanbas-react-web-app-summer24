// import React, { useState } from "react";

import * as client from "../Courses/client";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { addCourse, editCourse, updateCourse, deleteCourse, setCourses }
  from "../Courses/reducer";



/**
 * 
 * @returns
 * 
 * TODO: new courses are not saved on refresh - need to link them to DB
 */
export default function Dashboard() {
  const { cid } = useParams();
  const dispatch = useDispatch(); // get dispatch to call reducer functions 

  //component state
  const [course, setCourse] = useState<any>({});

  //application state
  const { courses } = useSelector((state: any) => state.coursesReducer); // retrieve modules state variables

  //event handlers
  const fetchCoursesEventHandler = async () => {
    const courses = await client.findAllCourses();
    dispatch(setCourses(courses));
  };
  useEffect(() => {
    fetchCoursesEventHandler();
  }, []);


  const addNewCourseEventHandler = async () => {
    const newCourse = await client.createCourse({
      name: course.name,
      number: course.number,
      startDate: course.startDate,
      endDate: course.endDate,
      description: course.description,
      image_url: "images/reactjs.jpg",
    });
    dispatch(setCourses([...courses, newCourse]));
  };












  return (



    <div id="wd-dashboard" className="p-4" >
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr />
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourseEventHandler}
        > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />


      {/* {/* New Course Input Form Elements:
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
          {courses.map((course: any) => (

            <div key={course._id} id="wd-dashboard-course" className="col" style={{ width: "300px" }}>
              <div className="card">

                <Link to={`/Kanbas/Courses/${course.number}/Home`} className="text-decoration-none" >
                  <div className="card rounded-3 overflow-hidden">
                    <img src={course.image_url} alt="reflects name of course" style={{ height: "200px" }} />

                    <div className="card-body">
                      <span className="wd-dashboard-course-link"
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                        {course.number}: {course.name}</span>
                      <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 50, overflow: "hidden" }}>
                        {course.description} </p>

                      <Link to={`/Kanbas/Courses/${course.number}/Home`} className="btn btn-primary">Go</Link>

                      <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete </button>

                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault(); // prevent default navigates to course screen
                          setCourses(course);
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

