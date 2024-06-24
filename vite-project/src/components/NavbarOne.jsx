import AboutBDO from "./mainRowOne/AboutBDO";
import Branches from "./mainRowOne/Branches";
import Subsidiaries from "./mainRowOne/Subsidiaries";
import "../components/mainRowOne/NavbarOneStyle.css";

function NavbarOne() {
  return (
    <>
      <div className="navRowOne">
        <AboutBDO />
        <Subsidiaries />
        <Branches />
      </div>
    </>
  );
}

export default NavbarOne;
