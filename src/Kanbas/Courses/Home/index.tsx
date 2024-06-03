import ScreenSizeLabel from "../../../ScreenSizeLabel";
import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    
    <div id="wd-home" className="d-flex">
      <ScreenSizeLabel/>
      
      <div className="flex-fill me-5">
        <Modules />
      </div>

      {/**
       * TODO: 
       * so again; flex has been turned on and instantiated;
       * issue that course status not appearing
       * 
       */}
      <div className="d-none d-lg-block">
        <CourseStatus />
      </div>

    </div>

  );
}



/**
 * Iteration Gravyard:
 * 
 *  (1) Version 1 discarded to use flex/div instead of
 *      table elements
 * 
 * 
 */