import { IoEllipsisVertical } from "react-icons/io5";

import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end me-1">
      <BsPlus style={{ fontSize: '30px' }}/> 
      <IoEllipsisVertical className="fs-4" />
    </div>
);}