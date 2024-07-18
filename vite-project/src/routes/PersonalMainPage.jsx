import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import { PersonalMenuItem } from "../components/personalRow/PersonalMenuItem";
import { Link } from "react-router-dom";
import "../components/personalRow/PersonalMainPageStyle.css";
import "../routes/personalMainPageStyle.css";

const PersonalMainPage = () => {
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
                  style={{ textDecoration: "none", color: "#004EA8" }}
                  id="personLine"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* -----------------Accounts page section----------------- */}
      <div className="main-body">
        <div className="accounts">
          <div className="accountsChild">
            <nav>
              <ul className="accounts-list">
                <li id="acct-list">
                  <Link id="acct-list-link">
                    Savings Accounts <i className="fa-solid fa-caret-right"></i>
                  </Link>
                </li>
                <li id="acct-list">
                  <Link id="acct-list-link">
                    Checking Accounts<i className="fa-solid fa-caret-right"></i>
                  </Link>
                </li>
                <li id="acct-list">
                  {/* -------------Time Deposit Accounts in-line block------------- */}
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
