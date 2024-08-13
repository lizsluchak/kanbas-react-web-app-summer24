import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import "./index.css"

/**
 * Data Driven Kanbas Navigation Function:
 * 
 * Instead of hardcoding a list of anchor tags, the Kanabs Sidebar Main 
 * Navigation system uses a JSON object, a data structure, that configures the 
 * labels, paths, and icons as an array. The linkes are then generated 
 * dynamically via a map function. they are iterrated over. we can map over the data structure 
 * creating the links dynamically.list in HTML, we can create a data structure that configures the labels, paths, and icons as an array and then we can map over the data structure creating the links dynamically.
 */
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];
  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a id="wd-account-link" target="_blank" 
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0">
          <img src="/images/NEU.png" width="75px" /></a>
      
      <Link key="/Kanbas/Account" to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>

        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>

      {links.map((link) => (
        <Link key={link.path} to={link.path} 
              className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
              {link.icon({ className: "fs-1 text-danger"})}
              <br />
              {link.label}
        </Link>
      ))}
    </div>
);}









/**
 * Implements the KanbasNavigation Sidebar
 * In javascript is a subset of typescript; typescript helps
 * us avoid some runtime compilation errors
 * props... ?
 * KanbasNav is a functional component
 * in line styling -> class styling -> external style sheet
 * @returns 
 */
// export default function KanbasNavigation() {
//   const { pathname } = useLocation();
//   const isActiveAccount = (path: string) => pathname.includes(path) ? 'text-danger bg-white' : 'bg-black text-white';
//   const isActive = (path: string) => pathname.includes(path) ? 'bg-white text-danger' : 'bg-black text-white';
//   return (
   
//       <div>
//         {/**list-group: Initializes list of hyperlinks
//          *  rounded-0: removes rounding of corners for all list items
//          * className="list-group rounded-0"
//          * id="
//          */}
//         <div id="wd-kanbas-navigation" className="list-group">
          

//           {/**First Item: Northeastern Logo/Link */}
//           <a id="wd-neu-link" 
//             target="_blank" 
//             href="https://www.northeastern.edu/"
//             className="list-group-item
//                       list-group-item-active
//                       kanbas-nav-bar-style
//                       neu-icon">
//               <br/>
//               <img src="/images/NEU.png" 
//                 width="75px" />
//               <br /> 
//               <br />
//           </a>
    

//           {/**Second Item: Account Icon/Link */}
//           <a id="wd-account-link" 
//             href="#/Kanbas/Account"
//             className={`
//                       list-group-item
//                       list-group-item-active
//                       kanbas-nav-bar-style
//                       account-icon
//                       ${isActiveAccount('/Kanbas/Account')}`} >

//             <FaRegCircleUser className="fs-1" />
//             <br />
//             Account 
//             </a>

//           {/**Third Item: Dashboard Icon/Link - Selected*/}
//           <a id="wd-dashboard-link"
//             href="#/Kanbas/Dashboard"
//             className={`
//                       list-group-item
//                       list-group-item-active
//                       kanbas-nav-bar-style
//                       kanbas-nav-icons
//                       ${isActive('/Kanbas/Dashboard')}`} >

//             <AiOutlineDashboard className="fs-1 
//                                           text-danger" />
//             <br />
//             Dashboard 
//           </a>
          
//           {/**Fourth Item: Courses Icon/Link */}
//           <a id="wd-course-link" 
//             href="#/Kanbas/Courses/Home"
//             className={`
//                       list-group-item
//                       list-group-item-active
//                       kanbas-nav-bar-style
//                       kanbas-nav-icons
//                       ${isActive('/Kanbas/Courses')}`} >
//             <LiaBookSolid className="fs-1 text-danger" />
//             <br />
//             Courses 
//           </a>


//           {/**Fifth Item: Calendar Icon/Link */}
//           <a id="wd-course-link" 
//             href="#/Kanbas/Calendar"
//             className={`
//                       list-group-item
//                       list-group-item-active
//                       kanbas-nav-bar-style
//                       kanbas-nav-icons
//                       ${isActive('/Kanbas/Calendar')}`} >
//             <IoCalendarOutline className="fs-1 text-danger" />
//             <br />
//             Calendar 
//           </a>

//           {/**Sixth Item: Inbox Icon/Link */}
//           <a id="wd-course-link" 
//             href="#/Kanbas/Inbox"
//             className={`
//                       list-group-item
//                       list-group-item-active
//                       kanbas-nav-bar-style
//                       kanbas-nav-icons
//                       ${isActive('/Kanbas/Inbox')}`} >
//             <FaInbox className="fs-1 text-danger" />
//             <br />
//             Inbox 
//           </a>

//           {/**Seventh Item: Labs Icon/Link */}
//           <a id="wd-course-link" 
//             href="#/Labs"
//             className={`
//                       list-group-item
//                       list-group-item-active
//                       kanbas-nav-bar-style
//                       kanbas-nav-icons
//                       ${isActive('/Kanbas/Labs')}`} >
//             <LiaCogSolid className="fs-1 text-danger" />
//             <br />
//             Labs 
//           </a>



//       </div>
//     </div>

    

// );
// }








