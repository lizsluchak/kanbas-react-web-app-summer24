import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export default function ModuleControlButtons(
  // pass module buttons the ID of the module to be be deleted and event handler: delete module
  { moduleId, deleteModule }: { moduleId: string; deleteModule: (moduleId: string) => void; }) 
  
  {
  return (
    <div className="float-end me-1">
      {/**Pass trashcan icon the delete event handler and a module ID to delete */}
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/> 
      <GreenCheckmark />
      <BsPlus style={{ fontSize: '30px' }}/> 
      <IoEllipsisVertical className="fs-4" />
    </div>
);}