import React from "react";
import "./index.css";
import { useLocation } from "react-router";


export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname.includes(path) ? 'bg-white text-black active' : 'bg-white text-danger';
  
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      
        <a id="wd-course-home-link" href="#/Kanbas/Courses/1234/Home"
        className={`
                    text-decoration-underline
                    list-group-item
                    list-group-item-active
                    border
                    border-0
                    link-offset-1
                    ${isActive('/Home')}`} >
          Home
        </a>
        
        <a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules"
          className={`
                    text-decoration-underline
                    list-group-item
                    list-group-item-active
                    border
                    border-0
                    link-offset-1
                    ${isActive('/Modules')}`} > 
          Modules </a>
        
        <a id="wd-course-piazza-link" href="#/Kanbas/Courses/1234/Piazza"
          className={`
                    text-decoration-underline
                    list-group-item
                    list-group-item-active
                    border
                    border-0
                    link-offset-1
                    ${isActive('/Piazza')}`} >  
          Piazza 
        </a>
        
        <a id="wd-course-zoom-link" href="#/Kanbas/Courses/1234/Zoom"
          className={`
          text-decoration-underline
          list-group-item
          list-group-item-active
          border
          border-0
          link-offset-1
          ${isActive('/Zoom')}`} >  
          Zoom </a>
        
        <a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"
          className={`
          text-decoration-underline
          list-group-item
          list-group-item-active
          border
          border-0
          link-offset-1
          ${isActive('/Assignments')}`} >  
          Assignments 
          </a>
        
        <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes"
          className={`
          text-decoration-underline
          list-group-item
          list-group-item-active
          border
          border-0
          link-offset-1
          ${isActive('/Quizzes')}`} >  
          Quizzes </a>
        
        <a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades"
          className={`
          text-decoration-underline
          list-group-item
          list-group-item-active
          border
          border-0
          link-offset-1
          ${isActive('/Grades')}`} >  Grades </a>
    </div>

  );
}






  