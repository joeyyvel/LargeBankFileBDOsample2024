import PersonalMainPage from "../../routes/PersonalMainPage";
import AccountsPic from "../images/Accounts Overview Banner.png";
import { Link } from "react-router-dom";
import "./AccountsStyle.css";
const Accounts = () => {
  return (
    <>
      <PersonalMainPage />
      <body id="accounts">
        <div className="leftPanel">
          <p className="personalAccount">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Personal
            </Link>
            <i
              className="fa-solid fa-greater-than"
              style={{ color: "orange", fontSize: "12px", padding: "0 15px" }}
            ></i>
            <span style={{ fontWeight: "bolder", fontSize: "18px" }}>
              {" "}
              Accounts
            </span>{" "}
          </p>

          <h1 id="discover">
            Discover the best <br />
            BDO account for <br />
            you
          </h1>
          <p id="choose">
            Choose the best account from our range of <br /> Deposit product fit
            for your goals and lifestyle.
          </p>
        </div>
        <div className="rightPanel">
          <img src={AccountsPic} alt="" />
        </div>
      </body>
    </>
  );
};

export default Accounts;
