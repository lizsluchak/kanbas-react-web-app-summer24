import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";


/**
 * Implements the KanbasNavigation Sidebar
 * @returns 
 */
export default function KanbasNavigation() {
  return (
    <nav>
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      
      {/**First Item: Northeastern Logo/Link */}
      <a id="wd-neu-link" 
        target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item
                  list-group-item-active 
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
                  list-group-item-active  
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
                  list-group-item-active  
                  text-center 
                  border-0
                  bg-white 
                  text-danger">
        <AiOutlineDashboard className="fs-1 
                                      text-danger" />
        <br />
        Dashboard 
      </a>
      
      {/**Fourth Item: Courses Icon/Link */}
      <a id="wd-course-link" 
        href="#/Kanbas/Courses/Home"
        className="list-group-item
                  list-group-item-active  
                  text-white
                  bg-black 
                  text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses 
      </a>


      {/**Fifth Item: Calendar Icon/Link */}
      <a id="wd-course-link" 
        href="#/Kanbas/Calendar"
        className="list-group-item
                  list-group-item-active  
                  text-white
                  bg-black 
                  text-center border-0">
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar 
      </a>

      {/**Sixth Item: Inbox Icon/Link */}
      <a id="wd-course-link" 
        href="#/Kanbas/Inbox"
        className="list-group-item 
                  list-group-item-active 
                  text-white
                  bg-black 
                  text-center border-0">
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox 
      </a>

      {/**Seventh Item: Labs Icon/Link */}
      <a id="wd-course-link" 
        href="#/Labs"
        className="list-group-item
                  list-group-item-active
                  text-white
                  bg-black 
                  text-center border-0">
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs 
      </a>



      
    </div>
    </nav>
    

);
}








