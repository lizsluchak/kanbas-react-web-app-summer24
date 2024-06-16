import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <button className="btn btn-md rounded-5 me-4" style={{ borderColor: '#adb5bd' }}>40% of Total</button>
      <BsPlus className="me-3"/> 
      <IoEllipsisVertical />
      
  
    </div>
);}