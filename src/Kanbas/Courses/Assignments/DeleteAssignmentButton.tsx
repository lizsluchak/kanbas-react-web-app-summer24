import { FaTrash } from "react-icons/fa";
import ModalDeleteAssignmentPopUp from "./ModalDeleteAssignmentPopUp";
import { useEffect, useState } from "react";




export default function DeleteAssignmentButton( { assignmentId, assignmentTitle, removeAssignment }: 
    {
        assignmentId: string; 
        
        assignmentTitle: string; 
        removeAssignment: () => void;

    }) {

        const [aid, setAid] = useState(assignmentId);
        const [title, setTitle] = useState(assignmentTitle)
        console.log('Deleting assignment button pressed:', assignmentId, assignmentTitle); // Add this line for debugging
        // Generate a unique ID for the modal
    const modalId = `wd-delete-assignment-dialog-${assignmentId}`;
    useEffect(() => {
        setAid(assignmentId);
        setTitle(assignmentTitle)
    }, [])
    
    return(
        <div>

        

        <button data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" >
                        
                        <FaTrash  className="text-danger me-3 mb-1" onClick={removeAssignment} />
                        </button>

                        <ModalDeleteAssignmentPopUp 
                              dialogTitle="Confirm Deletion of Below Assignment:"
                              assignmentName={title}
                              assignmentId={aid}
                              modalId={modalId} />

                        </div>

    );
}