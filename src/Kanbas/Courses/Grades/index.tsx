import GradesControlButtonsBar from "./GradeControlButtonsBar";
import GradeSettingsButton from "./GradeControlButtonsBar/GradeSettingsButton";
import StudentSearch from "./GradeSearchBars";

import GradeImportButton from "./GradeControlButtonsBar/GradeImportButton";
import ImportButton from "./GradeControlButtonsBar/GradeImportButton";
import GradeTable from "./GradeTableSection";
import GradeTableSection from "./GradeTableSection";

export default function Grades() {
    return (


        <div id="mother-div">
           <GradesControlButtonsBar />
           <StudentSearch />
           <GradeTableSection />







        {/**mother-div end */}
        </div>

    );
}