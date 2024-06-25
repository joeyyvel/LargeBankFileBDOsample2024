import { Link } from "react-router-dom";
import { useState } from "react";

const AboutBDO = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
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
            <Link
              className="dropdown dropdown-item py-3"
              onClick={() => setShow(!show)}
            >
              Corporate Profile
              <i
                className="fa-solid fa-caret-down"
                style={{
                  paddingLeft: "3.5rem",
                  fontSize: "12px",
                  color: "gray",
                }}
              ></i>
              <div className="dropOne">
                {show ? (
                  <>
                    <li>
                      <Link>one</Link>
                    </li>
                    <li>
                      <Link>two</Link>
                    </li>
                    <li>
                      <Link>three</Link>
                    </li>
                    <li>
                      <Link>four</Link>
                    </li>
                    <li>
                      <Link>five</Link>
                    </li>
                  </>
                ) : null}
              </div>
            </Link>
          </li>

          <li>
            <Link
              className="dropdown-item py-3"
              onClick={() => setShow1(!show1)}
            >
              Investor Relations
              <i
                className="fa-solid fa-caret-down"
                style={{
                  paddingLeft: "3rem",
                  fontSize: "12px",
                  color: "gray",
                }}
              ></i>
              <div className="dropTwo">
                {show1 ? (
                  <>
                    <li>
                      <Link>Investor One</Link>
                    </li>
                    <li>
                      <Link>Investor two</Link>
                    </li>
                    <li>
                      <Link>Investor three</Link>
                    </li>
                    <li>
                      <Link>Investor four</Link>
                    </li>
                    <li>
                      <Link>Investor five</Link>
                    </li>
                    <li>
                      <Link>Investor six</Link>
                    </li>
                    <li>
                      <Link>Investor seven</Link>
                    </li>
                  </>
                ) : null}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item py-3 m-0 "
              onClick={() => setShow2(!show2)}
            >
              Corporate Governance
              <i
                className="fa-solid fa-caret-down"
                style={{
                  paddingLeft: "1.1rem",
                  fontSize: "12px",
                  color: "gray",
                }}
              ></i>
              <div className="dropThree">
                {show2 ? (
                  <>
                    <li>
                      <Link>Corporate one</Link>
                    </li>
                    <li>
                      <Link>Corporate two</Link>
                    </li>
                    <li>
                      <Link>Corporate three</Link>
                    </li>
                    <li>
                      <Link>Corporate four</Link>
                    </li>
                    <li>
                      <Link>Corporate five</Link>
                    </li>
                    <li>
                      <Link>Corporate six</Link>
                    </li>
                  </>
                ) : null}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item py-3"
              onClick={() => setShow3(!show3)}
            >
              Sustainability
              <i
                className="fa-solid fa-caret-down"
                style={{
                  paddingLeft: "5rem",
                  fontSize: "12px",
                  color: "gray",
                }}
              ></i>
              <div className="dropFour">
                {show3 ? (
                  <>
                    <li>
                      <Link>Sustainability 1</Link>
                    </li>
                    <li>
                      <Link>Sustainability 2</Link>
                    </li>
                    <li>
                      <Link>Sustainability 3</Link>
                    </li>
                    <li>
                      <Link>Sustainability 4</Link>
                    </li>
                    <li>
                      <Link>Sustainability 5</Link>
                    </li>
                  </>
                ) : null}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item py-3"
              onClick={() => setShow4(!show4)}
            >
              All Disclosures
              <i
                className="fa-solid fa-caret-down"
                style={{
                  paddingLeft: "4.2rem",
                  fontSize: "12px",
                  color: "gray",
                }}
              ></i>
              <div className="dropFive">
                {show4 ? (
                  <>
                    <li>
                      <Link>Disclosures 1</Link>
                    </li>
                    <li>
                      <Link>Disclosures 2</Link>
                    </li>
                    <li>
                      <Link>Disclosures 3</Link>
                    </li>
                    <li>
                      <Link>Disclosures 4</Link>
                    </li>
                    <li>
                      <Link>Disclosures 5</Link>
                    </li>
                  </>
                ) : null}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item py-3"
              onClick={() => setShow5(!show5)}
            >
              Learn
              <i
                className="fa-solid fa-caret-down"
                style={{
                  paddingLeft: "8.3rem",
                  fontSize: "12px",
                  color: "gray",
                }}
              ></i>
              <div className="dropSix">
                {show5 ? (
                  <>
                    <li>
                      <Link>Learn 1</Link>
                    </li>
                    <li>
                      <Link>Learn 2</Link>
                    </li>
                    <li>
                      <Link>Learn 3</Link>
                    </li>
                    <li>
                      <Link>Learn 4</Link>
                    </li>
                  </>
                ) : null}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutBDO;
