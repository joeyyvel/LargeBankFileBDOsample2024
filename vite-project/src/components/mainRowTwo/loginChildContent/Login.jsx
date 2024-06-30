import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn mt-2 fw-bold border-0 btn-login"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Login
          <i
            className="fa-solid fa-caret-down"
            style={{
              paddingLeft: "8px",
              fontSize: "12px",
              color: "gray",
            }}
          ></i>
        </button>
        <ul className="dropdown-menu rounded-0 p-0 border-0 mt-1">
          <li>
            <Link className="dropdown-item py-3 " to="/bookAVisit">
              Book a Visit
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="/branchAndAtmLocator">
              Branch and ATM Locator
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="/branchUpdates">
              Branch Updates
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
