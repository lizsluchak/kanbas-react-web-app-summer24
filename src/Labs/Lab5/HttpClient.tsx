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
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  /**
   * retrieves data from server on user request
   */
  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };

  /**
   * retrieves data without request for initial loading using React's 
   * useEffect hook fuction.
   * 
   * useEffect invokes fetchWelcomeOnLoad when a component or screen first
   * loads, now when the HttpClient loads, the fetchWelcomeOnLoad retrieves
   * message from the server and sets the new welcomeOnLoad state variable, 
   * now the welcome message appears without having to click on fetch welcome
   * button 
   */
  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);



 
  return (
    <div>
      <h3>HTTP Client</h3> <hr />
      <h4>Requesting on Click</h4>
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button> <br />
      Response from server: <b>{welcomeOnClick}</b>

      <hr />
      <h4>Requesting on Load</h4>
      Response from server: <b>{welcomeOnLoad}</b>
      <hr />

    </div>
  );
}
