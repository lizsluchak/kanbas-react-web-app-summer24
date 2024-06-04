import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router";
import "./index.css"


/**
 * Implements the KanbasNavigation Sidebar
 * In javascript is a subset of typescript; typescript helps
 * us avoid some runtime compilation errors
 * props... ?
 * KanbasNav is a functional component
 * in line styling -> class styling -> external style sheet
 * @returns 
 */
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const isActiveAccount = (path: string) => pathname.includes(path) ? 'text-danger bg-white' : 'bg-black text-white';
  const isActive = (path: string) => pathname.includes(path) ? 'bg-white text-danger' : 'bg-black text-white';
  return (
   
      <div>
        {/**list-group: Initializes list of hyperlinks
         *  rounded-0: removes rounding of corners for all list items
         * className="list-group rounded-0"
         * id="
         */}
        <div id="wd-kanbas-navigation" className="list-group">
          

          {/**First Item: Northeastern Logo/Link */}
          <a id="wd-neu-link" 
            target="_blank" 
            href="https://www.northeastern.edu/"
            className="list-group-item
                      list-group-item-active
                      kanbas-nav-bar-style
                      neu-icon">
              <br/>
              <img src="/images/NEU.png" 
                width="75px" />
              <br /> 
              <br />
          </a>
    

          {/**Second Item: Account Icon/Link */}
          <a id="wd-account-link" 
            href="#/Kanbas/Account"
            className={`
                      list-group-item
                      list-group-item-active
                      kanbas-nav-bar-style
                      account-icon
                      ${isActiveAccount('/Kanbas/Account')}`} >

            <FaRegCircleUser className="fs-1" />
            <br />
            Account 
            </a>

          {/**Third Item: Dashboard Icon/Link - Selected*/}
          <a id="wd-dashboard-link"
            href="#/Kanbas/Dashboard"
            className={`
                      list-group-item
                      list-group-item-active
                      kanbas-nav-bar-style
                      kanbas-nav-icons
                      ${isActive('/Kanbas/Dashboard')}`} >

            <AiOutlineDashboard className="fs-1 
                                          text-danger" />
            <br />
            Dashboard 
          </a>
          
          {/**Fourth Item: Courses Icon/Link */}
          <a id="wd-course-link" 
            href="#/Kanbas/Courses/Home"
            className={`
                      list-group-item
                      list-group-item-active
                      kanbas-nav-bar-style
                      kanbas-nav-icons
                      ${isActive('/Kanbas/Courses')}`} >
            <LiaBookSolid className="fs-1 text-danger" />
            <br />
            Courses 
          </a>


          {/**Fifth Item: Calendar Icon/Link */}
          <a id="wd-course-link" 
            href="#/Kanbas/Calendar"
            className={`
                      list-group-item
                      list-group-item-active
                      kanbas-nav-bar-style
                      kanbas-nav-icons
                      ${isActive('/Kanbas/Calendar')}`} >
            <IoCalendarOutline className="fs-1 text-danger" />
            <br />
            Calendar 
          </a>

          {/**Sixth Item: Inbox Icon/Link */}
          <a id="wd-course-link" 
            href="#/Kanbas/Inbox"
            className={`
                      list-group-item
                      list-group-item-active
                      kanbas-nav-bar-style
                      kanbas-nav-icons
                      ${isActive('/Kanbas/Inbox')}`} >
            <FaInbox className="fs-1 text-danger" />
            <br />
            Inbox 
          </a>

          {/**Seventh Item: Labs Icon/Link */}
          <a id="wd-course-link" 
            href="#/Labs"
            className={`
                      list-group-item
                      list-group-item-active
                      kanbas-nav-bar-style
                      kanbas-nav-icons
                      ${isActive('/Kanbas/Labs')}`} >
            <LiaCogSolid className="fs-1 text-danger" />
            <br />
            Labs 
          </a>



      </div>
    </div>

    

);
}








