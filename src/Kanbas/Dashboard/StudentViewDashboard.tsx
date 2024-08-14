import React, { useState, useEffect } from "react";
import * as client from "../Courses/client";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addCourse, editCourse, updateCourse, deleteCourse, setCourses } from "../Courses/reducer";

export default function StudentViewDashboard() {
    const { cid } = useParams();
    
    const dispatch = useDispatch(); // get dispatch to call reducer functions 
    const navigate = useNavigate();

    // Component state
    const [course, setCourse] = useState<any>({});
    const [userEnrolledCourses, setUserEnrolledCourses] = useState<any>([]);
    const [showModal, setShowModal] = useState<boolean>(false); // State for modal visibility

    // Application state
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { courses } = useSelector((state: any) => state.coursesReducer); // retrieve modules state variables

    // Fetch all courses
    const fetchCoursesEventHandler = async () => {
        const courses = await client.findAllCourses();
        dispatch(setCourses(courses));
    };

    useEffect(() => {
        fetchCoursesEventHandler();
    }, []);

    // Fetch user enrolled courses
    const fetchUserEnrolledCoursesEventHandler = () => {
        const enrolledCourses = currentUser.enrolledCourses.map((enrolledCourseId: string) =>
            courses.find((course: any) => course._id === enrolledCourseId)
        ).filter(Boolean);

        setUserEnrolledCourses(enrolledCourses);
      

        // Show modal if no courses are enrolled
        setShowModal(enrolledCourses.length === 0);
    };

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

    return (
        <div id="wd-dashboard" className="p-4">
            <h1 id="wd-dashboard-title">{currentUser.firstName + ' ' + currentUser.lastName}'s Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">My Enrolled Courses ({userEnrolledCourses.length})</h2>
            <hr />
            

          
            {showModal && (
                <div className="modal show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">You are not enrolled in any courses. Please enroll</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>Please Enroll in a Course.</p>

                                            {/** Dynamically Rendered Course Offerings */}
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course: any) => (
                        <div key={course._id} id="wd-dashboard-course" className="col" style={{ width: "300px" }}>
                            <div className="card">
                                <Link to={`/Kanbas/Courses/${course.number}/Home`} className="text-decoration-none">
                                    <div className="card rounded-3 overflow-hidden">
                                        <img src={course.image_url} alt="reflects name of course" style={{ height: "200px" }} />

                                        <div className="card-body">
                                            <span
                                                className="wd-dashboard-course-link"
                                                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                                            >
                                                {course.number}: {course.name}
                                            </span>
                                            <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 50, overflow: "hidden" }}>
                                                {course.description}
                                            </p>

                                            <Link to={`/Kanbas/Courses/${course.number}/Home`} className="btn btn-primary">
                                                Go
                                            </Link>

                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>

                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault(); // prevent default navigates to course screen
                                                    setCourses(course);
                                                }}
                                                className="btn btn-warning me-2 float-end"
                                            >
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
                            <div className="modal-footer">
                            <button type="button" className="btn-large" onClick={() => navigate('/Kanbas/Account/Enroll')}>Browse Courses</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            )}

            <br />

            {/** Dynamically Rendered Course Offerings */}
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {userEnrolledCourses.map((course: any) => (
                        <div key={course._id} id="wd-dashboard-course" className="col" style={{ width: "300px" }}>
                            <div className="card">
                                <Link to={`/Kanbas/Courses/${course.number}/Home`} className="text-decoration-none">
                                    <div className="card rounded-3 overflow-hidden">
                                        <img src={course.image_url} alt="reflects name of course" style={{ height: "200px" }} />

                                        <div className="card-body">
                                            <span
                                                className="wd-dashboard-course-link"
                                                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                                            >
                                                {course.number}: {course.name}
                                            </span>
                                            <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 50, overflow: "hidden" }}>
                                                {course.description}
                                            </p>

                                            <Link to={`/Kanbas/Courses/${course.number}/Home`} className="btn btn-primary">
                                                Go
                                            </Link>

                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>

                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault(); // prevent default navigates to course screen
                                                    setCourses(course);
                                                }}
                                                className="btn btn-warning me-2 float-end"
                                            >
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
