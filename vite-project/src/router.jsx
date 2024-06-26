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
import SustainabilityOverview from "./components/mainRowOne/aboutChildContent/SustainabilityOverview";
import SustainableFinance from "./components/mainRowOne/aboutChildContent/SustainableFinance";
import SustainabilityReporting from "./components/mainRowOne/aboutChildContent/SustainabilityReporting";
import NewsAndFeatures from "./components/mainRowOne/aboutChildContent/NewsAndFeatures";
import EsgAwards from "./components/mainRowOne/aboutChildContent/EsgAwards";
import AllDisclosuresOverview from "./components/mainRowOne/aboutChildContent/AllDisclosuresOverview";
import Ownership from "./components/mainRowOne/aboutChildContent/Ownership";
import AnnualStockholdersMeeting from "./components/mainRowOne/aboutChildContent/AnnualStockholdersMeeting";
import SecFilings from "./components/mainRowOne/aboutChildContent/SecFilings";
import ComplianceAndAMLA from "./components/mainRowOne/aboutChildContent/ComplianceAndAMLA";
import LearnOverview from "./components/mainRowOne/aboutChildContent/LearnOverview";
import BDOstopScam from "./components/mainRowOne/aboutChildContent/BDOstopScam";
import HelpAndSupport from "./components/mainRowOne/aboutChildContent/HelpAndSupport";
import BdoCapital from "./components/mainRowOne/subsidiariesChildContent/BdoCapital";
import BdoFinance from "./components/mainRowOne/subsidiariesChildContent/BdoFinance";
import BdoFoundation from "./components/mainRowOne/subsidiariesChildContent/BdoFoundation";
import BdoInsure from "./components/mainRowOne/subsidiariesChildContent/BdoInsure";
import BdoLife from "./components/mainRowOne/subsidiariesChildContent/BdoLife";

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
  { path: "/sustainabilityOverview", element: <SustainabilityOverview /> },
  { path: "/sustainableFinance", element: <SustainableFinance /> },
  { path: "/sustainabilityReporting", element: <SustainabilityReporting /> },
  { path: "/newsAndFeatures", element: <NewsAndFeatures /> },
  { path: "/esgAwards", element: <EsgAwards /> },
  { path: "/allDisclosuresOverview", element: <AllDisclosuresOverview /> },
  { path: "/ownership", element: <Ownership /> },
  {
    path: "/annualStockholdersMeeting",
    element: <AnnualStockholdersMeeting />,
  },
  { path: "/secFilings", element: <SecFilings /> },
  { path: "/complianceAndAMLA", element: <ComplianceAndAMLA /> },
  { path: "/learnOverview", element: <LearnOverview /> },
  { path: "/bdoStopScam", element: <BDOstopScam /> },
  { path: "/helpAndSupport", element: <HelpAndSupport /> },
  { path: "/bdoCapital", element: <BdoCapital /> },
  { path: "/bdoFinance", element: <BdoFinance /> },
  { path: "/bdoFoundation", element: <BdoFoundation /> },
  { path: "/bdoInsure", element: <BdoInsure /> },
  { path: "/bdoLife", element: <BdoLife /> },
]);
