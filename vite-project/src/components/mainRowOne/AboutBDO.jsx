import { Link } from "react-router-dom";

const AboutBDO = () => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn mt-2  fw-bold border-0 hover-color-red"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          About BDO
          <i
            className="fa-solid fa-caret-down"
            style={{
              paddingLeft: "8px",
              fontSize: "12px",
              color: "gray",
            }}
          ></i>
        </button>
        <ul className="dropdown-menu rounded-0 p-0 border-0 mt-1">
          <li>
            <Link className="dropdown-item py-3" to="#">
              Corporate Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="#">
              Investor Relations
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3 m-0 " to="#">
              Corporate Governance
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="#">
              Sustainability
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="#">
              All Disclosures
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="#">
              Learn
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutBDO;
