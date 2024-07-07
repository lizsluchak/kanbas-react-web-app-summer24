import React, { useEffect, useState } from "react";
import axios from "axios"; //import axios

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState(""); //set state variable with default of empty string

  /**
   * fetchWelcomeOnClick function is tagged as sync since it uses axios.get()
   * to async send  a request to the server and return response
   */
  const fetchWelcomeOnClick = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    setWelcomeOnClick(response.data);
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
