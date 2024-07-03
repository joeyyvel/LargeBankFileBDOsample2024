import "../components/mainRowTwo/NavbarTwoStyle.css";
import BDOlogo1 from "../components/images/bdoLogo.svg";
import SearchIcon from "../components/images/search-icon.png";
import ApplyIcon from "../components/images/apply-icon.png";
import loginIcon from "../components/images/loginicon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const NavbarTwo = () => {
  // const handleMouseEnter = (e) => {
  //   e.target.style.background = "#0072d8";
  // };
  // const handleMouseLeave = (e) => {
  //   e.target.style.background = "none";
  // };

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

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

          <div className="login">
            <img
              src={loginIcon}
              alt=""
              style={{
                position: "relative",
                height: "35px",
                paddingRight: "17px",
                marginTop: "46px",
              }}
            />
            <div className="login2" style={{ display: "flex" }}>
              Login
              {/*--------start------*/}
              <div className="dropdown" id="myDropDown">
                <button className="dropBtn dropdown-toggle"></button>
                <div className="dropdown-content">
                  {/*---------Toggle personal button-------*/}
                  <Link
                    className="personalLink dropdown-toggle"
                    onClick={() => setShow(!show)}
                    to="#"
                  >
                    Personal
                  </Link>

                  {show ? (
                    <ul style={{ display: "block" }}>
                      <li style={{ marginLeft: "-20px" }}>
                        <Link className="personalLink" to="/bdoOnlineBanking">
                          BDO Online Banking
                        </Link>
                      </li>
                      <li style={{ marginLeft: "-20px" }}>
                        <Link className="personalLink" to="/bdoSecurities">
                          BDO Securities
                        </Link>
                      </li>
                      <li style={{ marginLeft: "-20px" }}>
                        <Link className="personalLink" to="/networkBank">
                          Network Bank
                        </Link>
                      </li>
                    </ul>
                  ) : null}

                  {/*---------------end of personal drop button*/}

                  {/*----------------Business area Link-------------*/}

                  <li
                    style={{
                      marginLeft: "1px",
                    }}
                  >
                    <Link
                      style={{ marginLeft: "1px", marginTop: "-20px" }}
                      className="businessLink dropdown-toggle"
                      onClick={() => setShow2(!show2)}
                      href="#"
                    >
                      Business
                    </Link>
                  </li>
                  {/*-----------Start of toggle business----------*/}
                  {show2 ? (
                    <ul style={{ display: "block" }}>
                      <li style={{ marginLeft: "13px" }}>
                        <Link className="businessLink" to="/cashCard">
                          Cash Card
                        </Link>
                      </li>
                      <li style={{ marginLeft: "13px" }}>
                        <Link
                          className="businessLink"
                          to="integratedDisbursementSolution"
                        >
                          Integrated Disbursement Solutions
                        </Link>
                      </li>
                      <li style={{ marginLeft: "13px" }}>
                        <Link
                          className="businessLink"
                          to="/businessOnlineBanking"
                        >
                          Business Online Banking
                        </Link>
                      </li>
                      <li style={{ marginLeft: "13px" }}>
                        <Link className="businessLink" to="/networkBank">
                          Network Bank
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                  {/*-------end of business button-----*/}
                </div>
              </div>
              {/*--------end--------*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;
