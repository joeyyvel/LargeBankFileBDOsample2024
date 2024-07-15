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
import BdoLeasing from "./components/mainRowOne/subsidiariesChildContent/BdoLeasing";
import BdoNetworkBank from "./components/mainRowOne/subsidiariesChildContent/BdoNetworkBank";
import BdoPrivateBank from "./components/mainRowOne/subsidiariesChildContent/BdoPrivateBank";
import BdoRemit from "./components/mainRowOne/subsidiariesChildContent/BdoRemit";
import BdoSecurities from "./components/mainRowOne/subsidiariesChildContent/BdoSecurities";
import BookAVisit from "./components/mainRowOne/branchesChildContent/BookAVisit";
import BranchAndAtmLocator from "./components/mainRowOne/branchesChildContent/BranchAndAtmLocator";
import BranchUpdates from "./components/mainRowOne/branchesChildContent/BranchUpdates";
import PersonalPage from "./components/personalRow/PersonalPage";
import Login from "./components/mainRowTwo/loginChildContent/Login";
import BdoOnlineBanking from "./components/mainRowTwo/loginChildContent/BdoOnlineBanking";
import NetworkBank from "./components/mainRowTwo/loginChildContent/NetworkBank";
import CashCard from "./components/mainRowTwo/loginChildContent/CashCard";
import IntegratedDisbursementSolutions from "./components/mainRowTwo/loginChildContent/IntegratedDisbursementSolutions";
import BusinessOnlineBanking from "./components/mainRowTwo/loginChildContent/BusinessOnlineBanking";
import NetworkBankEnroll from "./components/mainRowTwo/loginChildContent/NetworkBankEnroll";
import PersonalMainPage from "./routes/PersonalMainPage";
import Accounts from "./components/personalRow/Accounts";
import Cards from "./components/personalRow/Cards";
import Digital from "./components/personalRow/Digital";
import Loans from "./components/personalRow/Loans";
import Insurance from "./components/personalRow/Insurance";
import Investments from "./components/personalRow/Investments";
import Remittance from "./components/personalRow/Remittance";
import AssetsForSale from "./components/personalRow/AssetsForSale";
import Financing from "./components/businessRow/Financing";
import BusinessServices from "./components/businessRow/BusinessServices";
import InternationalBanking from "./components/businessRow/InternationalBanking";
import CorporateInsurance from "./components/businessRow/CorporateInsurance";
import CorporateCards from "./components/businessRow/CorporateCards";
import Investment from "./components/businessRow/Investment";
import Apply from "./components/mainRowTwo/apply/Apply";
import Search from "./components/mainRowTwo/apply/Search";
import BusinessMainPage from "./routes/BusinessMainPage";

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
  { path: "/bdoLeasing", element: <BdoLeasing /> },
  { path: "/bdoNetworkBank", element: <BdoNetworkBank /> },
  { path: "/bdoPrivateBank", element: <BdoPrivateBank /> },
  { path: "/bdoRemit", element: <BdoRemit /> },
  { path: "/bdoSecurities", element: <BdoSecurities /> },
  { path: "/bookAVisit", element: <BookAVisit /> },
  { path: "/branchAndAtmLocator", element: <BranchAndAtmLocator /> },
  { path: "/branchUpdates", element: <BranchUpdates /> },
  { path: "/personalPage", element: <PersonalPage /> },
  { path: "/login", element: <Login /> },
  { path: "/bdoOnlineBanking", element: <BdoOnlineBanking /> },
  { path: "/bdoSecurities", element: <BdoSecurities /> },
  { path: "/netWorkBank", element: <NetworkBank /> },
  { path: "/cashCard", element: <CashCard /> },
  {
    path: "/integratedDisbursementSolutions",
    element: <IntegratedDisbursementSolutions />,
  },
  { path: "/businessOnlineBanking", element: <BusinessOnlineBanking /> },
  { path: "/networkBankEnroll", element: <NetworkBankEnroll /> },
  { path: "/personalMainPage", element: <PersonalMainPage /> },
  { path: "/accounts", element: <Accounts /> },
  { path: "/cards", element: <Cards /> },
  { path: "/digital", element: <Digital /> },
  { path: "/loans", element: <Loans /> },
  { path: "/insurance", element: <Insurance /> },
  { path: "/investments", element: <Investments /> },
  { path: "/remittance", element: <Remittance /> },
  { path: "/assetsForSale", element: <AssetsForSale /> },
  { path: "/financing", element: <Financing /> },
  { path: "/businessServices", element: <BusinessServices /> },
  { path: "/investments", element: <Investments /> },
  { path: "/internationalBanking", element: <InternationalBanking /> },
  { path: "/corporateInsurance", element: <CorporateInsurance /> },
  { path: "/corporateCards", element: <CorporateCards /> },
  { path: "/investment", element: <Investment /> },
  { path: "/apply", element: <Apply /> },
  { path: "/search", element: <Search /> },
  { path: "/businessMainPage", element: <BusinessMainPage /> },
]);
