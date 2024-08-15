
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
export default function QuizQuestionEditorPopUp(
    { dialogTitle, moduleName, setModuleName, addModule }:
        { dialogTitle: string; 
        moduleName: string; 
        setModuleName: (name: string) => void; 
        addModule: () => void; }) {
      return (
        <div id="wd-add-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {dialogTitle} </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <input className="form-control" value={moduleName} placeholder="Module Name"
                   onChange={(e) => setModuleName(e.target.value)}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel </button>
            <button onClick={addModule} type="button" data-bs-dismiss="modal" className="btn btn-danger">
              Add Module </button>
          </div>
        </div>
      </div>
    </div>
  );
}

    