import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";


export default function AssignmentHeaderButtons() {
  return (
    <h3 id="wd-assignments-title">
      <BsPlus style={{ fontSize: '30px' }}/> 
      <IoEllipsisVertical className="fs-4" />
  </h3>

  );
}

