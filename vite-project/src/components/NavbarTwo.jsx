import "../components/mainRowTwo/NavbarTwoStyle.css";
import BDOlogo1 from "../components/images/bdoLogo.svg";
import SearchIcon from "../components/images/search-icon.png";
import ApplyIcon from "../components/images/apply-icon.png";
import loginIcon from "../components/images/loginicon.png";
import { Link } from "react-router-dom";

const NavbarTwo = () => {
  const handleMouseEnter = (e) => {
    e.target.style.background = "#0072d8";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "none";
  };

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

          {/* ------------------------Login with own div area------------------------ */}
          <div
            className="logIn"
            style={{
              display: "flex",
            }}
          >
            <img
              src={loginIcon}
              width={33}
              height={33}
              alt="loginIcon"
              style={{
                position: "absolute",
                zIndex: "2",
                left: "0",
                marginTop: "-17px",
                marginLeft: "20px",
                borderRadius: "7px",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />

            <div className="dropdown" style={{ fontWeight: "bolder" }}>
              <button
                className="btn mt-2 fw-bold border-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "white",
                  fontFamily: "Nunito",
                  fontSize: "18px",
                  position: "absolute",
                  top: "-49px",
                  marginLeft: "-19px",
                  padding: "27px 60px",
                  zIndex: "1",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Login
              </button>

              <ul
                className="dropdown-menu rounded-0 p-0 border-0 mt-5"
                id="myUl"
              >
                <li id="myList">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "Nunito",
                      fontSize: "16px",
                      fontWeight: "400",
                      paddingLeft: "17px",
                    }}
                  >
                    Personal
                  </Link>
                </li>
                <li id="myList">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "Nunito",
                      fontSize: "16px",
                      fontWeight: "400",
                      paddingLeft: "17px",
                      paddingTop: "10px",
                    }}
                  >
                    Business
                  </Link>
                </li>
              </ul>

              {/*          
              <ul
                className="dropdown-menu rounded-0 p-0 border-0 mt-5"
                style={{}}
              >
                <li>
                  <Link className="dropdown-item py-3 " to="/bookAVisit">
                    Book a Visit
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-3"
                    to="/branchAndAtmLocator"
                  >
                    Branch and ATM Locator
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-3" to="/branchUpdates">
                    Branch Updates
                  </Link>
                </li>
              </ul>
          */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;
