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
                      <Link to="/corporateProfileOverview">
                        Corporate Profile Overview
                      </Link>
                    </li>
                    <li>
                      <Link to="/corporateDocuments">Corporate Documents</Link>
                    </li>
                    <li>
                      <Link to="/awardsAndRecognition">
                        Awards & Recognitions
                      </Link>
                    </li>
                    <li>
                      <Link to="/shareholderStructure">
                        Shareholder Structure
                      </Link>
                    </li>
                    <li>
                      <Link to="/organizationalStructure">
                        Organizational Structure
                      </Link>
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
                      <Link to="/investorRelationsOverview">
                        Investor Relations Overview
                      </Link>
                    </li>
                    <li>
                      <Link to="/financials">Financials</Link>
                    </li>
                    <li>
                      <Link to="/PresentationsAndEvents">
                        Presentations and Events
                      </Link>
                    </li>
                    <li>
                      <Link to="/capitalAndFunding">Capital and Funding</Link>
                    </li>
                    <li>
                      <Link to="/shareInformation">Share Information</Link>
                    </li>
                    <li>
                      <Link to="/frequentlyAskedQuestions">
                        Frequently Asked Questions
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactInformation">Contact information</Link>
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
                      <Link to="/corporateGovernanceOverview">
                        Corporate Governance Overview
                      </Link>
                    </li>
                    <li>
                      <Link to="/governanceStructure">
                        Governance Structure
                      </Link>
                    </li>
                    <li>
                      <Link to="/governanceManual">Governance Manual</Link>
                    </li>
                    <li>
                      <Link to="/companyPolicies">Companies Policies</Link>
                    </li>
                    <li>
                      <Link to="/governanceStandard">Governance Standards</Link>
                    </li>
                    <li>
                      <Link to="/enterpriseRisk">Enterprise Risk</Link>
                    </li>
                    <li>
                      <Link to="/sustainability">Sustainability</Link>
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
