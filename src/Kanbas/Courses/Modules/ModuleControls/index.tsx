import React from "react";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../GreenCheckmark";
import GreyCancel from "../GreyCancel";
import { BsSlashCircle, BsSlashCircleFill } from "react-icons/bs";

/**
 * 
 * @returns 
 */
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap p-2">


      <button id="wd-add-module-btn" className="btn btn-md btn-danger float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>


      <div className="dropdown show d-inline me-2 float-end">
        <a id="wd-publish-all-btn" className="btn btn-md btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </a>
        
        <div className="dropdown-menu">
          
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item m-1" href="#">
                <GreenCheckmark />
                Publish all modules and items</a>   
          
       
            <a id="wd-publish-modules-only-button" className="dropdown-item m-1" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>

             {/* Create two more items with IDs wd-unpublish-all-modules-and-items and
              wd-unpublish-modules-only with labels Unpublish all modules and items
              and Unpublish modules only */}

            <a id="wd-unpublish-modules-and-items" className="dropdown-item" href="#">
              <BsSlashCircle className="m-1"/>
              Unpublish all modules and items
            </a>

            <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
              <BsSlashCircle className="m-1"/>
              Unpublish modules only
            </a>

   
         
        </div>
      </div>

      <div>
      {/* Implement the View Progress and Collapse All buttons
          with IDs wd-view-progress and wd-collapse-all */}
          <button id="wd-view-progress" className="btn btn-md btn-secondary me-2 float-end">
              View Progress
            </button>
        
            <button id="wd-collapse-all" className="btn btn-md btn-secondary me-2 float-end">
              Collapse All
            </button>
        </div>
   
    
    </div>
  );
}

