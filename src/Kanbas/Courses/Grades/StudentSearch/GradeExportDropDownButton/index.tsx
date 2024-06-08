import { FaFileExport } from "react-icons/fa";


export default function GradeExportDropDownButton() {
  return (
    <div>

      <div className="dropdown show d-inline">
        <a id="wd-publish-all-btn" className="btn btn-md btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <FaFileExport className="me-2 fs-5" />
          Export
        </a>

        <div className="dropdown-menu">
          {/**TODO */}
        </div>

      </div>

    </div>



  );
}