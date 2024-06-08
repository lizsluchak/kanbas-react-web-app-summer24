import { FaSearch } from "react-icons/fa";
import AssignmentNameEdit from "./StudentNameSearch";
import StudentNameSearch from "./StudentNameSearch";
import AssignmentSearch from "./AssignmentSearch";

export default function GradeSearchBars() {
    return (
        <div>

            <div id="parent1-1row-2columns" className="d-flex flex-row border justify-content-evenly">
                <div id="row1-column1" className="p-6 flex-fill">


                    <StudentNameSearch />
                </div>

                <div id="row1-column1" className="p-6 flex-fill">

                    <AssignmentSearch />
                </div>

            </div>





        </div>




    );
}
