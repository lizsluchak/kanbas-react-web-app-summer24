import { Link, useLocation, useParams } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";


export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile", "Enroll"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link to={`/Kanbas/Account/${link}`} className={`
          wd-link border border-0 list-group-item list-group-item-active
                    fw-bold
           ${ pathname.includes(link) ? "bg-white text-danger active" : "bg-white text-black" }`}> {link} </Link>
      ))}
    </div>
  );
}
