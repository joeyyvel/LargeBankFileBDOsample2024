import { PersonalMenuItem } from "./personalRow/PersonalMenuItem";
import { BusinessMenuItem } from "./businessRow/BusinessMenuItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../components/personalRow/PersonalMainPageStyle.css";
import "../components/businessRow/BusinessMainPageStyle.css";

const NavbarThreePerBus = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  return (
    <>
      {show ? (
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
      ) : null}
      <div
        onClick={() => setShow(!show)}
        style={{ backgroundColor: "red", textAlign: "center" }}
      >
        personal sample button
      </div>

      {/*------------------------- business button---------------------------  */}

      {show1 ? (
        <div className="busMenu">
          <ul className="businessMenu">
            {BusinessMenuItem.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.cName}
                    to={item.url}
                    style={{ color: "#004EA8", textDecoration: "none" }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      <div
        onClick={() => setShow1(!show1)}
        style={{ backgroundColor: "red", textAlign: "center" }}
      >
        Business program button
      </div>
    </>
  );
};

export default NavbarThreePerBus;
