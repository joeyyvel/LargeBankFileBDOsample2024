import { BusinessMenuItem } from "../components/businessRow/BusinessMenuItem";
import { Link } from "react-router-dom";

const BusinessMainAppPage = () => {
  return (
    <>
      <div className="collapse busMenu" id="businessCollapse">
        <ul className="businessMenu">
          {BusinessMenuItem.map((item, index) => {
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
export default BusinessMainAppPage;
