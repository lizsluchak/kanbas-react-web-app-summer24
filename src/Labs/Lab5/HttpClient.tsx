import React, { useEffect, useState } from "react";
// import axios from "axios"; //import axios
// import * as client from "./client";

// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// export default function HttpClient() {
//   const [welcomeOnClick, setWelcomeOnClick] = useState(""); //set state variable with default of empty string
//   const fetchWelcomeOnClick = async () => {
//     const message = await client.fetchWelcomeMessage();
//     setWelcomeOnClick(message);
//   };

import * as client from "./client";
export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };


 
  return (
    <div>
      <h3>HTTP Client</h3> <hr />
      <h4>Requesting on Click</h4>
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button> <br />
      Response from server: <b>{welcomeOnClick}</b>
    </div>
  );
}
