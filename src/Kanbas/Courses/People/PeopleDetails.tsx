import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";
import { FaPencil } from "react-icons/fa6";
import { current } from "@reduxjs/toolkit";


export default function PeopleDetails(
  { fetchUsers }:
    { fetchUsers: () => void; }) {
  const navigate = useNavigate();
  const { uid, cid } = useParams();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);


  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;


  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };


  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");

    console.log(name, firstName, lastName)
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };




  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <Link to={`/Kanbas/Courses/${cid}/People`} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" /> </Link>
      <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />

      <div>

        <div className="wd-name">
          {!editing && (
            <FaPencil onClick={() => setEditing(true)}
              className="float-end fs-5 mt-2 wd-edit" />)}
          {editing && (
            <FaCheck onClick={() => saveUser()}
              className="float-end fs-5 mt-2 me-2 wd-save" />)}
          {!editing && (
            <div className="wd-name"
              onClick={() => setEditing(true)}>

              <span className="fs-4 text-danger">
                {user.firstName} {user.lastName}</span>

              <br />
              <b>Roles:</b>           <span className="wd-roles">         {user.role}         </span> <br />
              <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
              <b>Email:</b>           <span className="wd-email">         {user.email}      </span> <br />
              <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
              <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>
            </div>)}
        </div>


        {user && editing && (
          <div >

            {/** edit status for name */}
            <div className="d-flex">
              <label htmlFor="name-edit"
                className="row-sm-2 row-form-label p-1">
                <strong>Name:</strong>
              </label>
              <input id="name-edit" className="form-control w-50 wd-edit-name border-red"
                defaultValue={`${user.firstName} ${user.lastName}`}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { saveUser(); }
                }}
              />
            </div>

            {/** edit status for user role */}
            <div className="d-flex">
              <label htmlFor="role-edit"
                className="row-sm-2 row-form-label p-2">
                <strong>Role:</strong>
              </label>
              <div className="dropdown">
                <select className="form-select" onChange={(e) => setRole(e.target.value)} defaultChecked={user.role}>
      
                  <option value="STUDENT">STUDENT</option>
                  <option value="TA">TA</option>
                  <option value="FACULTY">FACULTY</option>
                </select>


              </div>
            </div>

            <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />

            {/** edit status for email */}
            <div className="d-flex">
              <label htmlFor="email-edit"
                className="row-sm-2 row-form-label p-1">
                <strong>Email:</strong>
              </label>
              <input type="email" id="email-edit" className="form-control w-50 wd-edit-email border-red"
                defaultValue={`${user.email}`}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { saveUser(); }
                }}
              />
            </div>

            <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
            <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>




          </div>
        )}
      </div>









      <hr />
      <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
      <button onClick={() => {
        setUser(user);
        setEditing(false);
        navigate(`/Kanbas/Courses/${cid}/People`);
      }
      }
        className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
    </div>);
}