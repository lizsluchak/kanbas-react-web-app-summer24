import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import ModalDeleteAssignmentPopUp from "./ModalDeleteAssignmentPopUp";
import { useSelector, useDispatch } from "react-redux";



export default function LessonControlButtons(
    { assignmentName, assignmentId, deleteAssignment }: {
        assignmentName: string;
        assignmentId: string;
        deleteAssignment: (assignmentId: string) => void; }) {

const dispatch = useDispatch();





    return (
        <div>
             <button data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" >
                        
                        <FaTrash className="text-danger me-3 mb-1" />
                        </button>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />

            <ModalDeleteAssignmentPopUp
                              dialogTitle="Confirm Deletion of Below Assignment:"
                              assignmentName={assignmentName}
                              assignmentId={assignmentId}
                              deleteAssignment={(assignmentId: string) => {
                                dispatch(deleteAssignment({assignmentId}));
                              }}
                                />
        </div>
    );
}