import GradeExportDropDownButton from "../GradeExportDropDownButton";
import GradeSettingsButton from "../GradeSettingsButton";
import GradeImportButton from "../StudentSearch/GradeImportButton";

export default function GradesControlButtonsBar() {
    return (
        <div>
            <div className="d-flex flex-row flex-fill justify-content-end bg-success">
                <div className="me-3">
                    <GradeImportButton />
                </div>
                <div className="me-3">
                    <GradeExportDropDownButton />
                </div>

                <div>
                    <GradeSettingsButton />
                </div>
            </div>
        </div>



    );
}