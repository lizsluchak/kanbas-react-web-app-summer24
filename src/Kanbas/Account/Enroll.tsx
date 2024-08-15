import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import StudentViewDashboard from "../Dashboard/StudentViewDashboard";
import AllCourseViewDashboard from "../Dashboard/AllCourseViewDashboard";

export default function Enroll() {



  return (
    <div className="wd-profile-screen">
      <h1>Enroll in Kanbas Courses:</h1>
      
      <AllCourseViewDashboard />
      

      

    </div>
  );
}
