import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./Signin";


import { useSelector } from "react-redux";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";



export default function Account() {
  return (
    <div className="wd-account-screen">
      <div className="d-flex">
        <div className="d-none d-md-block">
          <AccountNavigation />
        </div>
        <div className="flex-fill p-4 pt-0">
          <Routes>
            <Route path="/" element={ <Navigate to="/Kanbas/Account/Signin" /> } />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<h1>Sign Up</h1>} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
