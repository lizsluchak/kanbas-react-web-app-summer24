import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";



export default function DeleteAssignmentButton( { assignmentId }: 
    {
        assignmentId: string; 

    }) {

    const { assignments } = useSelector((state: any) => state.assignmentsReducer); // retrieve modules state variables
    const dispatch = useDispatch(); // get dispatch to call reducer functions
    const handleDelete = () => {
        dispatch(deleteAssignment(assignmentId));
    };
    return(

        <button data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" >
                        
                        <FaTrash onClick={handleDelete} className="text-danger me-3 mb-1" />
                        </button>

    );
}