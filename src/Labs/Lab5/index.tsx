
/**
 * Lab5 Entry Point: 
 * 
 * (1) Test out server creation, link to server redendered Lab5 page via href
 * @returns
 */

import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
      <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>

      </div><hr/>
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
    </div>
  );
}

  