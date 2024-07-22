import { Link } from "react-router-dom";
import "./index.css";
import { useLocation, useParams } from "react-router";
import { courses } from "../../Database";



export default function CoursesNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const links = [
    { label: "Home",      path: "/Kanbas/Courses/:cid/Home" },
    { label: "Modules",   path: "/Kanbas/Courses/:cid/Modules" },
    { label: "Piazza",    path: "/Kanbas/Courses/:cid/Piazza" },
    { label: "Zoom",      path: "/Kanbas/Courses/:cid/Zoom"  },
    { label: "Assignments",      path: "/Kanbas/Courses/:cid/Assignments/*" },
    { label: "Quizzes",          path: "/Kanbas/Courses/:cid/Quizzes" },
    { label: "Grades",           path: "/Kanbas/Courses/:cid/Grades"},
    { label: "People",           path: "/Kanbas/Courses/:cid/People"},
  ];

  
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
     {links.map((link) => (
        <Link to={`/Kanbas/Courses/${cid}/${link.label}`} 
              className={
                    `list-group-item
                    list-group-item-active
                    fw-bold
                    border
                    border-0
                    link-offset-1
                    ${pathname.includes(link.label) ? "bg-white text-black active" : "bg-white text-danger" }
                    `}>
               <br />
              {link.label}
        </Link>
     ))}
        </div>
  );}
   

      


        
























  // return (
  //   <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
  //    {links.map((link) => (
  //       <Link key={link.path} to={link.path} 
  //             className={
  //                   `text-decoration-underline
  //                   list-group-item
  //                   list-group-item-active
  //                   border
  //                   border-0
  //                   link-offset-1
  //                   ${pathname.includes(link.label) ? "bg-white text-black active" : "bg-white text-danger" }
  //                   `}>
  //              <br />
  //             {link.label}
  //       </Link>
  //    ))}
  //       </div>
  // );}






// export default function CoursesNavigation() {
//   const { pathname } = useLocation();
//   const isActive = (path: string) => pathname.includes(path) ? 'bg-white text-black active' : 'bg-white text-danger';
  
//   return (
//     <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      
//         <a id="wd-course-home-link" href="#/Kanbas/Courses/1234/Home"
//         className={`
//                     text-decoration-underline
//                     list-group-item
//                     list-group-item-active
//                     border
//                     border-0
//                     link-offset-1
//                     ${isActive('/Home')}`} >
//           Home
//         </a>
        
//         <a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules"
//           className={`
//                     text-decoration-underline
//                     list-group-item
//                     list-group-item-active
//                     border
//                     border-0
//                     link-offset-1
//                     ${isActive('/Modules')}`} > 
//           Modules </a>
        
//         <a id="wd-course-piazza-link" href="#/Kanbas/Courses/1234/Piazza"
//           className={`
//                     text-decoration-underline
//                     list-group-item
//                     list-group-item-active
//                     border
//                     border-0
//                     link-offset-1
//                     ${isActive('/Piazza')}`} >  
//           Piazza 
//         </a>
        
//         <a id="wd-course-zoom-link" href="#/Kanbas/Courses/1234/Zoom"
//           className={`
//           text-decoration-underline
//           list-group-item
//           list-group-item-active
//           border
//           border-0
//           link-offset-1
//           ${isActive('/Zoom')}`} >  
//           Zoom </a>
        
//         <a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"
//           className={`
//           text-decoration-underline
//           list-group-item
//           list-group-item-active
//           border
//           border-0
//           link-offset-1
//           ${isActive('/Assignments')}`} >  
//           Assignments 
//           </a>
        
//         <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes"
//           className={`
//           text-decoration-underline
//           list-group-item
//           list-group-item-active
//           border
//           border-0
//           link-offset-1
//           ${isActive('/Quizzes')}`} >  
//           Quizzes </a>
        
//         <a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades"
//           className={`
//           text-decoration-underline
//           list-group-item
//           list-group-item-active
//           border
//           border-0
//           link-offset-1
//           ${isActive('/Grades')}`} >  Grades </a>
//     </div>

//   );
// }






  