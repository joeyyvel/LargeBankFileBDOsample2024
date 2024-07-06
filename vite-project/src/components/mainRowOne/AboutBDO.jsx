import "../mainRowOne/AboutBDOstyle.css";
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
          className="btn mt-2  fw-bold border-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            marginLeft: "8px",
            marginRight: "15px",
          }}
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
        <div className="dropdown-content">
          <Link
            className="corporateProfile dropdown-toggle"
            onClick={() => setShow(!show)}
            to=""
          >
            Corporate Profile
          </Link>
          {show ? (
            <ul id="ulCorp">
              <li>
                <Link id="corpLink">Corporate Profile Overview</Link>
              </li>
              <li>
                <Link id="corpLink">Corporate Documents</Link>
              </li>
              <li>
                <Link id="corpLink">Awards & Recognition</Link>
              </li>
              <li>
                <Link id="corpLink">Shareholder Structure</Link>
              </li>
              <li>
                <Link id="corpLink">Organizational Structure</Link>
              </li>
            </ul>
          ) : null}
          {/* -----------------investor relations div */}
          <Link
            className="investorRelations dropdown-toggle"
            onClick={() => setShow1(!show1)}
          >
            Investor Relations
          </Link>
          {show1 ? (
            <ul id="ulInvest">
              <li>
                <Link id="ILink">Investor Relations Overview</Link>
              </li>
              <li>
                <Link id="ILink">Financials</Link>
              </li>
              <li>
                <Link id="ILink">Presentations & Events</Link>
              </li>
              <li>
                <Link id="ILink">Capital & Funding</Link>
              </li>
              <li>
                <Link id="ILink">Share Information</Link>
              </li>
              <li>
                <Link id="ILink">Frequent Asked Questions</Link>
              </li>
              <li>
                <Link id="ILink">Contact Information</Link>
              </li>
            </ul>
          ) : null}
          {/* --------------------corporate governance--------------- */}
          <Link
            className="corporateGovernance dropdown-toggle"
            onClick={() => setShow2(!show2)}
          >
            Corporate Governance
          </Link>
          {show2 ? (
            <ul id="ulGovernance">
              <li>
                <Link id="GLink">Corporate Governance Overview</Link>
              </li>
              <li>
                <Link id="GLink">Governance Structure</Link>
              </li>
              <li>
                <Link id="GLink">Governance Manual</Link>
              </li>
              <li>
                <Link id="GLink">Company Policies</Link>
              </li>
              <li>
                <Link id="GLink">Governance Standards</Link>
              </li>
              <li>
                <Link id="GLink">Enterprise Risk Management</Link>
              </li>
            </ul>
          ) : null}
          {/* ----------------------Sustainability------------------ */}
          <Link
            className="sustainability dropdown-toggle"
            onClick={() => setShow3(!show3)}
          >
            Sustainability
          </Link>
          {show3 ? (
            <ul id="ulSustainability">
              <li>
                <Link id="SLink">Sustainability Overview</Link>
              </li>
              <li>
                <Link id="SLink">Sustainable Finance</Link>
              </li>
              <li>
                <Link id="SLink">Sustainability Reporting</Link>
              </li>
              <li>
                <Link id="SLink">News & Features</Link>
              </li>
              <li>
                <Link id="SLink">ESG Awards</Link>
              </li>
            </ul>
          ) : null}
          {/* ---------------------All Disclosures------------------- */}
          <Link
            className="allDisclosures dropdown-toggle"
            onClick={() => setShow4(!show4)}
          >
            All Disclosures
          </Link>
          {show4 ? (
            <ul id="allUl">
              <li>
                <Link id="ALink">All Disclosures Overview</Link>
              </li>
              <li>
                <Link id="ALink">Ownership</Link>
              </li>
              <li>
                <Link id="ALink">Annual Stockholders Meeting</Link>
              </li>
              <li>
                <Link id="ALink">SEC Filings</Link>
              </li>
              <li>
                <Link id="ALink">All Disclosures</Link>
              </li>
              <li>
                <Link id="ALink">Compliance and AMLA</Link>
              </li>
            </ul>
          ) : null}
          {/* --------------------Learn--------------------------*/}
          <Link
            className="learn dropdown-toggle"
            onClick={() => setShow5(!show5)}
          >
            Learn
          </Link>
          {show5 ? (
            <ul id="ulLearn">
              <li>
                <Link id="uLink">Learn Overview</Link>
              </li>
              <li>
                <Link id="uLink">News and Features</Link>
              </li>
              <li>
                <Link id="uLink">BDO StopScam</Link>
              </li>
              <li>
                <Link id="uLink">Help & Support</Link>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AboutBDO;
