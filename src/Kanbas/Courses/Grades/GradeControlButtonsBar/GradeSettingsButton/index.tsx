import React from "react";
import { IoSettingsSharp } from "react-icons/io5";


export default function GradeSettingsButton() {
  return (
    <div>
        <button className="btn btn-md" style={{ backgroundColor: "#ffe6e6" }} >
        <IoSettingsSharp className="fs-5" />
      </button>
    </div>



  );
}