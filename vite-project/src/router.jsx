import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutBDO from "./components/mainRowOne/AboutBDO";
import Branches from "./components/mainRowOne/Branches";
import Subsidiaries from "./components/mainRowOne/Subsidiaries";
import CorporateProfileOverview from "./components/mainRowOne/aboutChildContent/CorporateProfileOverview";
import CorporateDocuments from "./components/mainRowOne/aboutChildContent/CorporateDocuments";
import AwardsAndRecognition from "./components/mainRowOne/aboutChildContent/AwardsAndRecognition";
import ShareholderStructure from "./components/mainRowOne/aboutChildContent/ShareholderStructure";
import OrganizationalStructure from "./components/mainRowOne/aboutChildContent/OrganizationalStructure";
import InvestorRelationsOverview from "./components/mainRowOne/aboutChildContent/InvestorRelationsOverview";
import Financials from "./components/mainRowOne/aboutChildContent/Financials";
import PresentationsAndEvents from "./components/mainRowOne/aboutChildContent/PresentationsAndEvents";
import CapitalAndFunding from "./components/mainRowOne/aboutChildContent/CapitalAndFunding";
import ShareInformation from "./components/mainRowOne/aboutChildContent/ShareInformation";
import FrequentlyAskedQuestions from "./components/mainRowOne/aboutChildContent/FrequentlyAskedQuestions";
import ContactInformation from "./components/mainRowOne/aboutChildContent/ContactInformation";
import CorporateGovernanceOverview from "./components/mainRowOne/aboutChildContent/CorporateGovernanceOverview";
import GovernanceStructure from "./components/mainRowOne/aboutChildContent/GovernanceStructure";
import GovernanceManual from "./components/mainRowOne/aboutChildContent/GovernanceManual";
import CompanyPolicies from "./components/mainRowOne/aboutChildContent/CompanyPolicies";
import GovernanceStandard from "./components/mainRowOne/aboutChildContent/GovernanceStandard";
import EnterpriseRisk from "./components/mainRowOne/EnterpriseRisk";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aboutBDO", element: <AboutBDO /> },
  { path: "/branches", element: <Branches /> },
  { path: "/subsidiaries", element: <Subsidiaries /> },
  { path: "/corporateProfileOverview", element: <CorporateProfileOverview /> },
  { path: "/corporateDocuments", element: <CorporateDocuments /> },
  { path: "/awardsAndRecognition", element: <AwardsAndRecognition /> },
  { path: "/shareHolderStructure", element: <ShareholderStructure /> },
  { path: "/organizationalStructure", element: <OrganizationalStructure /> },
  {
    path: "/investorRelationsOverview",
    element: <InvestorRelationsOverview />,
  },
  { path: "/financials", element: <Financials /> },
  { path: "/presentationsAndEvents", element: <PresentationsAndEvents /> },
  { path: "/capitalAndFunding", element: <CapitalAndFunding /> },
  { path: "/shareInformation", element: <ShareInformation /> },
  { path: "/frequentlyAskedQuestions", element: <FrequentlyAskedQuestions /> },
  { path: "/contactInformation", element: <ContactInformation /> },
  {
    path: "/corporateGovernanceOverview",
    element: <CorporateGovernanceOverview />,
  },
  { path: "/governanceStructure", element: <GovernanceStructure /> },
  { path: "/governanceManual", element: <GovernanceManual /> },
  { path: "/companyPolicies", element: <CompanyPolicies /> },
  { path: "/governanceStandard", element: <GovernanceStandard /> },
  { path: "/enterpriseRisk", element: <EnterpriseRisk /> },
]);
