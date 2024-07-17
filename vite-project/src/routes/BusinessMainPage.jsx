import { BusinessMenuItem } from "../components/businessRow/BusinessMenuItem";
import { Link } from "react-router-dom";
import "../components/businessRow/BusinessMainPageStyle.css";
import businessPic from "../components/images/welcomeToBDOBusiness.png";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import "../routes/businessMainPageStyle.css";
const BusinessMainPage = () => {
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
                  id="businessLine"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="picture">
        <img src={businessPic} alt="business picture" />
      </div>
    </>
  );
};
export default BusinessMainPage;
