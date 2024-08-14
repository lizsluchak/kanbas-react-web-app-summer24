// import React, { useState } from "react";
import * as userClient from "../Account/client"
import * as client from "../Courses/client";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { addCourse, editCourse, updateCourse, deleteCourse, setCourses }
    from "../Courses/reducer";
import { setCurrentUser } from "../Account/reducer";

export default function AllCourseViewDashboard() {
    const { cid } = useParams();
    const dispatch = useDispatch(); // get dispatch to call reducer functions 

    //component state
    const [course, setCourse] = useState<any>({});
    const [userEnrolledCourses, setUserEnrolledCourses] = useState<any>([]);


    //application state
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { courses } = useSelector((state: any) => state.coursesReducer); // retrieve modules state variables

    //event handlers
    const fetchCoursesEventHandler = async () => {
        const courses = await client.findAllCourses();
        dispatch(setCourses(courses));
    };
    useEffect(() => {
        fetchCoursesEventHandler();
    }, []);

    // Event handlers
    const fetchUserEnrolledCoursesEventHandler = () => {
        const userEnrolledCourses = currentUser.enrolledCourses.map((enrolledCourseId: string) =>
            courses.find((course: any) => course._id === enrolledCourseId)
        );
        setUserEnrolledCourses(userEnrolledCourses);
        
        // Perform any additional actions with the enrolledCourses, like storing them in state or dispatching an action
        console.log(userEnrolledCourses); // Example: logging the enrolled courses
    };

    useEffect(() => {
        if (currentUser && currentUser.enrolledCourses && courses.length > 0) {
            fetchUserEnrolledCoursesEventHandler();
        }
    }, [currentUser, courses, currentUser.enrolledCourses]); // Dependencies to ensure the handler runs when currentUser or courses change

    useEffect(() => {
        if (currentUser && currentUser.enrolledCourses && courses.length > 0) {
            fetchUserEnrolledCoursesEventHandler();
        }
    }, [currentUser, courses]); // Dependencies to ensure the handler runs when currentUser or courses change


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

    const enrollInCourseEventHandler = async (courseId : string) => {
      const updatedUser = {
        ...currentUser,
        enrolledCourses: [...currentUser.enrolledCourses, courseId]
      };
      await userClient.updateUser(updatedUser);
      dispatch(setCurrentUser(currentUser));
      console.log("new enrollment", updatedUser);
      fetchCoursesEventHandler();
    }












    return (

        <div id="wd-dashboard" className="p-4" >
            <br/>
            <h2 id="wd-dashboard-published">Currently Enrolled Courses ({userEnrolledCourses.length})</h2>
            <hr />
            <br />
            <br />
            <h2 id="wd-dashboard-published">Available Published Courses ({courses.length})</h2><hr />
         <br />
       


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

                      <Link to={`/Kanbas/Courses/${course.number}/Home`} className="btn btn-primary">Explore</Link>

                      <button onClick={(event) => {
                        event.preventDefault();
                        enrollInCourseEventHandler(course._id); 
    
                      }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                          <Link to={`/Kanbas/Dashboard/${course.number}`}>Enroll</Link>
                        
                        
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
};