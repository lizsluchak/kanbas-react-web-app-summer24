// import React, { useState } from "react";

import * as client from "../Courses/client";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { addCourse, editCourse, updateCourse, deleteCourse, setCourses }
  from "../Courses/reducer";
import FacultyViewDashboard from "./FacultyViewDashboard";
import StudentViewDashboard from "./StudentViewDashboard";



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
  const [userEnrolledCourses, setUserEnrolledCourses] = useState<any>([]);
  console.log("user enrolled courses", userEnrolledCourses);

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

    if (userEnrolledCourses.length === 0) {


    } else {
      setUserEnrolledCourses(userEnrolledCourses);
    }

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












  return (
    <div>
      {currentUser.role === 'STUDENT' ? (
        <StudentViewDashboard />

      ) : currentUser.role === 'FACULTY' ? (
        <FacultyViewDashboard />
      ) : (
        <div>Unauthorized</div> // Handle cases where the role doesn't match expected values
      )}
    </div>
  );
};



      


