import { PersonalMenuItem } from "../components/personalRow/PersonalMenuItem";
import { Link } from "react-router-dom";
import "../components/personalRow/PersonalMainPageStyle.css";
const PersonalMainAppPage = () => {
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
                  style={{ textDecoration: "none" }}
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

export default PersonalMainAppPage;
