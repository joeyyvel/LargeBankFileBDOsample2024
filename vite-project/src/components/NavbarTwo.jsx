import "../components/mainRowTwo/NavbarTwoStyle.css";
import BDOlogo1 from "../components/images/bdoLogo.svg";
import SearchIcon from "../components/images/search-icon.png";
import ApplyIcon from "../components/images/apply-icon.png";
import loginIcon from "../components/images/loginicon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarTwo = () => {
  const handleMouseEnter = (e) => {
    e.target.style.background = "#0072d8";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "none";
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <>
      <div className="navRowTwo">
        {/*-------------------- {BDO white and yellow logo}--------------- */}
        <div className="bdoLogo">
          <img src={BDOlogo1} alt="" style={{ height: "25px" }} />
        </div>

        {/* {---------------personal---------------} */}

        {/*     
        <div>
          <div
            data-bs-toggle="collapse"
            data-bs-target="#personalCollapse"
            aria-expanded="false"
            aria-controls="personalCollapse"
          >
            collapse
          </div>
          <Link
            // data-bs-toggle="collapse"
            // data-bs-target="#personalCollapse"
            // aria-expanded="false"
            // aria-controls="personalCollapse"
            to="/personalMainPage"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "white",
              fontFamily: "Nunito",
              position: "relative",
              top: "8px",
            }}
          >
            Personal
          </Link>
        </div>
           
        */}

        <div className="personal">
          <Link
            to="/personalMainPage"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "white",
              fontFamily: "Nunito",
              position: "relative",
              top: "8px",
            }}
          >
            personal
          </Link>
        </div>

        {/* {---------------Business---------------} */}
        <div className="business">
          <p>
            <Link
              to="/businessMainPage"
              style={{
                textDecoration: "none",
                fontSize: "18px",
                color: "white",
                fontFamily: "Nunito",
                position: "relative",
                top: "8px",
              }}
            >
              Business
            </Link>
          </p>
        </div>

        {/* {-------------------Search****Apply****Login Area----------------} */}
        <div className="searchApplyLogin">
          <div className="search" style={{ display: "flex" }}>
            <img
              src={SearchIcon}
              width={33}
              height={33}
              alt="searchIcon"
              style={{ position: "relative", top: "4px", marginLeft: "27px" }}
            />
            <p>
              <Link
                to="/search"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Nunito",
                  position: "relative",
                  top: "7px",
                }}
              >
                Search
              </Link>
            </p>
          </div>

          {/*-----------------------------Apply div area-------------------------*/}

          <div className="apply" style={{ display: "flex" }}>
            <img
              src={ApplyIcon}
              width={33}
              height={33}
              alt="applyIcon"
              style={{ position: "relative", top: "4px", marginLeft: "40px" }}
            />
            <p>
              <Link
                to="/apply"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Nunito",
                  paddingLeft: "0px",
                  position: "relative",
                  paddingRight: "15px",
                  top: "7px",
                }}
              >
                Apply
              </Link>
            </p>
          </div>

          {/* ------------------------Login with own div area------------------------ */}

          <div className="login dropdown">
            <img
              src={loginIcon}
              alt=""
              style={{
                position: "relative",
                height: "35px",
                paddingRight: "17px",
                marginTop: "24px",
                marginLeft: "20px",
              }}
            />
            <div className="loginDiv">
              <button
                className="dropBtn"
                style={{ background: "#004EA8", color: "white" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Login
              </button>
              <div className="dropdown-contents">
                <Link
                  style={{ backgroundColor: "white" }}
                  className="personalLink dropdown-toggle"
                  onClick={() => setShow(!show)}
                  to=""
                >
                  Personal
                </Link>
                {show ? (
                  <ul id="myUl">
                    <li>
                      <Link id="pLink" to="/bdoOnlineBanking">
                        BDO Online Banking
                      </Link>
                    </li>
                    <li>
                      <Link id="pLink" to="/bdoSecurities">
                        BDO Securities
                      </Link>
                    </li>
                    <li>
                      <Link id="pLink" to="/networkBank">
                        Network Bank
                      </Link>
                    </li>
                  </ul>
                ) : null}

                <Link
                  className="businessLink dropdown-toggle"
                  onClick={() => setShow1(!show1)}
                  to="/"
                >
                  Business
                </Link>
                {show1 ? (
                  <ul id="myUl1">
                    <li>
                      <Link id="bLink" to="/cashCard">
                        Cash Card
                      </Link>
                    </li>
                    <li>
                      <Link id="bLink" to="/integratedDisbursementSolutions">
                        Integrated Disbursement Solutions
                      </Link>
                    </li>
                    <li>
                      <Link id="bLink" to="/businessOnlineBanking">
                        Business Online Banking
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="bLink"
                        to="/networkBankEnroll"
                        style={{
                          borderRadius: "0 0 8px 8px",
                        }}
                      >
                        Network Bank
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>

          {/* End of login */}
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;
