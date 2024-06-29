import { BusinessMenuItem } from "./BusinessMenuItem";
import { Link } from "react-router-dom";
import "./BusinessMainPageStyle.css";
const BusinessMainPage = () => {
  return (
    <>
      <div className="busMenu">
        <ul className="businessMenu">
          {BusinessMenuItem.map((item, index) => {
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

export default BusinessMainPage;
