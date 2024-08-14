// import React, { useState } from "react";
import * as userClient from "../Account/client"
import * as client from "../Courses/client";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { addCourse, editCourse, updateCourse, deleteCourse, setCourses }
  from "../Courses/reducer";
import { setCurrentUser } from "../Account/reducer";



export default function Dashboard() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // get dispatch to call reducer functions 

  //component state
  const [course, setCourse] = useState<any>({
    // create a course object with default values
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description"


  });
  // const [userEnrolledCourses, setUserEnrolledCourses] = useState<any>([]);

  //application state
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userCourseIds = currentUser.enrolledCourses;
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
    console.log(newCourse);

    // Add the new course ID to the faculty member's enrolled courses
    const updatedUser = {
      ...currentUser,
      enrolledCourses: [...currentUser.enrolledCourses, newCourse._id]
    };
    await userClient.updateUser(updatedUser);
    dispatch(setCurrentUser(updatedUser));
    console.log(updatedUser);
  };


  const updateCourseHandler = async (course: any) => {
    const status = await client.updateCourse(course);
    dispatch(updateCourse(course));
  };

  const deleteCourseHandler = async (course: any) => {
    try {
      // Delete the course
      await client.deleteCourse(course._id);
      dispatch(deleteCourse(course._id));

      // Flatten the enrolledCourses array and remove the deleted course ID
      const flattenedCourses = currentUser.enrolledCourses.flat();
      const updatedUser = {
        ...currentUser,
        enrolledCourses: flattenedCourses.filter((id: string) => id !== course._id)
      };

      // Update the user in the backend and Redux state
      await userClient.updateUser(updatedUser);
      dispatch(setCurrentUser(updatedUser));

    } catch (error) {
      console.error("Failed to delete course or update user:", error);
      alert("An error occurred while deleting the course. Please try again later.");
    }
  };













  return (




    <div id="wd-dashboard" className="p-4" >
      {currentUser.role === "FACULTY" && (

        <div>
          <h1 id="wd-dashboard-title">Professor {currentUser.firstName}'s Faculty Dashboard</h1> <hr />

          <h5><strong>Create/Edit Course</strong>
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => addNewCourseEventHandler()} > Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={() => updateCourseHandler(course)} id="wd-update-course-click">
              Update
            </button></h5>
          <br />


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

          <h2 id="wd-dashboard-published">Your Published Courses ({currentUser.enrolledCourses.length})</h2><hr />

          {/** Dyanmically Rendered Course Offerings */}
          <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses
                .filter((course: any) => userCourseIds.includes(course._id))
                .map((course: any) => (

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
                              deleteCourseHandler(course);
                            }} className="btn btn-danger float-end"
                              id="wd-delete-course-click">
                              Delete </button>

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


      )} :
      {/* ------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------ */}
      {currentUser.role === "STUDENT" && (

        <div>
          <h1 id="wd-dashboard-title">{currentUser.firstName + ' ' + currentUser.lastName} 's Student Dashboard</h1> <hr />

          <h4><strong>Enrolled Courses ({currentUser.enrolledCourses.length})</strong>
            <button className="btn btn-success float-end"
               id="wd-update-course-click" onClick={() => navigate('/Kanbas/Account/Enroll')}>
              Enroll
            </button></h4>
          <br />

          

          {/** Dyanmically Rendered Course Offerings */}
          <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses
                .filter((course: any) => userCourseIds.includes(course._id))
                .map((course: any) => (

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
                              deleteCourseHandler(course);
                            }} className="btn btn-danger float-end"
                              id="wd-delete-course-click">
                              Delete </button>

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




      )
      }
    </div>
  );
}












{/* <h2 id="wd-dashboard-published">All Courses ({courses.length})</h2><hr />
{courses
          .map((course: any) => (

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
          ))}  */}
{/* </div >
      </div >
    </div > */}



