import { FaPlus } from "react-icons/fa6";
// import GreenCheckmark from "../GreenCheckmark";
// import GreyCancel from "../GreyCancel";
// import { BsSlashCircle, BsSlashCircleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";



export default function AssignmentControls() {
    const { cid } = useParams();
    return (

    <div id="wd-assignment-controls" className="d-flex flex-row p-2">
        <div className="justify-content-start" style={{ width: "350px" }}>
            <div className="input-group mb-3">
                <span className="input-group-text bg-white border-end-0"><FaSearch /></span>
                <input type="text" placeholder="Search..."
                className="border-start-0 form-control" />
            </div>
        </div>


        <div className="ms-auto">
        <Link to={`/Kanbas/Courses/${cid}/Assignments/AssignmentEditor/New`} id="wd-add-assignment-btn" className="btn btn-md btn-danger float-end rounded-1">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
        </Link>

            {/* <button id="wd-add-assignment-btn" className="btn btn-md btn-danger float-end rounded-1">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button> */}

            <button id="wd-add-assignment-btn border-light-grey" 
                className="btn btn-md btn-secondary float-end rounded-1 me-1"
                style={{ backgroundColor: "#F5F5F5", color: "#000" }}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
        </div>
        <br/>
        <br/>
        <br/>

    </div >
      
    );

}

