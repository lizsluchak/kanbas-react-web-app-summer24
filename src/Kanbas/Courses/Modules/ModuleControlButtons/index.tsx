import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../GreenCheckmark";
import { BsPlus } from "react-icons/bs";

export default function LessonControlButtons() {
  return (
    <div className="float-end me-1">
      <GreenCheckmark />
      <BsPlus style={{ fontSize: '30px' }}/> 
      <IoEllipsisVertical className="fs-4" />
    </div>
);}