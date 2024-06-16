import React from 'react'; 
import { FaFileImport } from "react-icons/fa";


export default function GradeImportButton(){




    return(

    <div>
        <button className="btn btn-md" style={{ backgroundColor: "#ffe6e6" }} >
        <FaFileImport className="me-2 fs-5" />
        Import
      </button>
    </div>
    );
}