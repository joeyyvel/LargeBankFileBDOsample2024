import "./PersonalMainPageStyle.css";
import { PersonalMenuItem } from "./PersonalMenuItem";
import { Link } from "react-router-dom";
const PersonalMainPage = () => {
  return (
    <>
      <div className="perMenu">
        <ul className="personalMenu">
          {PersonalMenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.url}
                  style={{ textDecoration: "none", color: "#004EA8" }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PersonalMainPage;
