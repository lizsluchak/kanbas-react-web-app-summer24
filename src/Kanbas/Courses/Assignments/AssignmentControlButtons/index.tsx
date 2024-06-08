import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
  return (
    <div>
      <BsPlus style={{ fontSize: '30px' }} className="float-end me-2"/> 
      <IoEllipsisVertical className="fs-4 me-4" />
    </div>
);}