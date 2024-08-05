// Import necessary libraries and hooks from React and Redux
import React, { useState, useEffect } from "react"; 
import { useSelector } from "react-redux"; // useSelector is used to access Redux store state
import { Navigate } from "react-router-dom"; // Navigate is used for redirecting to different routes



export default function ProtectedRoute({ children }: { children: any }) {
  // ---------------------------------------------------------------------------
  // Destructure the children parameter to reference the protected component
  // Get the currentUser from the Redux store using a selector
  console.log(children); 
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  // Check if a user is signed in
  if (currentUser) {
    return children; // Allow access to the protected route by returning the children component
  } else {
    return <Navigate to="/Kanbas/Account/Signin" />; // Redirect to the Sign in screen if not signed in
  }
}
