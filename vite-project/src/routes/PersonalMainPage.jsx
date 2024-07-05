import personalPic from "../components/images/welcomeToBDOpersonal.png";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import { PersonalMenuItem } from "../components/personalRow/PersonalMenuItem";
import { Link } from "react-router-dom";
import "../components/personalRow/PersonalMainPageStyle.css";

const PersonalMainPage = () => {
  return (
    <>
      <NavbarOne />
      <NavbarTwo />

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
      <div>
        <img src={personalPic} alt="" />
      </div>
    </>
  );
};

export default PersonalMainPage;
