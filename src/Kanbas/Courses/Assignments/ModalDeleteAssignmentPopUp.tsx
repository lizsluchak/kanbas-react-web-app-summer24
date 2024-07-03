import { deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

/**
 * Let's create a modal dialog where users can edit the name of a new module 
 * based on Bootstrap's modal classes. The ModuleEditor component below pops 
 * up when you click the red + Module button in the Modules and Home screens. 
 * You can type the name of the new module in an input field. As you type the 
 * name of the module, the setModuleName updates the module name, and clicking 
 * on the Add Module button calls the addModule function which actually adds 
 * the module.
 * @param param0 
 * @returns 
 */
export default function ModalDeleteAssignmentPopUp(
    { dialogTitle, assignmentName, assignmentId}:
    { dialogTitle: string; 
        assignmentName: string; 
        assignmentId: string; 
        // setDeleteAssignment: (assignment: string) => void;
    }) 
    {
    const { assignments } = useSelector((state: any) => state.assignmentsReducer); // retrieve modules state variables
    const dispatch = useDispatch(); // get dispatch to call reducer functions
    const handleDelete = () => {
        dispatch(deleteAssignment(assignmentId));
    };
      return (
        <div id="wd-delete-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 text-center" id="staticBackdropLabel"><strong>{dialogTitle} </strong></h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <strong>{assignmentId} : {assignmentName}</strong>
            {/* <input className="form-control" value={assignmentName} placeholder="Module Name"
                   onChange={(e) => setDeleteAssignment(e.target.value)}/> */}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel </button>
            <button type="button" onClick={handleDelete} data-bs-dismiss="modal" className="btn btn-danger">
              Delete Assignment </button>
          </div>
        </div>
      </div>
    </div>
  );
}