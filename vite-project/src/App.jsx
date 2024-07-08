import "./App.css";
import NavbarOne from "./components/NavbarOne";

import NavbarTwo from "./components/NavbarTwo";
import PersonalPage from "./components/personalRow/PersonalPage";
import PersonalMainAppPage from "./routes/PersonalMainAppPage";

function App() {
  return (
    <>
      <NavbarOne />
      <NavbarTwo />
      <PersonalMainAppPage />

      <PersonalPage />
    </>
  );
}
export default App;
