import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (

    <div id="wd-kanbas-navigation" className="list-group rounded-0">
     
     {/**First Item: Northeastern Logo/Link */}
      <a id="wd-neu-link" 
        target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item 
                  bg-black border-0">
          <br/>
          <img src="/images/NEU.png" 
          width="75px" />
          <br /> 
          <br />
      </a>

      {/**Second Item: Account Icon/Link */}
      <a id="wd-account-link" 
        href="#/Kanbas/Account"
        className="list-group-item 
                  text-white
                  bg-black 
                  text-center border-0">
        
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account 
      </a>

      {/**Third Item: Dashboard Icon/Link - Selected*/}
      <a id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
        className="list-group-item 
                  text-center border-0
                  bg-white 
                  text-danger">
        <AiOutlineDashboard className="fs-1 
                                      text-danger" />
        <br />
        Dashboard 
      </a>
      
      {/**Fourth Item: Courses Icon/Link */}
      <a id="wd-course-link" 
        href="#/Kanbas/Courses"
        className="list-group-item 
                  text-white
                  bg-black 
                  text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses 
      </a>

      {/**Fifth Item: Calendar Icon/Link */}
      <a id="wd-course-link" 
        href="#/Kanbas/Courses"
        className="list-group-item 
                  text-white
                  bg-black 
                  text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Calendar 
      </a>

      {/**Sixth Item: Inbox Icon/Link */}
      <a id="wd-course-link" 
        href="#/Kanbas/Courses"
        className="list-group-item 
                  text-white
                  bg-black 
                  text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Inbox 
      </a>

      {/**Seventh Item: Labs Icon/Link */}
      <a id="wd-course-link" 
        href="#/Kanbas/Courses"
        className="list-group-item 
                  text-white
                  bg-black 
                  text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Labs 
      </a>



      {/* complete styling the rest of the links */}
    </div>

);}















// VERSION 1: WITHOUT CSS
// export default function CoursesNavigation() {
//     return (
//       <ul id="wd-courses-navigation">
//         <li><a id="wd-course-home-link"    href="#/Kanbas/Courses/1234/Home">Home</a></li>
//         <li><a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules">Modules</a></li>
//         <li><a id="wd-course-piazza-link"  href="#/Kanbas/Courses/1234/Piazza">Piazza</a></li>
//         <li><a id="wd-course-zoom-link"    href="#/Kanbas/Courses/1234/Zoom">Zoom</a></li>
//         <li><a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments">Assignments</a></li>
//         <li><a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes">Quizzes</a></li>
//         <li><a id="wd-course-grades-link"  href="#/Kanbas/Courses/1234/Grades">Grades</a></li>
//       </ul>
//   );}
  