import { FaTrash } from "react-icons/fa";
import ModalDeleteAssignmentPopUp from "./ModalDeleteAssignmentPopUp";




export default function DeleteAssignmentButton( { assignmentId, assignmentTitle }: 
    {
        assignmentId: string; 
        
        assignmentTitle: string; 

    }) {
        console.log('Deleting assignment button pressed:', assignmentId, assignmentTitle); // Add this line for debugging
        // Generate a unique ID for the modal
    const modalId = `wd-delete-assignment-dialog-${assignmentId}`;
    
    return(
        <div>

        

        <button data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" >
                        
                        <FaTrash  className="text-danger me-3 mb-1" />
                        </button>

                        <ModalDeleteAssignmentPopUp 
                              dialogTitle="Confirm Deletion of Below Assignment:"
                              assignmentName={assignmentTitle}
                              assignmentId={assignmentId}
                              modalId={modalId} />

                        </div>

    );
}