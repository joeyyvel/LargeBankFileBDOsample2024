import "../components/mainRowTwo/NavbarTwoStyle.css";
import BDOlogo1 from "../components/images/bdoLogo.svg";
import SearchIcon from "../components/images/searchicon.svg";
import ApplyIcon from "../components/images/apply-icon.png";
import loginIcon from "../components/images/loginicon.png";
import { Link } from "react-router-dom";
const NavbarTwo = () => {
  return (
    <>
      <div className="navRowTwo">
        {/*-------------------- {BDO white and yellow logo}--------------- */}
        <div className="bdoLogo">
          <img src={BDOlogo1} alt="" style={{ height: "25px" }} />
        </div>

        {/* {---------------personal---------------} */}
        <div>
          <h4>
            <Link>Personal</Link>
          </h4>
        </div>
        {/* {---------------Business---------------} */}
        <div>
          <h4>
            <Link style={{ color: "orange" }}>Business</Link>
          </h4>
        </div>
        <div className="search" style={{ display: "flex", height: "50px" }}>
          <img src={SearchIcon} alt="searchIcon" />
          <h5>
            <Link>Search</Link>
          </h5>
        </div>
        <div className="apply" style={{ display: "flex", height: "50px" }}>
          <img src={ApplyIcon} alt="applyIcon" />
          <h5>
            <Link>Apply</Link>
          </h5>
        </div>
        <div style={{ display: "flex", height: "50px" }}>
          <img src={loginIcon} alt="loginIcon" />
          <h5>
            <Link>Login</Link>
          </h5>
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;
