import welcomeToBDOBusiness from "../images/welcomeToBDOBusiness.png";
import NavbarOne from "../NavbarOne";
import NavbarTwo from "../NavbarTwo";
import { BusinessMenuItem } from "./BusinessMenuItem";
import "../businessRow/BusinessMainPageStyle.css";
import { Link } from "react-router-dom";
const BusinessPage = () => {
  return (
    <>
      <NavbarOne />
      <NavbarTwo />
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
      <img src={welcomeToBDOBusiness} alt="" />
    </>
  );
};

export default BusinessPage;
