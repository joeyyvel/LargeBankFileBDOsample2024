import "../components/mainRowTwo/NavbarTwoStyle.css";
import BDOlogo1 from "../components/images/bdoLogo.svg";
import SearchIcon from "../components/images/search-icon.png";
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
        <div className="personal">
          <p>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "18px",
                color: "white",
                fontFamily: "Nunito",
                position: "relative",
                top: "8px",
              }}
              to="/personalPage"
            >
              Personal
            </Link>
          </p>
        </div>
        {/* {---------------Business---------------} */}
        <div className="business">
          <h4>
            <Link
              style={{
                color: "#FDB913",
                textDecoration: "none",
                fontSize: "18px",
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              to="/businessPage"
            >
              Business
            </Link>
          </h4>
        </div>

        {/* {-------------------Search****Apply****Login Area----------------} */}
        <div className="searchApplyLogin">
          <div className="search" style={{ display: "flex" }}>
            <img
              src={SearchIcon}
              width={33}
              height={33}
              alt="searchIcon"
              style={{ position: "relative", top: "4px" }}
            />
            <p>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Nunito",
                  paddingLeft: "20px",
                  position: "relative",
                  top: "7px",
                }}
              >
                Search
              </Link>
            </p>
          </div>
          <div className="apply" style={{ display: "flex" }}>
            <img
              src={ApplyIcon}
              width={33}
              height={33}
              alt="applyIcon"
              style={{ position: "relative", top: "4px" }}
            />
            <p>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Nunito",
                  paddingLeft: "20px",
                  position: "relative",
                  top: "7px",
                }}
              >
                Apply
              </Link>
            </p>
          </div>
          <div className="logIn" style={{ display: "flex" }}>
            <img
              src={loginIcon}
              width={33}
              height={33}
              alt="loginIcon"
              style={{ position: "relative", top: "4px" }}
            />
            <p>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Nunito",
                  paddingLeft: "20px",
                  position: "relative",
                  top: "7px",
                }}
              >
                Login
              </Link>
              <i className="fa-solid fa-caret-down one"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;
