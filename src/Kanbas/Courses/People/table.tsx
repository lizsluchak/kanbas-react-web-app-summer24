import React, { useState, useEffect } from "react";
import * as client from "./client"
import PeopleDetails from "./PeopleDetails";
import { BsPersonFillCheck } from "react-icons/bs";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import "./styles.css"
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PeopleTable() {
  const { cid, id } = useParams(); //retrieve courseID
  const [users, setUsers] = useState<any[]>([]);

  
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
    console.log(users)
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  /** Filter Users By Role Handler Function:
   * handler function - updates a role state variable and requests from the
   * server the list of users filtered by their role. 
   */
  const [role, setRole] = useState("");
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  /**
   * Filter Users By Partial Name Handler Function: 
   */
  const [name, setName] = useState("");
  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };




  return (
    <div id="wd-people-table">
       <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        People
      </button>
      {/** search bar */}
      <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
        className="form-control float-start w-25 me-2 wd-filter-by-name" />

      {/** drop down to filter table */}
      <select value={role} onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>     <option value="FACULTY">Faculty</option>
      </select>

      {/** table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user: any) => (

            <tr key={user._id}>

              <td className="wd-full-name text-nowrap">

                <Link to={`/Kanbas/Courses/${cid}/People/${user._id}`} className="custom-people-link">
                  <FaUserCircle className="m-2 icon-large grey-text" />
                  <span className="wd-first-name me-1">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>

              </td>

              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>

          ))}

        </tbody>

      </table>
      <PeopleDetails fetchUsers={fetchUsers} />
    </div>
  );
}

