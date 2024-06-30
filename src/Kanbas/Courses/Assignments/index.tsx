
import AssignmentControls from "./AssignmentControls";

import 'bootstrap/dist/css/bootstrap.min.css';

// import { useParams } from "react-router";

import AssignmentDataTable from "./AssignmentTable";

export default function Assignments() {
  // const { cid } = useParams(); //retrieve courseID
  // console.log(cid);
  // const assignment = assignments.find((assignment) => assignment.course === cid);
  // const assignments = db.assignments; //load in assignment database
  // const { pathname } = useLocation();



  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <AssignmentDataTable />
    </div>
  );

}









