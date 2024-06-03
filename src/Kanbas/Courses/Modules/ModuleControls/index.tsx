import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">

      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>


      <div className="dropdown show d-inline me-1 float-end">
        <a id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </a>
        
        <div className="dropdown-menu">
          
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">Publish all modules and items</a>
              
           
           
          
          
       
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>

   
          {/* Create two more items with IDs wd-unpublish-all-modules-and-items and
              wd-unpublish-modules-only with labels Unpublish all modules and items
              and Unpublish modules only */}
        </div>
      </div>

      <div>
      {/* Implement the View Progress and Collapse All buttons
          with IDs wd-view-progress and wd-collapse-all */}
          <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
              View Progress
            </button>
        
            <button id="wd-collapse-all" className="btn btn-lg btn-secondary me-1 float-end">
              Collapse All
            </button>
        </div>
    </div>
  );
}

