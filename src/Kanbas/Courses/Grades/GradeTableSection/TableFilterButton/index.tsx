import { FaFileImport } from "react-icons/fa";
import { IoFunnelOutline } from "react-icons/io5";

export default function TableFilterButton(){

    return(

      <div className="d-flex flex-row flex-fill justify-content-start">
        
        <button className="btn btn-lg" style={{ backgroundColor: "#ffe6e6"}} >
        <IoFunnelOutline className="me-2 fs-5" />
        Apply Filters
      </button>
    </div>
    );
}