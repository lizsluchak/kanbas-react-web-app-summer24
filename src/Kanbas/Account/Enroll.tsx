import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import StudentViewDashboard from "../Dashboard/StudentViewDashboard";
import AllCourseViewDashboard from "../Dashboard/AllCourseViewDashboard";

export default function Enroll() {


  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };

  useEffect(() => { fetchProfile(); }, []);

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  return (
    <div className="wd-profile-screen">
      <h1>Enroll in Kanbas Courses:</h1>
      
      <AllCourseViewDashboard />
      

      

    </div>
  );
}
