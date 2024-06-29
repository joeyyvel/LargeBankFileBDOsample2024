import "./App.css";
import NavbarOne from "./components/NavbarOne";
import NavbarTwo from "./components/NavbarTwo";
import BusinessMainPage from "./components/businessRow/BusinessMainPage";
import PersonalMainPage from "./components/personalRow/PersonalMainPage";

function App() {
  return (
    <>
      <NavbarOne />
      <NavbarTwo />
      <PersonalMainPage />
      <BusinessMainPage />
    </>
  );
}
export default App;
