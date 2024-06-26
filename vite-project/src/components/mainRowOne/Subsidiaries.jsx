import { Link } from "react-router-dom";

const Subsidiaries = () => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn mt-2 mx-4 fw-bold border-0 "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Subsidiaries
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
            <Link className="dropdown-item py-3" to="/bdoCapital">
              BDO Capital
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="/bdoFinance">
              BDO Finance
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="/bdoFoundation">
              BDO Foundation
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="/bdoInsure">
              BDO Insure
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="/bdoLife">
              BDO life
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="#">
              BDO Leasing
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="#">
              BDO Network Bank
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="#">
              BDO Private Bank
            </Link>
          </li>
          <li>
            <Link className="dropdown-item py-3" to="#">
              BDO Remit
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              BDO Securities
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Subsidiaries;
