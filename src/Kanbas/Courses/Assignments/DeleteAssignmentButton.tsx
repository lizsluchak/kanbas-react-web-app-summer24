import { FaTrash } from "react-icons/fa";

export default function DeleteAssignmentButton(){

    return(

        <button data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" >
                        
                        <FaTrash className="text-danger me-3 mb-1" />
                        </button>

    );
}