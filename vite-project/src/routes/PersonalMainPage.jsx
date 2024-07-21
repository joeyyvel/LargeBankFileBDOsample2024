import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import { PersonalMenuItem } from "../components/personalRow/PersonalMenuItem";
import { Link } from "react-router-dom";
import "../components/personalRow/PersonalMainPageStyle.css";
import "../routes/personalMainPageStyle.css";
import { useState } from "react";

const PersonalMainPage = () => {
  const [showText, setShowText] = useState(false);

  const mouseEnterHandler = () => {
    setShowText(true);
  };

  const mouseLeaveHandler = () => {
    setShowText(false);
  };

  return (
    <>
      <NavbarOne />
      <NavbarTwo />

      {/* collapsible area from animation  */}
      <div className="perMenu" id="personalCollapse">
        <ul className="personalMenu">
          {PersonalMenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.url}
                  style={{
                    textDecoration: "none",
                    color: "#004EA8",
                    backgroundColor: "pink",
                  }}
                  /*------- yellow underline on hover title------*/
                  id="personLine"
                  //  hover on mouse inside map taking effect on all drop menu
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* ----------------------------Accounts page section------------------------------------- */}
      <div className="main-body">
        <div className="accounts">
          <div className="accountsChild">
            {/*------------------------------------------------------------------  
            {/* ---show and hide left nav by mouseEnter and mouseLeave--- 
            {showText && (
              <nav className="accounts-nav">
                <ul className="accounts-list">
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      Savings Accounts{" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      Checking Accounts
                      <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    {/* --------------------------Time Deposit Accounts in-line block-------------------------- 
                    <Link
                      id="acct-list-link"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      Time Deposit <br /> Accounts{"              "}
                      <i
                        className="fa-solid fa-caret-right"
                        style={{ paddingLeft: "117px" }}
                      ></i>{" "}
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      FOREX Services <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
              </ul>
              </nav>
            )}

---------------------------------------------------------------------------*/}
            {/* newly installed for experiment hover area *
            {/* ---show and hide left nav by mouseEnter and mouseLeave--- *
            {showText && (
              <nav className="accounts-nav">
                <ul className="accounts-list">
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word zero <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word zero
                      <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    {/* --------------------------Time Deposit Accounts in-line block-------------------------- *
                    <Link
                      id="acct-list-link"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      new word zero <br /> Accounts{"              "}
                      <i
                        className="fa-solid fa-caret-right"
                        style={{ paddingLeft: "117px" }}
                      ></i>{" "}
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word zero <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
          )}




      {/* newly installed for experiment hover area *
            {/* ---show and hide left nav by mouseEnter and mouseLeave--- *
            {showText && (
              <nav className="accounts-nav">
                <ul className="accounts-list">
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word one <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word one
                      <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    {/* --------------------------Time Deposit Accounts in-line block-------------------------- *
                    <Link
                      id="acct-list-link"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      new word one <br /> Accounts{"              "}
                      <i
                        className="fa-solid fa-caret-right"
                        style={{ paddingLeft: "117px" }}
                      ></i>{" "}
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word one <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
-------------------------------------------------------/*}





            {/* newly installed for experiment hover area *
            {/* ---show and hide left nav by mouseEnter and mouseLeave--- *
            {showText && (
              <nav className="accounts-nav">
                <ul className="accounts-list">
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word two <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word two
                      <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    {/* --------------------------Time Deposit Accounts in-line block-------------------------- *
                    <Link
                      id="acct-list-link"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      new word two <br /> Accounts{"              "}
                      <i
                        className="fa-solid fa-caret-right"
                        style={{ paddingLeft: "117px" }}
                      ></i>{" "}
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word two <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
            ----------------------------------------------------------------------*/}
            {/* newly installed for experiment hover area *
            {/* ---show and hide left nav by mouseEnter and mouseLeave--- *
            {showText && (
              <nav className="accounts-nav">
                <ul className="accounts-list">
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word three <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word three
                      <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    {/* --------------------------Time Deposit Accounts in-line block-------------------------- *
                    <Link
                      id="acct-list-link"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      new word three <br /> Accounts{"              "}
                      <i
                        className="fa-solid fa-caret-right"
                        style={{ paddingLeft: "117px" }}
                      ></i>{" "}
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word three <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
            ----------------------------------------------------------------------*/}
            {/* newly installed for experiment hover area *
            {/* ---show and hide left nav by mouseEnter and mouseLeave--- *
            {showText && (
              <nav className="accounts-nav">
                <ul className="accounts-list">
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word four <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word four
                      <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    {/* --------------------------Time Deposit Accounts in-line block-------------------------- *
                    <Link
                      id="acct-list-link"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      new word four <br /> Accounts{"              "}
                      <i
                        className="fa-solid fa-caret-right"
                        style={{ paddingLeft: "117px" }}
                      ></i>{" "}
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word four <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
  --------------------------------------------------------------------------------*/}

            {/* newly installed for experiment hover area *
            {/* ---show and hide left nav by mouseEnter and mouseLeave--- *
            {showText && (
              <nav className="accounts-nav">
                <ul className="accounts-list">
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word five <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word five
                      <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    {/* --------------------------Time Deposit Accounts in-line block-------------------------- *
                    <Link
                      id="acct-list-link"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      new word five <br /> Accounts{"              "}
                      <i
                        className="fa-solid fa-caret-right"
                        style={{ paddingLeft: "117px" }}
                      ></i>{" "}
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word five <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
----------------------------------------------------------------------------*/}
            {/* newly installed for experiment hover area */}
            {/* ---show and hide left nav by mouseEnter and mouseLeave--- */}
            {showText && (
              <nav className="accounts-nav">
                <ul className="accounts-list">
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word six <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word six
                      <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                  <li id="acct-list">
                    {/* --------------------------Time Deposit Accounts in-line block-------------------------- */}
                    <Link
                      id="acct-list-link"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      new word six <br /> Accounts{"              "}
                      <i
                        className="fa-solid fa-caret-right"
                        style={{ paddingLeft: "117px" }}
                      ></i>{" "}
                    </Link>
                  </li>
                  <li id="acct-list">
                    <Link id="acct-list-link">
                      new word six <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
      <div>
        {/* --------first picture of personal page girl trial only------- */}
      </div>
    </>
  );
};

export default PersonalMainPage;
