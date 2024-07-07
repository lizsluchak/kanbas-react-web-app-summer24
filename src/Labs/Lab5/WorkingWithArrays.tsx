const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

/**
 * Hyperlink to test retrieving server array
 * @returns 
 */
export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos </a><hr/>
    </div>
);}
