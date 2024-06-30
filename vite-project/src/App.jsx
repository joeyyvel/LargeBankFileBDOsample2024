import "./App.css";
import NavbarOne from "./components/NavbarOne";
import NavbarThreePerBus from "./components/NavbarThreePerBus";
import NavbarTwo from "./components/NavbarTwo";
import PersonalPage from "./components/personalRow/PersonalPage";

function App() {
  return (
    <>
      <NavbarOne />
      <NavbarTwo />
      <NavbarThreePerBus />
      <PersonalPage />
    </>
  );
}
export default App;
