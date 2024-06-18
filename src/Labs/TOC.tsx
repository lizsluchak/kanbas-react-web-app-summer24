// export default function TOC() {
//     return (
//       <ul>
//         <li><a id="wd-a"  href="#/Labs">Labs</a></li>
//         <li><a id="wd-a1" href="#/Labs/Lab1">Lab 1</a></li>
//         <li><a id="wd-a2" href="#/Labs/Lab2">Lab 2</a></li>
//         <li><a id="wd-a3" href="#/Labs/Lab3">Lab 3</a></li>
//         <li><a id="wd-kanbas" href="#/kanbas">Kanbas</a></li>
//         <li><a id="wd-github" href="https://github.com/lizsluchak/kanbas-react-web-app-summer24">Elisabeth Sluchak's Github</a></li>
//       </ul>
//     );
//   }

/**
 * The useLocation() hook returns several properties related to the current URL, in particular the pathname property containing the URL itself. We can use the pathname to drive UI logic such as highlighting, showing or hiding content based on the URL. The example below destructs the pathname from useLocation() and then checks to see if the URL contains either Lab1, Lab2, or Lab3 to then add the active class to highlight the correct pill. Confirm that the correct tab highlights when you click each of the pills.
 */

import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills" id="wd-toc">
      <li className="nav-item"><a id="wd-a"  href="#/Labs" className="nav-link">Labs</a></li>
      <li className="nav-item"><a id="wd-a1" href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</a></li>
      <li className="nav-item"><a id="wd-a2" href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</a></li>
      <li className="nav-item"><a id="wd-a3" href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</a></li>
      <li className="nav-item"><a id="wd-k" href="#/Kanbas" className="nav-link">Kanbas</a></li>
      <li className="nav-item"><a id="wd-github" href="https://github.com/lizsluchak/kanbas-react-web-app-summer24" target="_blank"
          className="nav-link">My GitHub</a></li>
    </ul>
);}

